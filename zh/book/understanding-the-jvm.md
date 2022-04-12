# 深入理解Java虚拟机（第3版）

::: warning 书籍简介

- 本书作者为 [中] 周志明。
- 本书是《深入理解Java虚拟机》系列第3版。
- 这是一部从工作原理和工程实践两个维度深入剖析JVM的著作。
  :::

## RednaxelaFX

- [Major GC和Full GC的区别是什么](https://www.zhihu.com/question/41922036/answer/93079526)
- [JVM full GC的奇怪现象](https://www.zhihu.com/question/48780091/answer/113063216)
- [JVM默认老年代回收是 PSMarkSweep(Serial-Old) 还是Parallel Old](https://www.zhihu.com/question/56344485/answer/149543993)

## 走近Java

![Java技术发展时间线](/images/jvm/jvm-6.png)

## 自动内存管理

> Java与C++之间有一堵由内存动态分配和垃圾收集技术所围成的高墙，墙外面的人想进去，墙里面的人却想出来。Java与C++之间有一堵由内存动态分配和垃圾收集技术所围成的高墙，墙外面的人想进去，墙里面的人却想出来。

> 《Java虚拟机规范》规定，Java虚拟机所管理的内存将会包括以下几个运行时数据区

![Java虚拟机运行时数据区](/images/jvm/jvm-5.png)

- 程序计数器
    - 线程私有
    - 如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址
    - 如果正在执行的是本地（Native）方法，这个计数器值则应为空（Undefined）
    - 唯一一个在《Java虚拟机规范》中没有规定任何OutOfMemoryError情况的区域
- Java虚拟机栈
    - 线程私有，生命周期与线程相同
    - 虚拟机栈描述的是Java方法执行的线程内存模型： 每个方法被执行的时候，Java虚拟机都会同步创建一个栈帧￼（Stack
      Frame）用于存储局部变量表、操作数栈、动态连接、方法出口等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。
    - 变量槽（Slot）
    - 如果线程请求的栈深度大于虚拟机所允许的深度，将抛出StackOverflowError异常
    - 如果Java虚拟机栈容量可以动态扩展￼，当栈扩展时无法申请到足够的内存会抛出OutOfMemoryError异常
- 本地方法栈
    - 虚拟机栈为虚拟机执行执行Java方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到本地（Native）方法服务
    - 譬如Hot-Spot虚拟机直接就把本地方法栈和虚拟机栈合二为一
    - 与虚拟机栈一样，本地方法栈也会在栈深度溢出或者栈扩展失败时分别抛出StackOverflowError和OutOfMemoryError异常
- Java堆（GC堆）
    - 被所有线程共享
    - Java世界里"几乎"所有的对象实例都在这里分配内存
    - 由于现代垃圾收集器大部分都是基于分代收集理论设计的，所以Java堆中经常会出现“新生代”“老年代”“永久代”“Eden空间”“From Survivor空间”“To Survivor空间”等名词
    - 在十年之前（以G1收集器的出现为分界），作为业界绝对主流的HotSpot虚拟机，它内部的垃圾收集器全部都基于“经典分代”￼来设计，需要新生代、老年代收集器搭配才能工作
    - Java堆既可以被实现成固定大小的，也可以是可扩展的，不过当前主流的Java虚拟机都是按照可扩展来实现的（通过参数-Xmx和-Xms设定）
    - 如果在Java堆中没有内存完成实例分配，并且堆也无法再扩展时，Java虚拟机将会抛出OutOfMemoryError异常
- 方法区（Method Area）
    - 被所有线程共享
    - 在JDK 6的时候HotSpot开发团队就有放弃永久代，逐步改为采用本地内存（Native Memory）来实现方法区的计划了
    - 到了JDK 7的HotSpot，已经把原本放在永久代的字符串常量池、静态变量等移出
    - 而到了JDK 8，终于完全废弃了永久代的概念，改用与JRockit、J9一样在本地内存中实现的元空间（Meta-space）来代替，把JDK 7中永久代还剩余的内容（主要是类型信息）全部移到元空间中。
    - 根据《Java虚拟机规范》的规定，如果方法区无法满足新的内存分配需求时，将抛出OutOfMemoryError异常
- 运行时常量池（Runtime Constant Pool）
    - 是方法区的一部分
    - 当常量池无法再申请到内存时会抛出OutOfMemoryError异常
- 直接内存（Direct Memory）
    - 并不是虚拟机运行时数据区的一部分
    - 但是这部分内存也被频繁地使用，而且也可能导致OutOfMemoryError异常出现

### HotSpot虚拟机对象探秘

- 给对象分配内存
    - 指针碰撞（Bump The Pointer）
    - 空闲列表（Free List）
- 本地线程分配缓冲（Thread Local Allocation Buffer，TLAB）
- 对象的访问定位
    - 句柄访问
    - 直接指针

### 经典垃圾收集器

#### 术语

- 垃圾收集器（Garbage Collection，简称GC）
- 判断对象是否存活算法
    - 引用计数算法（Reference Counting）：微软COM技术（Component Object Model）
    - 可达性分析算法（Reachability Analysis）：主流Java虚拟机
        - 字符串常量池（String Table）
        - GC Roots集合
- 分代收集和局部回收(Partial GC)
- 从如何判定对象消亡的角度出发，垃圾收集算法可分为
    - 引用计数式垃圾收集（Reference Counting GC），又称：直接垃圾收集
    - 追踪式垃圾收集（Tracing GC），又称：间接垃圾收集
- 当前商业虚拟机的垃圾收集器大多遵循了"分代收集"（Generational Collection）的理论进行设计
    - 两个分代假说
        - 弱分代假说（Weak Generational Hypothesis）：绝大多数对象都是朝生夕灭的
        - 强分代假说（Strong Generational Hypothesis）：熬过越多次垃圾收集过程的对象就越难以消亡
    - 第三条经验法则
        - 跨代引用假说（Intergenerational Reference Hypothesis）：夸代引用相对于同代引用来说仅占极少数
- Java堆划分区域
    - 新生代（Young Generation）和老年代（Old Generation）：HotSpot虚拟机，也是现代业界主流命名方式
    - 婴儿区（Nursery）和长存区（Tenured）：IBM J9虚拟机
- 分代统一定义
    - 部分收集（Partial GC）：指目标不是完整收集整个Java堆的垃圾收集，其中又分为：
        - 新生代收集（Minor GC/Young GC）：指目标只是新生代的垃圾收集。
        - 老年代收集（Major GC/Old GC）：指目标只是老年代的垃圾收集。目前只有CMS收集器会有单独收集老年代的行为。另外请注意“Major
          GC”这个说法现在有点混淆，在不同资料上常有不同所指，读者需按上下文区分到底是指老年代的收集还是整堆收集。
        - 混合收集（Mixed GC）：指目标是收集整个新生代以及部分老年代的垃圾收集。目前只有G1收集器会有这种行为。
    - 整堆收集（Full GC）：收集整个Java堆和方法区的垃圾收集。
- 垃圾收集器算法
    - 标记-清除算法（Mark-Sweep）
    - 标记-复制算法
        - 半区复制（Semispace Coping）
        - 分配担保（Handle Promotion）
    - 标记-整理算法（Mark-Compact）
- 并发标记对象消失问题
    - 两个条件同时满足，才会产生"对象消失"问题
        - 赋值器插入了一条或多条从黑色对象到白色对象的新引用；
        - 赋值器删除了全部从灰色对象到该白色对象的直接或间接引用。
    - 两种解决方案
        - 增量更新（Incremental Update）：CMS
        - 原始快照（Snapshot At The Beginning，SATB）：G1、Shenandoah
- 衡量垃圾收集器的三项最重要的指标（不可能三角）
    - 内存占用（Footprint）
    - 吞吐量（Throughput）
    - 延迟（Latency）

#### 垃圾收集器

> "经典"：指在JDK 7 Update 4之后（在这个版本中正式提供了商用的G1收集器，此前G1仍处于实验状态）、
> JDK 11正式发布之前，OracleJDK中的HotSpot虚拟机所包含的全部可用的垃圾收集器。

> 注意：并行和并发都是并发编程中的专业名词，在谈论垃圾收集器的上下文语境中，它们可以理解为
>- 并行（Parallel）：并行描述的是多条垃圾收集器线程之间的关系，说明同一时间有多条这样的线程在协同工作，通常默认此时用户线程是处于等待状态。
>- 并发（Concurrent）：并发描述的是垃圾收集器线程与用户线程之间的关系，说明同一时间垃圾收集器线程与用户线程都在运行。由于用户线程并未被冻结，所以程序仍然能响应服务请求，但由于垃圾收集器线程占用了一部分系统资源，此时应用程序的处理的吞吐量将受到一定影响。

![](/images/jvm/jvm-2.png)
![](/images/jvm/jvm-3.png)

| 垃圾收集器                              | 区域     | 算法          | GC线程       | 描述                                                                                                                                                                                                                                                                  |
|------------------------------------|--------|-------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Serial                             | 新生代    | 标记-复制       | 单线程(STW)   | 1. JDK1.3.1之前HotSpot新生代唯一选择<br/>2. HotSpot客户端模式下默认的新生代收集器<br/>3. 简单高效(与其他收集器单线程相比)，它是收集器额外内存消耗(Memory Footprint)最小的                                                                                                                                                 |
| ParNew                             | 新生代    | 标记-复制       | 多线程并行(STW) | 1. Serial多线程并行版本，其余行为包括控制参数、收集算法、STW、对象分配规、回收策略等都与Serial完全一致<br/>2. JDK7之前遗留系统中首选的新生代收集器<br/>3. 除了Serial收集器外，目前只有它能与CMS配合工作                                                                                                                                         |
| Parallel Scavenge                  | 新生代    | 标记-复制       | 多线程并行(STW) | 1. 目标是达到一个可控制的吞吐量(Throughput)，被称作"吞吐量优先收集器"<br/>2. -XX:+MaxGCPauseMillis：控制最大垃圾收集停顿时间，大于0毫秒<br/>3. -XX：GCTimeRatio：直接设置吞吐量大小，大于0小于100的整数<br/>4. -XX:+UseAdaptiveSizePolicy：虚拟机会根据当前系统的运行情况收集性能监控信息，动态调整这些参数以提供最合适的停顿时间或者最大的吞吐量。这种调节方式称为垃圾收集的自适应的调节策略（GC Ergonomics） |
| Serial Old (MSC)(MarkSweepCompact) | 老年代    | 标记-整理       | 单线程(STW)   | 1. 是Serial收集器老年代版本<br/>2. 主要意义是提供客户端模式下HotSpot虚拟机使用<br/>3. JDK5之前与Parallel Scavenge搭配使用<br/>4. 作为CMS收集器发生失败时的后备预案                                                                                                                                                   |
| Parallel Old                       | 老年代    | 标记-整理       | 多线程并发(STW) | 1. JDK6才开始提供，Parallel Scavenge收集器的老年代版本<br/>2. 吞吐量优先(Parallel Scavenge+Parallel Old)                                                                                                                                                                                |
| CMS (Concurrent Mark Sweep)        | 老年代    | 标记-清除       | 并发标记、并发清除  | 1. 四个步骤，1)初始标记 2)并发标记(增量更新) 3)重新标记 4)并发清除<br/>2. "并发低停顿收集器"，是HotSpot虚拟机追求低停顿的第一次成功尝试<br/>3. 只有CMS会有单独收集老年代的行为<br/>4. 三个明显缺点，1)对资源非常敏感，应为占用一部分线程而导致应用程序变慢，降低吞吐量 2) 无法处理"浮动垃圾"(Floating Garbage) 3)"标记-清除"算法必然会带来空间碎片                                                 |
| G1 (Garbage First)                 | Region | 标记-整理、标记-复制 | 并发标记       | 1. 垃圾收集器技术发展历史上里程牌式的成功<br/>2.基于Region的内存布局<br/>3. JDK 7 Update 4正式提供商用                                                                                                                                                                                              |
| Shenandoah                         | Region |             | 并发标记、并发整理  | 是一款只有OpenJDK才会包含，而OracleJDK里反而不存在的收集器                                                                                                                                                                                                                               |
| ZGC                                | Region |             | 并发整理       | 2018年Oracle创建JEP333将ZGC提交给OpenJDK，推动其进入OpenJDK发布清单之中                                                                                                                                                                                                                |

### 垃圾收集相关常用参数

![](/images/jvm/jvm-4.png)

## 十三 线程安全与锁优化

[Amdahl's Law(阿姆达尔定律)](https://jenkov.com/tutorials/java-concurrency/amdahls-law.html)

### 线程安全

> 当多个线程同时访问一个对象时，如果不用考虑这些线程在运行时环境下的调度和交替执行，也不需要进行额外的同步，或者在调用方进行任何其他的协调操作，调用这个对象的行为都可以获得正确的结果，那就称这个对象是线程安全的。

- Java语言中各种操作共享的数据
    - 不可变
    - 绝对线程安全
    - 相对线程安全
    - 线程兼容
    - 线程对立

- 线程安全实现方法
    - 互斥同步(Mutual Exclusion & Synchronization)
    - 非阻塞同步(Non-Blocking Synchronization)
    - 无同步方案

### 锁优化

#### 自旋锁和自适应自旋(Adaptive Spinning)

#### 锁消除(Lock Elimination)

#### 锁粗化(Lock Coarsening)

#### 轻量级锁(Lightweight Locking)

![HotSpot虚拟机对象头Mark Word](/images/jvm/jvm-13-1.png)

#### 偏向锁(Biased Locking)

