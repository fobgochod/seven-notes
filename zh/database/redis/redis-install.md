# Install

## 文档

- [https://redis.io/download](https://redis.io/download)
- [https://download.redis.io/releases/redis-6.0.10.tar.gz](https://download.redis.io/releases/redis-6.0.10.tar.gz)

## Linux

> 目录结构

```
/
├── opt
│   ├── install
│   │   └── redis
│   │       ├── bin
│   │       ├── etc
│   │       │    └── redis.conf
│   │       ├── lib
│   │       └── log
│   └── package
│       └── redis
│           ├── redis-6.2.4
│           │    ├── src
│           │    ├── utils
│           │    │     └── install_server.sh
│           │    ├── redis.conf
│           │    └── sentinel.conf
│           └── redis-6.2.4.tar.gz
├── root(me)
└── usr
```

### 源码安装

#### 安装

```sh
mkdir -p /opt/{install/redis/{lib,etc,lib,log},package/redis}
cd /opt/package/redis
# 下载
wget https://download.redis.io/releases/redis-6.2.4.tar.gz
# 解压
tar -zxvf redis-6.2.4.tar.gz
cd redis-6.2.4
# 编译
make
# 不成功可以再试试
# yum install gcc
# make distclean
# make
# 安装到/opt/install/redis
make install PREFIX=/opt/install/redis
```

#### 复制redis.conf

```sh
cp /opt/package/redis/redis-6.2.4/redis.conf /opt/install/redis/etc/redis.conf
```

#### 启动服务端、客户端

```sh
# 可以cd到PREFIX指定的安装目录
cd /opt/install/redis/bin
# 或者redis-6.2.4/src目录
cd /opt/package/redis/redis-6.2.4/src

# 1.启动服务端
./redis-server
# 后台启动
./redis-server &
# 指定配置文件启动
./redis-server /opt/install/redis/etc/redis.conf
#./redis-server /opt/package/redis/redis-6.2.4/redis.conf

# 2.启动客户端
./redis-cli

# 3.关闭服务端
./redis-cli shutdown
# 或者
ps -aux|grep redis-server
kill -9 pid
```

> 设定环境变量

```sh
# 设定环境变量
vi /etc/profile
export REDIS_HOME=/opt/install/redis
export PATH=$PATH:${REDIS_HOME}/bin
# 使环境变量生效
source /etc/profile
echo $PATH

# 设定后可以直接启动
redis-server
redis-cli
```

#### 注册服务

##### 执行install_server.sh

> 多次执行`install_server.sh`可安装多个redis

```sh
# 注册服务(service redis status)
[root@fobgochod ~]# cd /opt/package/redis/redis-6.2.4/utils
[root@fobgochod utils]# ./install_server.sh 
Welcome to the redis service installer
This script will help you easily set up a running redis server

Please select the redis port for this instance: [6379] 
Selecting default: 6379
Please select the redis config file name [/etc/redis/6379.conf] /opt/install/redis/etc/6379.conf
Please select the redis log file name [/var/log/redis_6379.log] /opt/install/redis/log/6379.log
Please select the data directory for this instance [/var/lib/redis/6379] /opt/install/redis/lib/6379
Please select the redis executable path [/opt/install/redis/bin/redis-server] 
Selected config:
Port           : 6379
Config file    : /opt/install/redis/etc/6379.conf
Log file       : /opt/install/redis/log/6379.log
Data dir       : /opt/install/redis/lib/6379
Executable     : /opt/install/redis/bin/redis-server
Cli Executable : /opt/install/redis/bin/redis-cli
Is this ok? Then press ENTER to go on or Ctrl-C to abort.
Copied /tmp/6379.conf => /etc/init.d/redis_6379
Installing service...
Successfully added to chkconfig!
Successfully added to runlevels 345!
Starting Redis server...
Installation successful!
[root@fobgochod utils]# 
```

##### Redis运行命令目录

```sh
cd /etc/init.d/
```

##### 配置修改

> /opt/install/redis/etc/6379.conf

```sh
# 方式一
# 注释掉配置文件中的bind 【ip address】
# bind 127.0.0.1
# 关闭Redis的服务保护模式
protected-mode no

# 方式二
bind 0.0.0.0
# PS 该模式下Redis的服务保护模式不需要关闭
protected-mode yes

# Redis后台启动
daemonize yes
```

#### FAQ

##### gcc版本低了

```sh
yum -y install centos-release-scl
yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
scl enable devtoolset-9 bash
echo "source /opt/rh/devtoolset-9/enable" >> /etc/profile
gcc -v
```

##### 以前安装过低版本redis

```sh
service redis start 
# 里面的redis_service路径是老版本5.0的redis，但是/etc/redis/6379.conf是6.0的
vi /etc/init.d redis  

Starting Redis server...

*** FATAL CONFIG FILE ERROR ***
Reading the configuration file, at line 356
>>> 'rdb-del-sync-files no'
Bad directive or wrong number of arguments
```

##### redis版本较高，如redis-6.2.4，注册服务会提示如下

```sh
[root@fobgochod utils]# ./install_server.sh 
Welcome to the redis service installer
This script will help you easily set up a running redis server

This systems seems to use systemd.
Please take a look at the provided example service unit files in this directory, and adapt and install them. Sorry!


# 方案一，注释安装文件install_server.sh中对应检查
#bail if this system is managed by systemd
#_pid_1_exe="$(readlink -f /proc/1/exe)"
#if [ "${_pid_1_exe##*/}" = systemd ]
#then
#        echo "This systems seems to use systemd."
#        echo "Please take a look at the provided example service unit files in this directory, and adapt and install them. Sorry!"
#        exit 1
#fi
#unset _pid_1_exe
```

##### 注册服务后启动失败

```sh
# 问题
[root@fobgochod utils]# service redis_6379 start
/var/run/redis_6379.pid exists, process is already running or crashed

# 解决
[root@fobgochod utils]# rm -f /var/run/redis_6379.pid 
[root@fobgochod utils]#
```

### YUM安装
