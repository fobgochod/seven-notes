# 详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(二)


Executors -> 线程池工厂

- newSingleThreadExecutor 为什么有单线程的线程池
    - 有任务队列
    - 生命周期管理
- newCachedThreadPool
- newFixedThreadPool
- 什么时候用Cached 什么时候用Fixed
    - 任务数目不稳定 忽高忽低 Cached
    - 任务平稳

- newScheduledThreadPool

- 并发concurrent、并行parallel
    - 并发：任务提交
    - 并行：任务执行
- 并行是并发的子集

Worker类
- Runnable AQS
- thread
