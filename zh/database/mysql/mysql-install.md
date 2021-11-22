# Install

## 文档

[https://downloads.mariadb.org/mariadb/repositories](https://downloads.mariadb.org/mariadb/repositories)

## Linux

### 源码安装

### YUM安装

## Windows

#### 1.下载免安装版本

[http://dev.mysql.com/downloads/mysql](http://dev.mysql.com/downloads/mysql)

#### 2.解压到目录

```sh
D:\install\mysql5.6
```

#### 3.配置my.ini

- 将解压目录下默认文件 my-default.ini
- 拷贝一份，改名 my.ini
- 复制下面的配置信息到 my.ini 保存

```sh
[client]
port=3306
default-character-set=utf8

[mysqld]
port=3306
character_set_server=utf8

#解压根目录
basedir=D:\install\mysql5.6
#解压根目录\data
datadir=D:\install\mysql5.6\data

sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

[WinMySQLAdmin]

D:\install\mysql5.6\bin\mysqld.exe 
```

#### 4.添加环境变量

```sh
MYSQL_HOME=D:\install\mysql5.6
Path=%MYSQL_HOME%\bin;
```

#### 5.将mysql注册为windows系统服务

1. 从控制台进入到MySQL解压目录下的 bin 目录下
2. 输入服务安装命令： mysqld install MySQL --defaults-file="D:\install\mysql5.6\my.ini"

> 解压目录下修改的my.ini文件 安装成功后会提示服务安装成功。
> 注：my.ini文件放在MySQL解压后的根目录下
> 移除服务命令为：mysqld remove

#### 6.启动、关闭mysql

> net start MySQL
> net stop MySQL

#### 7.登陆、退出mysql

Syntax：mysql -h [主机地址] -P[端口] -u [用户名] －p[用户密码]

```sh
# 登陆
> mysql -h 127.0.0.1 -u root -p
> Enter password: root 

# 或者 //特别说明：-p和密码root之间没有空格
> mysql -u root -proot 

# 退出
> exit
```

#### 8.备份、恢复

```sh
# 备份数据库
# mysqldump -u [用户名] -p[密码] > 路径
> mysqldump -u root -proot mydb2 > d:/mydb2.sql

# 恢复数据库
# 1.创建数据库mydb2
# 2.use mydb2
# 3.在mysql控制台下执行：source [备份文件路径]
> source d:/mydb2.sql
```
