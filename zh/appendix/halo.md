# Halo

[https://halo.run](https://halo.run)

### install openjdk11

```shell
# 安装
cd /opt/package/java
wget https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz
tar -zxvf openjdk-11.0.2_linux-x64_bin.tar.gz
# 检查
cd jdk-11.0.2/bin
java -version
```

### 安装Mysql

> [CentOS8 安装 MySQL8.0（RPM）](https://blog.51cto.com/u_11261718/2465227)

```shell
wget https://repo.mysql.com//mysql80-community-release-el8-1.noarch.rpm
# 创建数据库
create database halo character set utf8mb4 collate utf8mb4_bin;
```

### 下载halo

```shell
# 下载halo
wget https://dl.halo.run/release/halo-1.4.12.jar
# 下载配置文件
mkdir -p /opt/source/backend/halo
cd /opt/source/backend/halo
wget https://dl.halo.run/config/application-template-mysql.yaml
# wget https://dl.halo.run/config/application-template-h2.yaml
mv application-template-mysql.yaml application.yaml

# 修改端口数据库等信息
vi application.yml 
```

### 启动halo

```shell
/opt/package/java/jdk-11.0.2/bin/java -jar halo-1.4.12.jar
```

### 作为服务运行

```sh
wget https://dl.halo.run/config/halo.service -O /etc/systemd/system/halo.service
vi /etc/systemd/system/halo.service

systemctl daemon-reload
systemctl enable halo
systemctl start halo
# 查看服务日志检查启动状态
journalctl -n 20 -u halo
```

```sh
[Unit]
Description=Halo Service
Documentation=https://docs.halo.run
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/bin/sh -c 'cd /opt/source/backend/halo && /opt/package/java/jdk-11.0.2/bin/java -server -Xms256m -Xmx256m -jar halo-1.4.12.jar'
ExecStop=/bin/kill -s QUIT $MAINPID
Restart=always
StandOutput=syslog

StandError=inherit

[Install]
WantedBy=multi-user.target
```

