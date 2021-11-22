# redis的string类型&bitmap

## help

```sh
[root@fobgochod ~]# redis-cli 
127.0.0.1:6379> help
127.0.0.1:6379> help @generic
127.0.0.1:6379> help FLUSHALL

  FLUSHALL [ASYNC|SYNC]
  summary: Remove all keys from all databases
  since: 1.0.0
  group: server

127.0.0.1:6379> help FLUSHDB

  FLUSHDB [ASYNC|SYNC]
  summary: Remove all keys from the current database
  since: 1.0.0
  group: server

127.0.0.1:6379> keys *
```

## String

#### 帮助

```sh
127.0.0.1:6379> help @string
```

### set、get

> nx 不存在才能设置成功 xx 存在才能设置成功

```sh
127.0.0.1:6379> set k1 hello
OK
127.0.0.1:6379> get k1
"hello"
127.0.0.1:6379> set k1 hello nx
(nil)
127.0.0.1:6379> get k1
"hello"
127.0.0.1:6379> set k2 hello xx
(nil)
127.0.0.1:6379> 
```

### mset、mget

```sh
127.0.0.1:6379> mset k3 a k4 b
OK
127.0.0.1:6379> mget k3 k4
1) "a"
2) "b"
127.0.0.1:6379> 
```

### getset

```sh
127.0.0.1:6379> set k1 hello
OK
127.0.0.1:6379> get k1
"hello"
127.0.0.1:6379> getset k1 people
"hello"
127.0.0.1:6379> get k1
"people"
127.0.0.1:6379> 
```

### msetnx

> 原子操作

```sh
127.0.0.1:6379> MSETNX k1 a k2 b
(integer) 1
127.0.0.1:6379> mget k1 k2
1) "a"
2) "b"
127.0.0.1:6379> MSETNX k2 c k3 d
(integer) 0
127.0.0.1:6379> mget k1 k2 k3
1) "a"
2) "b"
3) (nil)
127.0.0.1:6379> 
```

### append、getrange、setrange、strlen

> 字符串操作

```sh
127.0.0.1:6379> get k1
"hello"
127.0.0.1:6379> APPEND k1 " world"
(integer) 11
127.0.0.1:6379> get k1
"hello world"
127.0.0.1:6379> GETRANGE k1 6 10
"world"
127.0.0.1:6379> GETRANGE k1 6 -1
"world"
127.0.0.1:6379> SETRANGE k1 6 people
(integer) 12
127.0.0.1:6379> get k1
"hello people"
127.0.0.1:6379> STRLEN k1
(integer) 12
127.0.0.1:6379> 
```

### type

> type描述value的类型

```sh
127.0.0.1:6379> get k1
"hello people"
127.0.0.1:6379> type k1
string
127.0.0.1:6379> set k1 99
OK
127.0.0.1:6379> type k1
string
127.0.0.1:6379> set k2 hello
OK
127.0.0.1:6379> type k2
string
127.0.0.1:6379> OBJECT encoding k2
"embstr"
127.0.0.1:6379> OBJECT encoding k1
"int"
127.0.0.1:6379> 
```

### incr、decr、incrby、decrby、incrbyfloat

> 数值操作

```sh
127.0.0.1:6379> INCR k1
(integer) 100
127.0.0.1:6379> INCRBY k1 22
(integer) 122
127.0.0.1:6379> DECR k1
(integer) 121
127.0.0.1:6379> DECRBY k1 22
(integer) 99
127.0.0.1:6379> INCRBYFLOAT k1 0.5
"99.5"
127.0.0.1:6379> 
```

```sh
127.0.0.1:6379> set k3 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
OK
127.0.0.1:6379> STRLEN k3
(integer) 36
127.0.0.1:6379> OBJECT encoding k3
"embstr"
127.0.0.1:6379> APPEND k3 a
(integer) 37
127.0.0.1:6379> OBJECT encoding k3
"raw"
127.0.0.1:6379> 
```

### 二进制安全

> 字节流

```sh
127.0.0.1:6379> set k1 hello
OK
127.0.0.1:6379> set k2 9
OK
127.0.0.1:6379> OBJECT encoding k2
"int"
127.0.0.1:6379> STRLEN k2
(integer) 1
127.0.0.1:6379> APPEND k2 999
(integer) 4
127.0.0.1:6379> get k2
"9999"
127.0.0.1:6379> OBJECT encoding k2
"raw"
127.0.0.1:6379> incr k2
(integer) 10000
127.0.0.1:6379> OBJECT encoding k2
"int"
127.0.0.1:6379> STRLEN k2
(integer) 5
127.0.0.1:6379> set k3 a
OK
127.0.0.1:6379> STRLEN k3
(integer) 1
127.0.0.1:6379> APPEND k3 中
(integer) 4
127.0.0.1:6379> STRLEN k3
(integer) 4
127.0.0.1:6379> 
```

> set k2 客户端编码UTF-8，set k3 客户端编码GBK
> redis-cli --raw 会尝试按照客户端编码解码

```sh
# 当前终端编码UTF-8
127.0.0.1:6379> set k2 中
OK
127.0.0.1:6379> STRLEN k2
(integer) 3
# 修改终端编码GBK
127.0.0.1:6379> set k3 中
OK
127.0.0.1:6379> STRLEN k3
(integer) 2
127.0.0.1:6379> get k2
"\xe4\xb8\xad"
127.0.0.1:6379> get k3
"\xd6\xd0"
127.0.0.1:6379> exit
[root@fobgochod ~]# redis-cli --raw
127.0.0.1:6379> get k2
涓
127.0.0.1:6379> get k3
中
127.0.0.1:6379> 
```

