# FAQ

[1932]Table doesn't exist in engine 的解决方法
参考：[http://chenxuhou.com/detail/121.html](http://chenxuhou.com/detail/121.html)

```sh
# 这三个文件存放在数据库data目录下,将这三个文件补全就OK了
ib_logfile0
ib_logfile1
ibdata1
```

参考：[https://www.cnblogs.com/heyongboke/p/10437510.html](https://www.cnblogs.com/heyongboke/p/10437510.html)

```sh
SQL Error (1558): Column count of mysql.proc is wrong. Expected 21, found 20. 
Created with MariaDB 50564, now running 100412. Please use mysql_upgrade to fix this error
mysql_upgrade -u root -p
```

![](/images/mariadb/mariadb-2.png)
