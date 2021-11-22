# 防火墙

## firewall-cmd

### 安装

```shell
yum install -y firewalld
```

```sh
# 开启服务
systemctl start firewalld
# 关闭防火墙
systemctl stop firewalld

# 开机自动启动
systemctl enable firewalld
# 关闭开机制动启动
systemctl disable firewalld
```

### 常用命令

```sh
# 查看版本
firewall-cmd --version
# 查看帮助
firewall-cmd --help
# 显示状态(关闭-notrunning，开启-running)
firewall-cmd --state
# 查看防火墙规则
# 只显示/etc/firewalld/zones/public.xml中防火墙策略
firewall-cmd --list-all
# 显示/etc/firewalld/zones/下的所有策略
firewall-cmd --list-all-zones
# 更新防火墙规则
firewall-cmd --reload
# 查看区域信息
firewall-cmd --get-active-zones
# 查看指定接口所属区域
firewall-cmd --get-zone-of-interface=eth0
# 拒绝所有包
firewall-cmd --panic-on
# 取消拒绝状态
firewall-cmd --panic-off
# 查看是否拒绝
firewall-cmd --query-panic
```

### 帮助

```sh
# 查看帮助
man firewall-cmd | grep query-port
# 列出支持的zone
firewall-cmd --get-zones
# 支持的服务
firewall-cmd --get-services
```

#### 参数解释

- –permanent #永久生效，没有此参数重启后失效
- –zone #作用域
- –add-service #添加的服务
- –add-port=80/tcp #添加端口，格式为：端口/通讯协议

#### 端口

```sh
# 查看所有打开的端口 [--permanent] [--zone=zone] --list-ports
firewall-cmd --list-ports
firewall-cmd --permanent --list-ports
# 开启端口-永久
firewall-cmd --permanent --zone=public --add-port=3306/tcp
firewall-cmd --permanent --zone=public --add-port=8080-8082/tcp 
# 删除端口
firewall-cmd --permanent --zone=public --remove-port=3306/tcp
firewall-cmd --permanent --zone=public --remove-port=8080-8082/tcp
# 重新载入配置
firewall-cmd --reload 
```

#### 服务

```sh
# 查看所有打开的服务 [--permanent] [--zone=zone] --list-services
firewall-cmd --list-services
# 开启服务
firewall-cmd --permanent --zone=public --add-service=http
# 删除服务
firewall-cmd --permanent --zone=public --remove-service=smtp

# 设置某个ip访问某个端口
firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="172.18.0.0/16" port port="3306" protocol="tcp" accept'
# 删除配置
firewall-cmd --permanent --remove-rich-rule 'rule family=ipv4 source address=172.18.0.0/16 port port=80 protocol=tcp accept'

# 设置某个ip访问某个服务
firewall-cmd --permanent --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.0.4/24" service name="http" accept' 
# 删除配置
firewall-cmd --permanent --zone=public --remove-rich-rule='rule family="ipv4" source address="192.168.0.4/24" service name="http" accept'
```

## iptables(Centos7以下版本)

1.开放8080端口

```sh
/sbin/iptables -I INPUT -p tcp --dport 8080 -j ACCEPT
```

2.保存

```sh
/etc/rc.d/init.d/iptables save
```

3.查看打开的端口

```sh
chkconfig --list

/etc/init.d/iptables status
```

4.关闭防火墙

```sh
# 永久性生效，重启后不会复原
# 开启 
chkconfig iptables on
# 关闭 
chkconfig iptables off

# 即时生效，重启后复原
# 开启
service iptables start
# 关闭
service iptables stop
```
