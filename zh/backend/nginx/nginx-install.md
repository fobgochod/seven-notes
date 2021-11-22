# Install

## 文档

- [http://nginx.org/en/download.html](http://nginx.org/en/download.html)

## Linux

> 目录结构

```
/
├── opt
│   ├── install
│   │   └── nginx
│   │       └── conf
│   └── package
│       └── nginx
│           ├── nginx-1.18.0
│           └── nginx-1.18.0.tar.gz
├── root(me)
└── usr
```

### 源码安装

> 参考

- [【官网】Building nginx from Sources](http://nginx.org/en/docs/configure.html)
- [https://www.cnblogs.com/chenxiaochan/p/7253407.html](https://www.cnblogs.com/chenxiaochan/p/7253407.html)
- [https://blog.csdn.net/t8116189520/article/details/81909574](https://blog.csdn.net/t8116189520/article/details/81909574)

> 安装

```sh
# 新建目录，拷贝解压nginx:
mkdir -p /opt/{install/nginx,package/nginx}
cd /opt/package/nginx
wget http://nginx.org/download/nginx-1.18.0.tar.gz
tar -zxvf nginx-1.18.0.tar.gz

# 一键安装四个依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel

# 安装
cd nginx-1.18.0
# 生成Makefile
./configure --prefix=/opt/install/nginx
# 编译
make
# 安装
make install PREFIX=/opt/install/nginx
```

> 启动

```sh
# 打开配置文件，修改默认端口
vi /opt/install/nginx/conf/nginx.conf
# 启动
cd /opt/install/nginx/sbin
./nginx
# 停止
./nginx -s stop
# 重启
./nginx -s reload
# 查看nginx进程是否启动：
ps -ef | grep nginx
```

> 构建systemctl服务

```sh
# 关闭之前启动的nginx服务
pkill -9 nginx

# systemctl管理(内容下面代码块)
vi /usr/lib/systemd/system/nginx.service

# 重载所有配置文件
systemctl daemon-reload
systemctl enable nginx
systemctl start nginx
```

```sh
# /usr/lib/systemd/system/nginx.service
[Unit]
Description=nginx - high performance web server
Documentation=http://nginx.org/en/docs/
After=network-online.target remote-fs.target nss-lookup.target
Wants=network-online.target

[Service]
Type=forking
PIDFile=/opt/install/nginx/logs/nginx.pid
ExecStart=/opt/install/nginx/sbin/nginx -c /opt/install/nginx/conf/nginx.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s TERM $MAINPID

[Install]
WantedBy=multi-user.target
```

> 防火墙

```sh
firewall-cmd --permanent --zone=public --add-port=80/tcp
firewall-cmd --permanent --zone=public --remove-port=80/tcp
firewall-cmd --reload
firewall-cmd --list-ports
```

### YUM安装

> 参考：

- [【官网】yum install](http://nginx.org/en/linux_packages.html#RHEL-CentOS)

```sh
# 安装
yum install nginx
# 配置文件路径
vi /etc/nginx/nginx.conf
# 启动、关闭
systemctl start nginx
systemctl stop nginx
# 重启
nginx -s reload
# 开机启动
systemctl enable nginx
# 验证是否启动
ps -ef |grep nginx
```