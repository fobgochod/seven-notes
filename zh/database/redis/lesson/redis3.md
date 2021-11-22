# redis的list、set、hash、sorted_set、skiplist

## List（列表）

```sh
127.0.0.1:6379> help @list
```

### lpush、lpop、rpush、rpop、lrange

> 正反索引 正(0,1,2...) 反(...-3,-2,-1)

```sh
127.0.0.1:6379> lpush k1 a b c d e f
(integer) 6
127.0.0.1:6379> lpop k1
"f"
127.0.0.1:6379> LRANGE k1 0 -1
1) "e"
2) "d"
3) "c"
4) "b"
5) "a"
127.0.0.1:6379> rpush k2 a b c d e f
(integer) 6
127.0.0.1:6379> rpop k2
"f"
127.0.0.1:6379> LRANGE k2 0 -1
1) "a"
2) "b"
3) "c"
4) "d"
5) "e"
127.0.0.1:6379> 
```

### lindex、lset

```sh
127.0.0.1:6379> LRANGE k1 0 -1
1) "e"
2) "d"
3) "c"
4) "b"
5) "a"
127.0.0.1:6379> LINDEX k1 2
"c"
127.0.0.1:6379> LINDEX k1 -2
"b"
127.0.0.1:6379> LSET k1 2 ccc
OK
127.0.0.1:6379> LRANGE k1 0 -1
1) "e"
2) "d"
3) "ccc"
4) "b"
5) "a"
127.0.0.1:6379> 
```

### lrem、linsert、llen

```sh
127.0.0.1:6379> lpush k3 1 a 2 b 3 a 4 c 5 a 6 b
(integer) 12
127.0.0.1:6379> LRANGE k3 0 -1
 1) "b"
 2) "6"
 3) "a"
 4) "5"
 5) "c"
 6) "4"
 7) "a"
 8) "3"
 9) "b"
10) "2"
11) "a"
12) "1"
127.0.0.1:6379> lrem k3 2 a
(integer) 2
127.0.0.1:6379> LRANGE k3 0 -1
 1) "b"
 2) "6"
 3) "5"
 4) "c"
 5) "4"
 6) "3"
 7) "b"
 8) "2"
 9) "a"
10) "1"
127.0.0.1:6379> LINSERT k3 after 6 a
(integer) 11
127.0.0.1:6379> LINSERT k3 before 3 a
(integer) 12
127.0.0.1:6379> LRANGE k3 0 -1
 1) "b"
 2) "6"
 3) "a"
 4) "5"
 5) "c"
 6) "4"
 7) "a"
 8) "3"
 9) "b"
10) "2"
11) "a"
12) "1"
127.0.0.1:6379> LREM k3 -2 a
(integer) 2
127.0.0.1:6379> LRANGE k3 0 -1
 1) "b"
 2) "6"
 3) "a"
 4) "5"
 5) "c"
 6) "4"
 7) "3"
 8) "b"
 9) "2"
10) "1"
127.0.0.1:6379> LLEN k3
(integer) 10
127.0.0.1:6379> 
```

### blpop、ltrim

- blpop 阻塞
- ltrim 两端删除

```sh
127.0.0.1:6379> blpop k4 0

127.0.0.1:6379> LPUSH k4 1 a b c 1
(integer) 5
127.0.0.1:6379> LRANGE k4 0 -1
1) "1"
2) "c"
3) "b"
4) "a"
5) "1"
127.0.0.1:6379> LTRIM k4 0 -1
OK
127.0.0.1:6379> LRANGE k4 0 -1
1) "1"
2) "c"
3) "b"
4) "a"
5) "1"
127.0.0.1:6379> LRANGE k4 1 -2
1) "c"
2) "b"
3) "a"
127.0.0.1:6379> 
```

- 栈：同向命令(lpush、lpop)(rpush、rpop)
- 队列：反向命令(lpush、rpop)(rpush、lpop)
- 数组：(lindex、lset)
- 阻塞，单播队列 FIFO(blpop)

## Hash（哈希表）

### kget、hset、hmget、hmset、hkeys、hvals、hgetall

```sh
127.0.0.1:6379> hset user name lisi
(integer) 1
127.0.0.1:6379> hmset user age 28 address nanjing
OK
127.0.0.1:6379> hget user name
"lisi"
127.0.0.1:6379> hmget user age address
1) "28"
2) "nanjing"
127.0.0.1:6379> hkeys user
1) "name"
2) "age"
3) "address"
127.0.0.1:6379> hvals user
1) "lisi"
2) "28"
3) "nanjing"
127.0.0.1:6379> hgetall user
1) "name"
2) "lisi"
3) "age"
4) "28"
5) "address"
6) "nanjing"
127.0.0.1:6379> 
```

### hincrbyfloat

```sh
127.0.0.1:6379> HINCRBYFLOAT user age 0.5
"28.5"
127.0.0.1:6379> hget user age
"28.5"
127.0.0.1:6379> HINCRBYFLOAT user age -1
"27.5"
127.0.0.1:6379> 
```

### 业务场景

- 对field进行数值计算
- 场景：点赞、收藏、详情页

## Set（集合）

### sadd、srem、smembers

```sh
127.0.0.1:6379> SADD k1 tom lisi wangwu tom
(integer) 3
127.0.0.1:6379> SMEMBERS k1
1) "tom"
2) "wangwu"
3) "lisi"
127.0.0.1:6379> SREM k1 wangwu
(integer) 1
127.0.0.1:6379> SMEMBERS k1
1) "tom"
2) "lisi"
127.0.0.1:6379> 
```

