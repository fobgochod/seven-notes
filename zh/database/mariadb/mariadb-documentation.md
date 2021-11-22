# Documentation

## MariaDB Server Documentation

官网帮助文档地址：

- [https://mariadb.com/kb/en/documentation](https://mariadb.com/kb/en/documentation)
- [https://mariadb.com/kb/zh-cn/mariadb-documentation](https://mariadb.com/kb/zh-cn/mariadb-documentation)

参数介绍：[https://mariadb.com/kb/en/server-system-variables/#sql_mode](https://mariadb.com/kb/en/server-system-variables/#sql_mode)

数据类型：[https://mariadb.com/kb/en/library/data-types](https://mariadb.com/kb/en/library/data-types)

数据类型字节：[https://mariadb.com/kb/en/library/data-type-storage-requirements](https://mariadb.com/kb/en/library/data-type-storage-requirements)

UPDATE语法：[https://mariadb.com/kb/zh-cn/update](https://mariadb.com/kb/zh-cn/update)

SQL Statements：[https://mariadb.com/kb/en/library/sql-statements](https://mariadb.com/kb/en/library/sql-statements)

快速插入：[https://mariadb.com/kb/zh-cn/how-to-quickly-insert-data-into-mariadb](https://mariadb.com/kb/zh-cn/how-to-quickly-insert-data-into-mariadb)

备份和恢复：[https://mariadb.com/kb/en/library/backing-up-and-restoring-databases](https://mariadb.com/kb/en/library/backing-up-and-restoring-databases)

错误码：[https://mariadb.com/kb/en/library/mariadb-error-codes](https://mariadb.com/kb/en/library/mariadb-error-codes)

SQLSTATE：[https://mariadb.com/kb/en/sqlstate](https://mariadb.com/kb/en/sqlstate)

Error Codes：[https://mariadb.com/kb/en/mariadb-error-codes](https://mariadb.com/kb/en/mariadb-error-codes)

## Varchar

```sh
# mysql语句最大长度
show variables like 'max_allowed_packet'

# 开启mysql数据检查
show variables like 'innodb_strict_mode'
```

参考：[https://mariadb.com/kb/en/library/innodb-strict-mode](https://mariadb.com/kb/en/library/innodb-strict-mode)

1. Mysql每行记录的最大值为64k（BLOB and TEXT数据类型不纳入统计），即65535个字节（表所有字段加起来的大小）
2. 而varchar要用1-2字节来存储字段长度，小于255的1字节，大于255的2字节。
3. Mysql 5.0后,英文字符固定都是一个字节，汉字字符根据编码方式占不同字节，UTF-8占3个字节，GBK占了2个字节。

```sh
# 统计字节个数
select length();
# 统计字符个数
select char_length();
# 例子
select length('aa'),length('悟空'),char_length('aa'),char_length('悟空');
```

![01](/images/mariadb/mariadb-1.png)

- UTF-8编码：最大长度是`21844`。根据上面信息可以推算出(65535-2)/3=21844余1。
- GBK编码: 最大长度是`32766`。根据上面信息可以推算出(65535-2)/2=32766余1。

## timeout

[connection_timeout](https://mariadb.com/kb/en/mariadb-maxscale-22-mariadb-maxscale-configuration-usage-scenarios/#connection_timeout)

```sh
connection_timeout
The connection_timeout parameter is used to disconnect sessions to MariaDB MaxScale that have been idle for too long. 
The session timeouts are disabled by default. To enable them, define the timeout in seconds in the service's configuration 
section. A value of zero is interpreted as no timeout, the same as if the parameter is not defined.

Warning: If a connection is idle for longer than the configured connection timeout, it will be forcefully disconnected and a
warning will be logged in the MaxScale log file. If you are performing long-running maintenance operations (e.g. ALTER 
TABLE) either do them with a direct connection to the server or set connection_timeout to zero before executing them.

Example:

[Test Service]
connection_timeout=300
```

[wait_timeout](https://mariadb.com/kb/en/server-system-variables/#wait_timeout)

```sh
wait_timeout
· Description: Time in seconds that the server waits for a connection to become active before closing it. The 
  session value is initialized when a thread starts up from either the global value, if the connection is non-interactive, 
  or from the interactive_timeout value, if the connection is interactive.
· Commandline: --wait-timeout=#
· Scope: Global, Session
· Dynamic: Yes
· Type: numeric
· Default Value: 28800
· Range: (Windows): 1 to 2147483
· Range: (Other): 1 to 31536000
```

[interactive_timeout](https://mariadb.com/kb/en/server-system-variables/#interactive_timeout)

```sh
interactive_timeout
· Description: Time in seconds that the server waits for an interactive connection (one that connects with the 
  mysql_real_connect() CLIENT_INTERACTIVE option) to become active before closing it. See also wait_timeout.
· Commandline: --interactive-timeout=#
· Scope: Global, Session
· Dynamic: Yes
· Data Type: numeric
· Default Value: 28800
· Range: (Windows): 1 to 2147483
· Range: (Other): 1 to 31536000
```

### MySQL：参数wait_timeout和interactive_timeout以及空闲超时的实现

[http://blog.itpub.net/7728585/viewspace-2637237](http://blog.itpub.net/7728585/viewspace-2637237)
