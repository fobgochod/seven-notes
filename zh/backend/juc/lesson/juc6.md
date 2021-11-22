# 线程池可用的各种高并发容器详解：CopyOnWriteList，BlockingQueue等

## Map

>Hashtable 方法上加锁 -> HashMap 无锁 -> SynchronizedMap 锁力度变小 -> ConcurrentHashMap CAS

- Hashtable
  - @since 1.0
  - 加锁 synchronized
  - 同步 线程安全

![](/images/juc/Hashtable.png)

- HashMap
  - @since 1.2
  - 内部无锁 多线程不安全

![](/images/juc/HashMap.png)

- Collections.SynchronizedMap
  - @since 1.2
  - final Object mutex; //Object on which to synchronize
  - synchronized (mutex)

![](/images/juc/SynchronizedMap.png)

- ConcurrentHashMap
  - @since 1.5

![](/images/juc/ConcurrentHashMap.png)


## List、Queue

- Vector和Hashtable自带锁，基本不用
- Vector -> Queue 
- Queue List区别
- Queue添加了对多线程友好的API offer poll peek
- BlockingQueue put take 阻塞


- Vector 
  - @since 1.0
  - 加锁 synchronized
  - 同步 线程安全

![](/images/juc/Vector.png)

- ArrayList
  -  @since 1.2

![](/images/juc/ArrayList.png)

- LinkedList
  -  @since 1.2

![](/images/juc/LinkedList.png)

- ConcurrentLinkedQueue
  - @since 1.5

![](/images/juc/ConcurrentLinkedQueue.png)


## 总结
 
HashMap
LinkedHashMap 链表
TreeMap 红黑树

ConcurrentHashMap
ConcurrentSkipListMap 跳表

CopyOnWriteArrayList


- BlockingQueue
  - ConcurrentLinkedQueue
  - LinkedBlockingQueue 无界 put take
  - ArrayBlockingQueue 有界
  - PriorityQueue
  - DelayQueue 按时间排序 优先执行  按时间进行任务调度
  - SynchronousQueue 一个线程给另外一个传数据
  - LinkedTransferQueue 

- 目标 为ThreadPool做准备