### sinter(∩交集)、sunion(∪并集)、sdiff(差集)

```sh
127.0.0.1:6379> sadd k2 1 2 3 4 5
(integer) 5
127.0.0.1:6379> sadd k3 4 5 6 7 8
(integer) 5
127.0.0.1:6379> SINTER k2 k3
1) "4"
2) "5"
127.0.0.1:6379> SINTERSTORE destKey k2 k3
(integer) 2
127.0.0.1:6379> SMEMBERS destKey
1) "4"
2) "5"
127.0.0.1:6379> SUNION k2 k3
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
6) "6"
7) "7"
8) "8"
127.0.0.1:6379> SDIFF k2 k3
1) "1"
2) "2"
3) "3"
127.0.0.1:6379> SDIFF k3 k2
1) "6"
2) "7"
3) "8"
127.0.0.1:6379> 
```

### srandmember

- 正数：取出一个去重的结果集，不能超过已有集合
- 负数：取出一个带重复的结果集，一定满足你要的数量
- 零：不返回

```sh
127.0.0.1:6379> help SRANDMEMBER

  SRANDMEMBER key [count]
  summary: Get one or multiple random members from a set
  since: 1.0.0
  group: set

127.0.0.1:6379> SADD k4 a b c d e f
(integer) 6
127.0.0.1:6379> SMEMBERS k4
1) "d"
2) "c"
3) "b"
4) "a"
5) "e"
6) "f"
127.0.0.1:6379> SRANDMEMBER k4 3
1) "e"
2) "f"
3) "c"
127.0.0.1:6379> SRANDMEMBER k4 10
1) "d"
2) "c"
3) "b"
4) "a"
5) "e"
6) "f"
127.0.0.1:6379> SRANDMEMBER k4 -3
1) "f"
2) "f"
3) "f"
127.0.0.1:6379> SRANDMEMBER k4 -3
1) "b"
2) "a"
3) "b"
127.0.0.1:6379> SRANDMEMBER k4 -10
 1) "f"
 2) "e"
 3) "b"
 4) "a"
 5) "c"
 6) "a"
 7) "a"
 8) "f"
 9) "b"
10) "c"
127.0.0.1:6379> SRANDMEMBER k4 0
(empty array)
127.0.0.1:6379> 
```

### spop

```sh
127.0.0.1:6379> SMEMBERS k4
1) "a"
2) "e"
3) "f"
4) "b"
5) "c"
6) "d"
127.0.0.1:6379> SPOP k4 3
1) "b"
2) "d"
3) "f"
127.0.0.1:6379> SMEMBERS k4
1) "a"
2) "e"
3) "c"
127.0.0.1:6379> 
```

### 业务场景

- 无序 随机性
- 去重 元素顺序不同
- SRANDMEMBER
    - 抽奖 微博抽奖(N多个人)，3个奖品 (+3 3个不同的人 -3 可能有人抽到多次)
    - 抽奖人数小于奖品 可能出现一个人多个奖品 (-N)
- SPOP
    - 随机抽奖，取出一个 年会

## SortedSet（有序集合）

### zadd、zrange、zrangebyscore、zrevrange

```sh
127.0.0.1:6379> ZADD k1 8 apple 2 banana 3 orange
(integer) 3
127.0.0.1:6379> ZRANGE k1 0 -1
1) "banana"
2) "orange"
3) "apple"
127.0.0.1:6379> ZRANGE k1 0 -1 WITHSCORES
1) "banana"
2) "2"
3) "orange"
4) "3"
5) "apple"
6) "8"
127.0.0.1:6379> ZRANGEBYSCORE k1 3 8
1) "orange"
2) "apple"
127.0.0.1:6379> ZRANGE k1 0 1
1) "banana"
2) "orange"
127.0.0.1:6379> ZREVRANGE k1 0 1
1) "apple"
2) "orange"
127.0.0.1:6379> 
```

### zscore、zrank、zincrby

```sh
127.0.0.1:6379> ZSCORE k1 apple
"8"
127.0.0.1:6379> ZRANK k1 apple
(integer) 2
127.0.0.1:6379> ZINCRBY k1 2.5 banana
"4.5"
127.0.0.1:6379> ZRANGE k1 0 -1 withscores
1) "orange"
2) "3"
3) "banana"
4) "4.5"
5) "apple"
6) "8"
127.0.0.1:6379> 
```

### zunion

```sh
127.0.0.1:6379> zadd k2 80 tom 60 sean 70 baby 
(integer) 3
127.0.0.1:6379> zadd k3 60 tom 100 sean 40 yiming
(integer) 3
127.0.0.1:6379> 
127.0.0.1:6379> 
127.0.0.1:6379> ZUNION 2 k2 k3 withscores
1) "yiming"
2) "40"
3) "baby"
4) "70"
5) "tom"
6) "140"
7) "sean"
8) "160"
127.0.0.1:6379> ZUNION 2 k2 k3 weights 1 0.5 withscores
1) "yiming"
2) "20"
3) "baby"
4) "70"
5) "sean"
6) "110"
7) "tom"
8) "110"
127.0.0.1:6379> ZUNION 2 k2 k3 aggregate min withscores
1) "yiming"
2) "40"
3) "sean"
4) "60"
5) "tom"
6) "60"
7) "baby"
8) "70"
127.0.0.1:6379> 
```

### 业务场景

- 苹果 香蕉 鸭梨
- 排序规则：名称、含糖量、大小、价格、吃货热度
- 歌曲排行榜(更新score)
- 排序怎么实现？增删改速度？
    - skip list 跳跃表 平均值相对最优
