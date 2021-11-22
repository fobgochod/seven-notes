# redis的集群：主从复制、CAP、PAXOS、cluster分片集群02

## 集群

- Redis多种集群方案
    - Twemproxy [https://github.com/twitter/twemproxy](https://github.com/twitter/twemproxy)
    - Predixy [https://github.com/joyieldInc/predixy](https://github.com/joyieldInc/predixy)
    - redis-cerberus [https://github.com/projecteru/redis-cerberus](https://github.com/projecteru/redis-cerberus)
    - Codis [https://github.com/CodisLabs/codis](https://github.com/CodisLabs/codis)
    - Redis Cluster [https://redis.io/topics/cluster-tutorial](https://redis.io/topics/cluster-tutorial)

- modula hash+取模
    - 影响分布式下的扩展性（增加节点 数据全局洗牌）
- random 消息队列
    - 特定使用场景
- ketama 一致性哈希
    - 不会造成全局洗牌 不
    - 新增节点造成一小部分数据不能命中
    - 问题：击穿，压到mysql
    - 方案：设法取离我最近的2个物理节点


- Redis Cluster 无主模型

## 数据分治

- 聚合操作很难实现
- 事物

> [Epel 镜像](https://developer.aliyun.com/mirror/epel?spm=a2c6h.13651102.0.0.4d691b11bYR2UH)

```sh
[root@fobgochod ~]# cd /etc/yum.repos.d/
[root@fobgochod yum.repos.d]# wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo
[root@fobgochod yum.repos.d]# yum clean all
Repository epel is listed more than once in the configuration
28 files removed
[root@fobgochod yum.repos.d]# cd
[root@fobgochod ~]# yum search autoconf
```

> 02.16.50

## 演示

### Twemproxy

### Predixy

### Redis Cluster

```sh
redis-cli --cluster help
```
