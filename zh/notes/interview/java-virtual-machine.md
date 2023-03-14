# JVM

### Java 19 Virtual Threads

> [JEP Café](https://www.youtube.com/playlist?list=PLX8CzqL3ArzV4BpOzLanxd4bZr46x5e87)

A Java Thread, as created in the very early versions of Java is a thin wrapper on a platform thread. also called
operating system thread. There are two things you need to know about them.

- First, a platform thread needs to store its call stack in memory. For that, 20MB are reserved upfront in memory.
- Second, it is a system resource. It takes abouts 1ms to launch a platform thread.
  So: **20MB of memory, 1ms to launch**.

A platform thread is in fact a rather expensive resource. How can you optimize hardware utilization with such threads?

Suppose you have 16GB of memory available for your application. Divided by 20MB for a thread, you have room for 800
threads on such a machine. Suppose these threads are doing some I/O like accessing resources on a network. And suppose
that this resource is accessed in 100ms. Preparing the request and processing the response will be done in the order of
10 nanoseconds. Suppose all this in-memory computations are taking 1000 nanoseconds. It means that there is a factor in
the order of **100 thousand** between the preparation of the request and the processing of the response, and the time it
takes to get the response. During which your thread is sitting there, doing noting.

| Request preparation | Network access | Response Processing |
|---------------------|----------------|---------------------|
| 500ns               | 100ms          | 500ns               |

So if you have 800 such threads you CPU will be used at 0.8%. Less than 1%. And if double the memory to 32GB, it will be
used at 1.3%. Which is still pretty low. If you want a CPU usage of 90%, then you need 90k such threads.
Launching them will take 90s, that is 1 minute and a half, and they will consume 1.8TB of memory.

| memory(GB) | threads | launch(s) | CPU usage(%s) |
|------------|---------|-----------|---------------|
| 16         | 800     | 0.8       | 0.8           |
| 32         | 1600    | 1.6       | 1.3           |
| 1800       | 90000   | 90        | 90            |

So clearly, platform threads are far too expensive to "scale with near-optimal hardware utilization."
Another model of thread is needed there, this first gaol is very ambitious.
The second goal is to enable the existing code built in the classical Java Threads to adopt Virtual Threads with minimal
changes. This goal is also very ambitious, because it means that everything you could do with classical Threads,
you should be able to do it in the same way with Virtual Threads.

That covers several key points:

- First, virtual thread can run any Java code ot any native code.
- Second, you do not need to learn any new concepts
- Third, but you need to unlearn certain ideas. And here are some of them.
    - First: virtual threads are cheap, about 1000 times cheaper than classical platform thread.
    - Second: blocking a virtual thread is also cheap, so trying to avoid blocking a virtual thread is useless.
    - Writing classical blocking code is OK. And that's a good news, because blocking code is so much easier to write
      than asynchronous code.

At this point, you may wonder: is it a good idea to pool virtual threads? Well... the answer is... no, don't do that,
you are just wasting your time. Dose it make executor services useless? Well, yes and no. Usually executor services are
used to control the number of platform threads used by your application. So this use case is clearly useless now. You
don't need to do that with virtual threads. But it's not always the case,
it can also be a convenient way to create threads.

### Selecting a Collector Option

> [ParNew 和 PSYoungGen 和 DefNew 是一个东西么？](https://hllvm-group.iteye.com/group/topic/37095)

| Options                 | Young/Tenured Generation           | Threads | GC日志                  |
|-------------------------|------------------------------------|---------|-----------------------|
| -XX:+UseSerialGC        |
|                         | Copy/Serial                        | 1       | DefNew                |
|                         | MSC(MarkSweepCompact)/Serial Old   | 1       | Tenured               |
| -XX:+UseParNewGC        |
|                         | ParNew                             | 10      | ParNew                |
|                         | MSC(MarkSweepCompact)/Serial Old   | 10      | Tenured               |
| -XX:+UseParallelGC      |
|                         | PS Scavenge                        | 10      | PSYoungGen            |
|                         | PS MarkSweep/ParallelOld(JDK7u4之后) | 10      | ParOldGen             |
| -XX:+UseConcMarkSweepGC |
|                         | ParNew                             | 10      | ParNew                |
|                         | CMS(ConcurrentMarkSweep)           | 10      | CMS Initial Mark      |
| -XX:+UseG1GC            |
|                         | G1 Young Generation                | 10      | G1 Evacuation Pause   |
|                         | G1 Old Generation                  | 10      | Metadata GC Threshold |

```shell
# G1
-XX:ParallelGCThreads = 8 + (n - 8) * (5/8)
-XX:ConcGCThreads = -XX:ParallelGCThreads / 4

# Parallel
-XX:ParallelGCThreads = 8 + (n - 8) * (5/8)
```

### jps、jinfo、jstack、jmap、jstat

```shell
# 列出java进程
jsp -l
# 系统属性和jvm运行参数
jinfo pid
# 所有线程堆栈
jstack pid
# 堆内存信息
jmap -heap pid
# 特定类的堆统计
jmap -histo pid
# jvm统计信息
jstat -gc pid 1000 5
jstat -gcutil pid 1000 5
jstat -gcnew pid 1000 5
#
```

### CMS垃圾回收的碎片解决方式

### JVM垃圾回收器CMS的优缺点、与G1的区别、进入老年代的时机

### CMS与G1对比较

- 由于CMS默认启动线程(核心+3)/4 当服务器核心低于4个时候，垃圾收集占比较高，用户线程影响较大
- 无法处理浮动垃圾，所以不能等内存用满再回收，JDK5(68%)->JDK(92%)
- 采用标记-清除算法，必然带来内存碎片，通过参数开启full gc时候进行内存整理

### 常用的垃圾回收器

- 串行(Serial)：复制算法的Serial、Serial Old(MSC)
- 并行(Parallel): ParNew、PS Scavenge、PS MarkSweep
- 大多数并发：CMS、G1
- 并发：ZGC、Shenandoah

### JVM内存模型

- 公共区域：方法区、堆Heap
- 线程私有：程序计数器、虚拟机栈(VM Stack)、本地方法栈

### JVM调优思路

- 串行、并行、并发
- 吞吐量、延时

### 偏向锁、轻量级锁、重量级锁底层原理、升级过程

### GC Root、ModUnionTable

## Reference

- [Java 8 Command][java8:command]
- [Java 8 HotSpot Virtual Machine Garbage Collection Tuning Guide][java8:gctuning]
- [Java 17 Command][java17:command]
- [Java 17 HotSpot Virtual Machine Garbage Collection Tuning Guide][java17:gctuning]

[//]: # (@formatter:off)
[java8:gctuning]: https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/toc.html
[java8:command]: https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html
[java17:gctuning]: https://docs.oracle.com/en/java/javase/17/gctuning/index.html
[java17:command]: https://docs.oracle.com/en/java/javase/17/docs/specs/man/java.html
