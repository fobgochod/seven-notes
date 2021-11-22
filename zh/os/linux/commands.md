# Commands

> Linux命令大全：[http://man.linuxde.net](http://man.linuxde.net)

## 常用命令 

### ps

```sh
# ps: process status
# System V 风格
ps -ef | grep java
# BSD风格
ps -aux | grep java

# 删除执行中的程序或工作
kill -9 pid
```

```sh
# 查看某一端口的占用情况
lsof -i:8080
netstat -tunlp | grep 8080
```

### 压测

```sh
# 修改TIME_WAIT超时时间(建议小于30秒)
vi /etc/sysctl.conf
net.ipv4.tcp_fin_timeout = 30
# 执行如下命令，使配置生效(-p 从指定的文件加载系统参数，如不指定即从/etc/sysctl.conf中加载)
sysctl -p
# 查看当前系统中生效的所有参数
sysctl -a

# Linux
cat /proc/sys/net/ipv4/ip_local_port_range
vi /etc/sysctl.conf
net.ipv4.ip_local_port_range = 1024 65535
# 执行如下命令，使配置生效(-p 从指定的文件加载系统参数，如不指定即从/etc/sysctl.conf中加载)
sysctl -p

# 查看TCP连接状态的数量
netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'
```

### top

```sh
# 显示当前系统未使用的和已使用的内存数目
free -m
# top，uptime，w等命令都可以查看系统负载
top
uptime
w

[root@fobgochod ~]# top
# 敲击 F 进入编辑视图
```

> Fields Management for window 1:Def, whose current sort field is PID
> - Navigate with Up/Dn
> - Right selects for move then 'Enter' or Left commits
> - 'd' or 'Space' toggles display
> - 's' sets sort
> - Use 'q' or 'Esc' to end

- `f` -> 进入编辑界面
    - `↑` `↓`：切换字段
    - `→` 选择字段 -> `↑` `↓` 移动字段 -> `←` or `Enter` 确认
    - `d` or `Space`：显示隐藏字段
    - `s`：指定排序字段
    - `q` or `Esc`：退出，完成设置

### 磁盘

```sh
# 查看磁盘使用情况
df -h
# 以指定的区块大小来显示区块数目
df -B 1G
# 查看全部文件系统
df -a

# 显示当前目录的大小
du -sh
# 显示某个目录或文件的大小
du -sh dirName
# 显示当前目录下所有文件的大小
du -sh ./*
# 显示mysql所有数据库文件大小
du -sh /var/lib/mysql/*
```

### mount

```sh
mount
# 将 /dev/hda1 挂在 /mnt 之下
#mount /dev/hda1 /mnt


umount
# 通过设备名卸载
umount -v /dev/sda1          
/dev/sda1 umounted  
# 通过挂载点卸载
umount -v /mnt/mymount/
/tmp/diskboot.img umounted 
```

### Yum

> 全称为 Yellow dog Updater, Modified 是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器

YUM的配置方式是基于分段配置的

```sh
# 主配置文件：
/etc/yum.conf
# Yum的片段配置：
/etc/yum.repos.d/*.repo
```

#### 说明

- 若无@或不是install，则表示尚未安装
- base，表示未安装，包位于base仓库中
- updates，表示未安装，包位于updates仓库中
- -y，当安装过程提示选择全部为"yes"

```sh
# yum安装：
yum install packageName
# yum卸载：
yum -y remove packageName

# 查看yum仓库中指定包名的软件包，可以使用通配符
yum list all mariadb*

# 只显示已安装的包
yum list installed
# 只显示没有安装，但可安装的包
yum list available
# 查看所有可更新的包
yum list updates

# 显示不属于任何仓库的，额外的包
yum list extras
# 显示被废弃的包
yum list obsoletes
# 新添加进yum仓库的包
yum list recent
```

### lrzsz

#### 文件传输

- sz中的s意为send（发送），告诉客户端，我（服务器）要发送文件 send to cilent，就等同于客户端在下载。
- rz中的r意为received（接收），告诉客户端，我（服务器）要接收文件 received by cilent，就等同于客户端在上传。

#### 安装

```sh
# 查看
yum list all lrzsz
# 安装
yum install -y lrzsz.x86_64
```

#### 上传下载

```sh
# 不覆盖原文件
rz
# 覆盖原文件
rz -y

# 下载一个文件
sz filename
# 下载多个文件
sz filename1 filename2 …
```

### hostname

```sh
# 修改主机名
hostname

vi /etc/sysconfig/network
NETWORKING=yes
HOSTNAME=fobgochod
# 重启
reboot
# 查看
hostnamectl
cat /etc/hostname
cat /etc/hosts
```

### IP

```shell
# 查看
ifconfig
ip addr show

# 修改
vi /etc/sysconfig/network-scripts/ifcfg-eth0

DEVICE=eth0
ONBOOT=yes # 开机启动
IPADDR=172.16.2.141 # IP
PREFIX=24
GATEWAY=172.16.2.1 # 网关
DNS1=172.16.1.250 # DNS
IPV6_PRIVACY=no
ZONE=public
```

### 其它

```shell
# 操作系统
cat /etc/redhat-release 
# 内核
uname -s
# 内核版本
uname -r
# 硬件架构
uname -i
# 主机名称
uname -n 
hostname
# CPU信息
cat /proc/cpuinfo 
# 内存信息
cat /proc/meminfo
```

```shell
# 访问
curl https://fobgochod.com
# 下载
wget https://downloads.mariadb.org/interstitial/mariadb-10.3.9/source/mariadb-10.3.9.tar.gz
wget https://downloads.mariadb.org/interstitial/mariadb-10.3.9/source/mariadb-10.3.9.tar.gz -O mariadb.tar.gz
```

```sh
# CPU型号
cat /proc/cpuinfo | grep 'model name' |uniq
# CPU个数
cat /proc/cpuinfo | grep "physical id" | uniq | wc -l
# CPU核数
cat /proc/cpuinfo | grep "cpu cores" | uniq
# 内存
cat /proc/meminfo | grep MemTotal
# CPU大小
cat /proc/cpuinfo | grep 'model name' && cat /proc/cpuinfo |grep 'physical id'

# 查看cpu 核数命令
grep 'model name' /proc/cpuinfo | wc -l
```

```sh
systemctl enable redis
systemctl list-unit-files | grep enable

chkconfig --list
chkconfig redis off
```
