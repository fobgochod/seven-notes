# Java基础

### volatile关键字底层原理

- 线程可见
- 防止指令重排序

### 线程池各个参数含义

- 核心
- 最大
- 超时时间
- 超时时间单位
- 任务队列
- 拒绝策略
- 线程工厂

### Lock、synchronized 区别

- Lock在功能上是sync的超级
- jdk6加入大量针对sync优化之后，行能基本持平
- sync语法层面的同步、语法清新简单、未来虚拟机更容易针对其优化
- Lock需要手动释放锁，由程序员自己保证

### ReentrantLock锁公平与非公平实现、重入原理

- 重写tryAcquire方法
- state状态值累计

### HashMap扩容时机（容量初始化为1000和10000是否触发扩容）、机制、1.7与1.8的差异

### ConcurrentHashMap1.7、1.8的优化与差异，size方法实现差异

### ThreadLocal原理与风险、为什么会内存泄露

### 阻塞队列的用途、区别

### LinkedBlockingQueue对列的add、put区别，实际过程中如何使用

### 悲观锁、乐观锁、自旋锁的使用场景、实现方式、优缺点

### Class.forName、loanClass区别；

### 线程生命周期、死锁条件与死锁避免、状态转换关系（源码级别）；

### String intern方法；

### cas的优缺点与解决方案、ABA问题；

## Redis相关

### Redis高性能原因

### Redis的部署模式

### RedisCluster底层原理

### Redis持久化机制

### 缓存淘汰机制

### 缓存穿透、缓存雪崩、缓存击穿发生场景与解决方案

## SQL相关

### MyBatis拦截器的用途

分页

### MyBatis动态SQL原理

### 分库分表方案设计

水平、垂直、Partition

### MySQL怎么解决幻读、原理（源码级别）

### Gap锁的作用域原理

### RR、RC区别

### MySQL默认的事务隔离级别、Oracle默认的事务隔离级别

可重复读

### MySQL为啥使用B+树索引

减少IO层数

redo log、binlog、undo
log写入顺序、分别保证了ACID的什么特性
数据库乐观锁

### MySQL优化

- 有序主键
- 索引

MySQL底层原理

## Spring相关

### @Bean注解、@Component注解区别

- @Bean 作用在方法上，加载第三方jar比较灵活
- @Component 作用在类上

### Spring Aop原理

- 动态代理

### @Aspect和普通AOP区别

- Spring 依然采用运行时生成动态代理的方式来增强目标对象，所以它不需要增加额外的编译，也不需要 AspectJ 的织入器支持；
- AspectJ 在采用编译时增强，所以 AspectJ 需要使用自己的编译器来编译 Java 文件，还需要织入器。

### 自定义拦截器和Aop那个先执行

### web 拦截器

### DispatchServlet原理

Filter(tomcat)->Interceptor(请求拦截)-AOP(方法拦截)

## Dubbo相关

Dubbo负载均衡、集群容错
Dubbo SPI机制、Route重写使用场景
Dubbo RPC底层原理
全链路监控实现原理

## 分布式相关

### 分布式锁的实现方式

- 数据库、Redis的SETNX
- Zookeeper

漏斗算法、令牌桶算法
事务最终一致性解决方案
SLA
分布式事务实现方式与区别
Tcc Confirm失败怎么办？
分布式锁的各种实现方式、对比
分布式ID的各种实现方式、对比
雪花算法时钟回拨问题与应对方案
红锁算法

## 设计模式

常用的设计模式
状态模式
责任链模式解决了什么问题
饿汉式、懒汉式优缺点、使用场景
模板方法模式、策略模式、单例模式、责任链模式

## Zookeeper

Zookeeper底层架构设计
zk一致性

## MQ

Kafka顺序消息
MQ消息幂等
Kafka高性能秘诀
Kafka高吞吐原理
Rocket事务消息、延时队列

## 计算机网络

浏览器输入一个url发生了什么
Http 1.0、1.1、2.0差异
IO多路复用
TCP四次挥手过程、状态切换
XSS、CRSF攻击与预防
301、302区别

## Tomcat

Tomcat大概原理

## 代码

手写发布订阅模式
大数（两个String)相加

## 场景问题

打赏排行榜实现
高并发下的请求合并
CPU 100%处理经验
短链系统设计
附近的人项目实现
10w个红包秒级发送方案
延时任务的实现方案与优缺点对比