### 业务场景

#### incr

- 抢购、秒杀，详情页面、点赞、评论
- 规避并发下对数据库的事物操作，完全由redis内存操作代替
- 计算向数据移动

## bitmap

- 字符集
    - man ascii 查看ASCII码0-127对应字符
    - 标准：ASCII
    - 扩展：其它字符集不在对ASCII重编码

进制 | 1字节 | 2字节
:--- | :---: | :---:
二进制 | 01000001 | 01000000
十进制 | 65 | 64
十六进制 | 42 | 40
Char | A | @

### setbit

```sh
127.0.0.1:6379> help SETBIT

  SETBIT key offset value
  summary: Sets or clears the bit at offset in the string value stored at key
  since: 2.2.0
  group: string

127.0.0.1:6379> SETBIT k1 1 1
(integer) 0
127.0.0.1:6379> STRLEN k1
(integer) 1
127.0.0.1:6379> get k1
"@"
127.0.0.1:6379> SETBIT k1 7 1
(integer) 0
127.0.0.1:6379> get k1
"A"
127.0.0.1:6379> SETBIT k1 9 1
(integer) 0
127.0.0.1:6379> get k1
"A@"
127.0.0.1:6379> 
```

### bitpos

> 返回0、1第一个出现的二进制位

```sh
127.0.0.1:6379> help BITPOS

  BITPOS key bit [start] [end]
  summary: Find first bit set or clear in a string
  since: 2.8.7
  group: string

127.0.0.1:6379> bitpos k1 1 0 0
(integer) 1
127.0.0.1:6379> bitpos k1 1 1 1
(integer) 9
127.0.0.1:6379> 
```

### bitcount

> 返回1个数

```sh
127.0.0.1:6379> help BITCOUNT

  BITCOUNT key [start end]
  summary: Count set bits in a string
  since: 2.6.0
  group: string

127.0.0.1:6379> BITCOUNT k1 0 0
(integer) 2
127.0.0.1:6379> BITCOUNT k1 1 1
(integer) 1
127.0.0.1:6379> BITCOUNT k1 0 1
(integer) 3
127.0.0.1:6379> 
```

### bitop

OP | 二进制 | 字符
:--- | :---:| :---:
A | 01000001 | A
B | 01000010 | B
A&B | 01000000 | @
A&#124;B | 01000011 | C

```sh
127.0.0.1:6379> SETBIT k1 1 1
(integer) 0
127.0.0.1:6379> SETBIT k1 7 1
(integer) 0
127.0.0.1:6379> get k1
"A"
127.0.0.1:6379> SETBIT k2 1 1
(integer) 0
127.0.0.1:6379> SETBIT k2 6 1
(integer) 0
127.0.0.1:6379> get k2
"B"
127.0.0.1:6379> BITOP and andkey k1 k2
(integer) 1
127.0.0.1:6379> get andkey
"@"
127.0.0.1:6379> BITOP or orkey k1 k2
(integer) 1
127.0.0.1:6379> get orkey
"C"
127.0.0.1:6379> 
```

### 业务场景

#### 需求1：用户系统，统计用户登陆天数，且窗口随机

用户ID | 2021-01-01 | 2021-01-02 | 2021-01-07 | 2021-12-31
:--- | :---:| :---:| :---:| :---:
user1 | 0 | 1 | 1 | 1
user2 | 1 | 1 | 0 | 0

```sh
# 第二天登陆
127.0.0.1:6379> SETBIT user1 1 1
(integer) 0
# 第7天登陆
127.0.0.1:6379> SETBIT user1 6 1
(integer) 0
# 第365天登陆
127.0.0.1:6379> SETBIT user1 364 1
(integer) 0
# 一个人消耗46字节
127.0.0.1:6379> STRLEN user1
(integer) 46
# 一年总共登陆3天(统计46字节)
127.0.0.1:6379> BITCOUNT user1 0 45
(integer) 3
127.0.0.1:6379>   
```

#### 京东假设2亿用户，618做活动送礼物，备货多少分

- 僵尸用户、冷热用户、忠诚用户
- 活跃用户统计，随机窗口

用户ID | user0 | user1 | user2 | user3 | ... | user7
:--- | :---: | :---: | :---: |:---: | :---: | :---:
2021-01-01 | 0 | 1 | 0 | 0 | 0 | 0
2021-01-02 | 0 | 1 | 0 | 1 | 0 | 0

```sh
# user1对应二进制第2位，user3对应二进制第4位
# user1于2021-01-01登陆
127.0.0.1:6379> SETBIT 20210101 1 1
(integer) 0
# user1于2021-01-02登陆
127.0.0.1:6379> SETBIT 20210102 1 1
(integer) 0
# user3于2021-01-02登陆
127.0.0.1:6379> SETBIT 20210102 4 1
(integer) 0
# 按位或运算
127.0.0.1:6379> BITOP or destkey 20210101 20210102
(integer) 1
# 统计用户人数（0第一个字节，-1最后一个字节）
127.0.0.1:6379> BITCOUNT destkey 0 -1
(integer) 2
127.0.0.1:6379> 
```
