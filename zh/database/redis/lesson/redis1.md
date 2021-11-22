# redis 介绍及NIO原理介绍

## 常识

### 磁盘

- 寻址：ms
- 带宽：G/M

### 内存

- 寻址：ns (秒>毫秒>微秒>纳秒)
- 带宽：很大

> 磁盘比内存在**寻址**上慢了10万倍

- I/O buffer：成本问题
- 磁盘与磁道，扇区，一扇区512Byte带来一个成本变大：索引
- 4K 操作系统 无论你读多少，都是最少4K从磁盘拿

> 随着文件变大，速度变慢，磁盘I/O成为瓶颈

## 数据库

表很大，性能下降？ 增删改变慢 查询速度？

- 1个或者少量查询依然很快
- 并发大的时候受硬盘带宽影响速度

> SAP HAHA 内存级别的关系型数据库

## 缓存

> 缓存 memcached、redis

- 两个基础设施
    - 冯诺依曼体系的硬件
    - 以太网，TCP/IP网络
- memcached
    - key=value
    - value没有类型的概念
- redis
    - key=value
    - value=[Strings,Hashes,Lists,Sets,Sorted Sets]
    - Redis offers Strings, Hashes, Lists, Sets, Sorted Sets, Bitmaps, Bitfields, HyperLogLog, Geospatial indexes, and
      Streams as native data structures.
- json可以表示很复杂的数据结构，世界上有三种数据表示
    - key=1,key=a
    - key=[1,2,3],key=[a,b,c]
    - key={x=y},key=[{a=1},{a=2}]
- 类型的意义（缓存k,v取回v中的某一个元素）
    - memcached返回value的所有数据到client
        - server网卡IO
        - client要有代码去解码
    - redis类型不是很重要
        - server中对每种类型都有自己的方法
        - index(),lpop
    - 计算向数据移动(大数据)

## 数据库引擎

[https://db-engines.com/en](https://db-engines.com/en)

- Redis 秒级10万
- 关系型数据库 千级别

## IO变迁

- BIO
    - 开启线程，一个线程对应一个连接，接收更多请求
    - 内存成本 一个线程成本 1MB 可以调整
    - 调度成本 CPU浪费
- NIO
    - 用户空间轮询socket，询问内核空间
    - 一个线程 N个连接的系统调用
- select、poll
    - 每次传递大量文件描述符，内核轮询，返回有效文件描述符
    - 用户态内核态传递数据成本高 N个连接就是N个文件描述符
- epoll
    - epoll_create(),epoll_ctl(),epoll_wait()
    - 共享空间 
- kafka
    - mmap 共享空间
    - sendfile 减少用户内核拷贝 零拷贝
- nginx
    - 多少颗CPU启动多少个进程 worker
    - kernel的epoll的同步非阻塞多路复用

```sh
# 允许的最大连接数
CONFIG GET maxclients
# 当前的redis连接数
info clients
# 获取客户端列表
CLIENT LIST
# 查看当前连接的名称
CLIENT GETNAME
# 查看超时配置
config get timeout
# 杀死指定连接
CLIENT KILL ip:port
```
