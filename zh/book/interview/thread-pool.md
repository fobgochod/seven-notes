# ThreadPool

## 线程[Thread]

#### 线程状态

- NEW
- RUNNABLE
- BLOCKED
- WAITING
- TIMED_WAITING
- TERMINATED

#### 创建线程

```java
public class CreateThread {

    public static void main(String[] args) {
        T1 t1 = new T1();
        t1.start();

        Thread t2 = new Thread(new T2());
        t2.start();

        Thread t3 = new Thread(() -> {
            System.out.println("T3 = " + Thread.currentThread().getName());
        });
        t3.start();

        ExecutorService executor = Executors.newFixedThreadPool(1);
        executor.execute(() -> {
            System.out.println("T4 = " + Thread.currentThread().getName());
        });
        executor.shutdown();
    }

    private static class T1 extends Thread {
        @Override
        public void run() {
            System.out.println("T1 = " + Thread.currentThread().getName());
        }
    }

    private static class T2 implements Runnable {
        @Override
        public void run() {
            System.out.println("T2 = " + Thread.currentThread().getName());
        }
    }
}
```

## 线程池

### 什么时候使用线程池

- 单个任务处理时间比较短
- 需要处理的任务数量很大

### 使用线程池的好处

- 降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。
- 提高响应速度。当任务到达时，任务可以不需要的等到线程创建就能立即执行。
- 提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。

### 线程池的创建

```java
new ThreadPoolExecutor(corePoolSize,maximumPoolSize,keepAliveTime,unit,workQueue,threadFactory,handler)
```

- corePoolSize – the number of threads to keep in the pool, even if they are idle, unless allowCoreThreadTimeOut is set
- maximumPoolSize – the maximum number of threads to allow in the pool
- keepAliveTime – when the number of threads is greater than the core, this is the maximum time that excess idle threads
  will wait for new tasks before terminating.
- unit – the time unit for the keepAliveTime argument
- workQueue – the queue to use for holding tasks before they are executed. This queue will hold only the Runnable tasks
  submitted by the execute method.
- threadFactory – the factory to use when the executor creates a new thread
- handler – the handler to use when execution is blocked because the thread bounds and queue capacities are reached

### 线程池状态

![](/images/juc/thread-pool-state.png)

- RUNNING:  Accept new tasks and process queued tasks
- SHUTDOWN: Don't accept new tasks, but process queued tasks
- STOP:     Don't accept new tasks, don't process queued tasks, and interrupt in-progress tasks
- TIDYING:  All tasks have terminated, workerCount is zero, the thread transitioning to state TIDYING will run the
  terminated() hook method
- TERMINATED: terminated() has completed

### FAQ

#### 线程池运行流程

- JDK线程池：core->queue->maximum
- Tomcat和Dubbo：core->maximum->queue

> 通过TaskQueue的offer方法，切换执行流程

- java.util.concurrent.ThreadPoolExecutor
- org.apache.tomcat.util.threads.ThreadPoolExecutor
- org.apache.dubbo.common.threadpool.support.eager.EagerThreadPoolExecutor

#### 一个线程池中的线程异常了，那么线程池会怎么处理这个线程?

- 当执行方式是execute时，可以看到堆栈异常的输出。
- 当执行方式是submit时，堆栈异常没有输出。但是调用Future.get()方法时，可以捕获到异常。
- 不会影响线程池里面其他线程的正常执行。
- 当执行方式是execute时，线程池会把这个线程移除掉，并创建一个新的线程放到线程池中。

#### 线程什么时候回收

- allowCoreThreadTimeOut=ture 核心线程允许被回收
- 线程数量(wc)大于核心线程数(corePoolSize)
- 空闲时间超过了keepAliveTime

> getTask()

```java
// Are workers subject to culling?
boolean timed=allowCoreThreadTimeOut||wc>corePoolSize;
```

#### 线程执行顺序为轮询

- 所以只要提交任务的间隔小于keepAliveTime，就不会有线程被回收，哪怕超过corePoolSize

#### 线程池里面的两把锁

##### mainLock

- 多个线程串行化调用interruptIdleWorkers()，避免了不必要的中断风暴
- 加锁好维护统计参数，如largestPoolSize、completedTaskCount等

```java
/**
 * Lock held on access to workers set and related bookkeeping.
 * While we could use a concurrent set of some sort, it turns out to be generally preferable to use a lock.
 * Among the reasons is that this serializes interruptIdleWorkers, which avoids unnecessary interrupt storms, especially during shutdown.
 * Otherwise exiting threads would concurrently interrupt those that have not yet interrupted.
 * It also simplifies some of the associated statistics bookkeeping of largestPoolSize etc.
 * We also hold mainLock on shutdown and shutdownNow, for the sake of ensuring workers set is stable while separately checking permission to interrupt and actually interrupting.
 */
private final ReentrantLock mainLock=new ReentrantLock();
/**
 * Tracks largest attained pool size. Accessed only under mainLock.
 */
private int largestPoolSize;
/**
 * Counter for completed tasks. Updated only on termination of worker threads. Accessed only under mainLock.
 */
private long completedTaskCount;
```

##### Worker

- Worker 类存在的主要意义就是为了维护线程的中断状态
- Worker是不能重入的互斥锁，而ReentrantLock是可以重入的

```java
/**
 * Class Worker mainly maintains interrupt control state for threads running tasks, along with other minor bookkeeping.
 * This class opportunistically extends AbstractQueuedSynchronizer to simplify acquiring and releasing a lock surrounding each task execution.
 * This protects against interrupts that are intended to wake up a worker thread waiting for a task from instead interrupting a task being run.
 * We implement a simple non-reentrant mutual exclusion lock rather than use ReentrantLock because we do not want worker tasks to be able to reacquire the lock when they invoke pool control methods like setCorePoolSize.
 * Additionally, to suppress interrupts until the thread actually starts running tasks, we initialize lock state to a negative value, and clear it upon start (in runWorker).
 */
private final class Worker extends AbstractQueuedSynchronizer implements Runnable {
    @Override
    protected boolean tryAcquire(int unused) {
        if (compareAndSetState(0, 1)) {
            setExclusiveOwnerThread(Thread.currentThread());
            return true;
        }
        return false;
    }
}
```
