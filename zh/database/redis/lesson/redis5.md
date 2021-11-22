# redis的持久化RDB、fork、copyonwrite、AOF、RDB&AOF混合使用

## 单机持久化 

### RDB

- RDB
- 父子进程
- fork copyonwrite

- 问题：
    - 不支持拉链 只有一个dump.rdb
    - 丢失数据相对多一些，时间点与时间点之间的窗口数据容易丢失（8点得到一个rdb，9点刚要落一个rdb，挂机了）
- 优点：
    - 类似java序列化， 恢复速度相对快

### AOF

- redis写操作记录到文件中
    - 丢失数据相对少
    - RDB和AOF可以同时开启（如果开启了AOF只会用AOF恢复，4.0以后AOF中包含RDB全量，增加记录新的写操作）
    - 弊端
        - 体量无限变大，恢复慢
        - 设计一个方案让AOF足够小
            - 4.0以前->重写->删除抵消的命令，合并重复的命令->最终也是一个纯指令的日志文件
            - 4.0以后->重写->将老的数据RDB到AOF文件中，将增量的以指令方式Append到AOF->AOF是一个混合体，利用的RDB的快，利用的日志的全量

- 原点：redis是内存数据库
    - 写操作会触发IO
    - NO、always、每秒
        - # no: don't fsync, just let the OS flush the data when it wants. Faster.
        - # always: fsync after every write to the append only log. Slow, Safest.
        - # everysec: fsync only one time every second. Compromise.

```sh
BGSAVE
redis-check-rdb dump.rdb 

BGREWRITEAOF
```

## 主从复制 
