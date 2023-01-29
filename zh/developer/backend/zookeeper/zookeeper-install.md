# Install

## 文档

- [https://zookeeper.apache.org/index.html](https://zookeeper.apache.org/index.html)
- [Download](https://zookeeper.apache.org/releases.html#download)
- [Getting Started](https://zookeeper.apache.org/doc/current/zookeeperStarted.html)
- [ZooKeeper CLI](https://zookeeper.apache.org/doc/current/zookeeperCLI.html)

## Linux

> 目录结构

```
/
├── opt
│   ├── install
│   │   └── zookeeper
│   │       └── data
│   └── package
│       └── zookeeper
│           ├── apache-zookeeper-3.6.3-bin
│           └── apache-zookeeper-3.6.3-bin.tar.gz
├── root(me)
└── usr
```

### 源码安装

> 安装

```sh
mkdir -p /opt/{install/zookeeper/data,package/zookeeper}
cd /opt/package/zookeeper
wget https://dlcdn.apache.org/zookeeper/zookeeper-3.6.3/apache-zookeeper-3.6.3-bin.tar.gz
tar xf apache-zookeeper-3.6.3-bin.tar.gz

cd apache-zookeeper-3.6.3-bin/conf/
cp zoo_sample.cfg zoo.cfg
vi zoo.cfg
# 修改dataDir目录
dataDir=/opt/install/zookeeper/data

# 设置环境变量
vi /etc/profile
# ZooKeeper
export ZOOKEEPER_HOME=/opt/package/zookeeper/apache-zookeeper-3.6.3-bin
export PATH=${ZOOKEEPER_HOME}/bin:$PATH
# 让修改生效：. 或者 source
. /etc/profile
```

### 集群安装

> 准备4台主机

- `172.16.2.91`
- `172.16.2.92`
- `172.16.2.93`
- `172.16.2.94`

##### 1. 创建基础目录(4台)

```sh
mkdir -p /opt/{install/zookeeper/data,package/zookeeper}
```

##### 2. 172.16.2.91执行

```sh
cd /opt/package/zookeeper
wget https://dlcdn.apache.org/zookeeper/zookeeper-3.6.3/apache-zookeeper-3.6.3-bin.tar.gz
tar xf apache-zookeeper-3.6.3-bin.tar.gz

# 修改配置文件 zoo.cfg
cd apache-zookeeper-3.6.3-bin/conf/
cp zoo_sample.cfg zoo.cfg
vi zoo.cfg
---
dataDir=/etc/install/zookeeper/data

server.1=172.16.2.91:2888:3888
server.2=172.16.2.92:2888:3888
server.3=172.16.2.93:2888:3888
server.4=172.16.2.94:2888:3888
---

# 拷贝到其它三台主机
scp -r /opt/package/zookeeper/apache-zookeeper-3.6.3-bin/ 172.16.2.92:`pwd`
scp -r /opt/package/zookeeper/apache-zookeeper-3.6.3-bin/ 172.16.2.93:`pwd`
scp -r /opt/package/zookeeper/apache-zookeeper-3.6.3-bin/ 172.16.2.94:`pwd`
```

##### 3. 在dataDir目录下添加myid(4台)

```sh
echo 1 > /opt/install/zookeeper/data/myid
echo 2 > /opt/install/zookeeper/data/myid
echo 3 > /opt/install/zookeeper/data/myid
echo 4 > /opt/install/zookeeper/data/myid
```

##### 4. 设置环境变量(4台)

```sh
vi /etc/profile
# ZooKeeper
export ZOOKEEPER_HOME=/opt/package/zookeeper/apache-zookeeper-3.6.3-bin
export PATH=${ZOOKEEPER_HOME}/bin:$PATH
# 让修改生效：. 或者 source
. /etc/profile
```

#### 启动服务端、客户端

```sh
zkServer.sh help
# 前台启动（start默认后台启动）
zkServer.sh start-foreground
# 启动客户端
zkCli.sh
[zk: localhost:2181(CONNECTED) 0] ls /
[zookeeper]
[zk: localhost:2181(CONNECTED) 1] create /hello
Created /hello
[zk: localhost:2181(CONNECTED) 2] ls /
[hello, zookeeper]
[zk: localhost:2181(CONNECTED) 3] get /hello 
null
[zk: localhost:2181(CONNECTED) 4] set /hello "world"
[zk: localhost:2181(CONNECTED) 5] get /hello 
world
[zk: localhost:2181(CONNECTED) 6] get -s /hello 
world
cZxid = 0x10000000f
ctime = Sun Sep 05 07:56:56 EDT 2021
mZxid = 0x100000011
mtime = Sun Sep 05 07:58:16 EDT 2021
pZxid = 0x10000000f
cversion = 0
dataVersion = 1
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 5
numChildren = 0
[zk: localhost:2181(CONNECTED) 7] help
```

### YUM安装


