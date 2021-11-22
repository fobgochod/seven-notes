# Commands

## 文档

- [http://doc.redisfans.com](http://doc.redisfans.com)
- [https://redis.io/commands](https://redis.io/commands)
- [https://redis.io/documentation](https://redis.io/documentation)


#### 切换数据库
```sh
172.16.2.141:0>select 1
"OK"
172.16.2.141:1>
```

#### 返回当前数据库的 key 的数量
```sh
172.16.2.141:1>dbsize
"4"
172.16.2.141:1>
```

#### 将当前数据库的 key 移动到给定的数据库 db 当中
```sh
172.16.2.141:0>select 1
"OK"
172.16.2.141:1>setex key1 100 value1
"OK"
172.16.2.141:1>move key1 2
"1"
172.16.2.141:1>select 2
"OK"
172.16.2.141:2>get key1
"value1"
172.16.2.141:2>
```

#### 删除给定的一个或多个 key
```sh
172.16.2.141:1>mset key1 value1 key2 value2 key3 value3
"OK"
172.16.2.141:1>del key1 key2 key3
"3"
172.16.2.141:1>
```

#### 检查给定 key 是否存在
```sh
172.16.2.141:1>set key1 value1
"OK"
172.16.2.141:1>exists key1
"1"
172.16.2.141:1>del key1
"1"
172.16.2.141:1>exists key1
"0"
172.16.2.141:1>
```

#### 为给定 key 设置生存时间，当 key 过期时(生存时间为 0 )，它会被自动删除
```sh
172.16.2.141:1>set key1 value1
"OK"
172.16.2.141:1>ttl key1
"-1"
172.16.2.141:1>expire key1 100
"1"
172.16.2.141:1>ttl key1
"96"
172.16.2.141:1>
```

#### 移除给定 key 的生存时间
```sh
172.16.2.141:1>set key1 value1
"OK"
172.16.2.141:1>expire key1 100
"1"
172.16.2.141:1>ttl key1
"95"
172.16.2.141:1>persist key1
"1"
172.16.2.141:1>ttl key1
"-1"
172.16.2.141:1>
```

#### 查找所有符合给定模式 pattern 的 key
```sh
172.16.2.141:1>mset one 1 two 2 three 3 four 4
"OK"
172.16.2.141:1>keys *o*
 1)  "two"
 2)  "four"
 3)  "one"
172.16.2.141:1>
```

### GET
```sh
# 获取key对应value
get key1
# 将给定 key 的值设为 value ，并返回 key 的旧值(old value)。
getset key value
```

### SET
```sh
set key1 value1
set key2 value2 EX 100
set key3 value3 PX 100000

# key存在则不能修改
set key4 value4 NX
set key4 new-value4 NX

# key存在才可以修改
set key5 value5 XX
set key5 value5
set key5 new-value5 XX

# 将值 value 关联到 key ，并将 key 的生存时间设为 seconds (以秒为单位)
setex key6 60 value6

# 将 key 中储存的数字值加减一。如果 key 不存在，那么 key 的值会先被初始化为 0 
incr key7
incrby key7 99

# 将 key 中储存的数字值减一
decr key7
decrby key7 99

# 将 key 的值设为 value ，当且仅当 key 不存在。
setnx key8 value8
```