# Install

## 文档

[https://downloads.mariadb.org/mariadb/repositories](https://downloads.mariadb.org/mariadb/repositories)

## Linux

### 源码安装

### YUM安装

```sh
# 查看系统发型版本
yum -y install redhat-lsb
lsb_release -a
```

```sh
vi /etc/yum.repos.d/MariaDB.repo
```

#### CentOS 7

![MariaDB](/images/mariadb/mariadb-3.png)

```sh
# MariaDB 10.5 CentOS repository list - created 2021-04-08 17:12 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.5/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

```sh
# 中国科学技术大学
[mariadb]
name = MariaDB
baseurl = http://mirrors.ustc.edu.cn/mariadb/yum/10.2/centos7-amd64
gpgkey=http://mirrors.ustc.edu.cn/mariadb/yum/RPM-GPG-KEY-MariaDB
gpgcheck=1

# 清华大学开源软件镜像站
[mariadb]
name = MariaDB
baseurl = https://mirrors.tuna.tsinghua.edu.cn/mariadb/yum/10.4/centos7-amd64
gpgkey=https://mirrors.tuna.tsinghua.edu.cn/mariadb/yum/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

```sh
yum install MariaDB-server MariaDB-client
```

#### CentOS 8

![MariaDB CentOS 8](/images/mariadb/mariadb-4.png)

```sh
# MariaDB 10.5 CentOS repository list - created 2021-06-26 14:53 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.5/centos8-amd64
module_hotfixes=1
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

```sh
dnf install MariaDB-server
```

> 启动

```sh
systemctl enable mariadb
systemctl start mariadb
```

#### 配置

```sh
mysql_secure_installation

# 首先是设置密码，会提示先输入密码
Enter current password for root (enter for none):<–初次运行直接回车

# 设置密码
Set root password? [Y/n] <– 是否设置root用户密码，输入y并回车或直接回车
New password: <– 设置root用户的密码
Re-enter new password: <– 再输入一次你设置的密码


# 其他配置
Remove anonymous users? [Y/n] <– 是否删除匿名用户，回车
Disallow root login remotely? [Y/n] <–是否禁止root远程登录,回车,
Remove test database and access to it? [Y/n] <– 是否删除test数据库，回车
Reload privilege tables now? [Y/n] <– 是否重新加载权限表，回车
```

#### 配置字符集

```sql
show variables like '%character%';
show variables like '%collation%';
```

```shell
#文件/etc/my.cnf
vi /etc/my.cnf
#在[mysqld]标签下添加
init_connect='SET collation_connection=utf8_general_ci'
init_connect='SET NAMES utf8' 
character_set_server=utf8
collation_server=utf8_general_ci
skip-character-set-client-handshake
lower_case_table_names=1

#文件/etc/my.cnf.d/client.cnf
vi /etc/my.cnf.d/client.cnf
#在[client]中添加
default-character-set=utf8

#文件/etc/my.cnf.d/mysql-clients.cnf
vi /etc/my.cnf.d/mysql-clients.cnf
#在[mysql]中添加
default-character-set=utf8
```

#### 授予外网登陆权限

```shell
# 登陆mysql
mysql -uroot -proot
# 授权
MariaDB [mysql]> grant all privileges on *.* to root@'%' identified by 'root'; 
MariaDB [mysql]> flush privileges;
```

> 防火墙

```sh
firewall-cmd --permanent --zone=public --add-port=3306/tcp
firewall-cmd --permanent --zone=public --remove-port=3306/tcp
firewall-cmd --reload
firewall-cmd --list-ports
```
