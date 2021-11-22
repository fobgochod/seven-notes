# redis的集群：主从复制、CAP、PAXOS、cluster分片集群01

- 单机、单节点、单实例
    - 单点故障
    - 容量限制
    - 压力

通过AKF一变多

- 数据一致性
    - 所有节点阻塞知道数据全部一致，强一致性 同步阻塞方式
        - 破坏可用性
    - 通过异步方式 容忍数据丢失一部分


- 主从
    - client可以访问主机和备份机
- 主备
    - client只能访问主

## 集群搭建

### 主从

```sh
[root@fobgochod ~]# cd /opt/package/redis/redis-6.2.4/utils
[root@fobgochod utils]# ./install_server.sh 
# 安装6380
/opt/install/redis/etc/6380.conf
/opt/install/redis/log/6380.log
/opt/install/redis/lib/6380
# 安装6381
/opt/install/redis/etc/6381.conf
/opt/install/redis/log/6381.log
/opt/install/redis/lib/6381

# 修改/opt/install/redis/etc/*.conf三个文件
## 禁止后台运行
daemonize no
# 注释日志，打印到前台
#logfile /opt/install/redis/log/6381.log
# 关闭AOF
appendonly no
```

```sh
# 启动服务端
redis-server /opt/install/redis/etc/6379.conf
redis-server /opt/install/redis/etc/6380.conf
redis-server /opt/install/redis/etc/6381.conf

# 启动客户端
[root@fobgochod ~]# redis-cli 
127.0.0.1:6379> set k1 1
OK

# 6380追随6379 Redis5之前使用SLAVEOF
[root@fobgochod ~]# redis-cli -p 6380
127.0.0.1:6380> REPLICAOF 127.0.0.1 6379
OK
127.0.0.1:6380> keys *
1) "k1"
127.0.0.1:6380>

# 6381追随6379
[root@fobgochod ~]# redis-cli -p 6381
127.0.0.1:6381> REPLICAOF 127.0.0.1 6379
OK
127.0.0.1:6381> keys *
1) "k1"
127.0.0.1:6381>
```

```sh
redis-server /opt/install/redis/etc/6381.conf --replicaof 127.0.0.1 6379
redis-server /opt/install/redis/etc/6381.conf --replicaof 127.0.0.1 6379 --appendonly yes
```

```sh
# 6380恢复master
127.0.0.1:6380> REPLICAOF no one
OK
```

#### 主从复制配置

```sh
replica-serve-stale-data yes
replica-read-only yes
repl-diskless-sync no

# 增量复制
repl-backlog-size 1mb

min-replicas-to-write 3
min-replicas-max-lag 10
```

### 哨兵

> [https://redis.io/topics/sentinel](https://redis.io/topics/sentinel)

```sh
# 可以直接复制模版
cp /opt/package/redis/redis-6.2.4/sentinel.conf /opt/install/redis/etc/26379.conf

# 或者创建最简单的配置文件
vi 26379.conf
port 26379
sentinel monitor mymaster 127.0.0.1 6379 2


vi 26380.conf
port 26380
sentinel monitor mymaster 127.0.0.1 6379 2

vi 26381.conf
port 26381
sentinel monitor mymaster 127.0.0.1 6379 2

# 启动服务端
redis-server /opt/install/redis/etc/6379.conf
redis-server /opt/install/redis/etc/6380.conf --replicaof 127.0.0.1 6379
redis-server /opt/install/redis/etc/6381.conf --replicaof 127.0.0.1 6379

# 启动哨兵
redis-server /opt/install/redis/etc/26379.conf --sentinel
redis-server /opt/install/redis/etc/26380.conf --sentinel
redis-server /opt/install/redis/etc/26381.conf --sentinel
```
