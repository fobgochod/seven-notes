# AQS(CLH)

> CLH(Craig, Landin, and Hagersten) </br> AbstractQueuedSynchronizer简称AQS

::: tip AQS
Provides a framework for implementing blocking locks and related synchronizers (semaphores,
events, etc) that rely on first-in-first-out (FIFO) wait queues. This class is designed to be a useful basis for most
kinds of synchronizers that rely on a single atomic int value to represent state. Subclasses must define the protected
methods that change this state, and which define what that state means in terms of this object being acquired or
released. Given these, the other methods in this class carry out all queuing and blocking mechanics. Subclasses can
maintain other state fields, but only the atomically updated int value manipulated using methods `getState`, `setState`
and `compareAndSetState` is tracked with respect to synchronization.
:::

AQS提供了一个依赖先进先出（FIFO）等待队列来实现阻塞锁和相关同步器(信号量、事件等)的框架。 为各种同步器提供了有用的基础，依赖一个原子性的int变量state
子类必须重新实现这些protected方法，以及定义state在获取或释放此对象方面的含义

```java
public abstract class AbstractQueuedSynchronizer {
    static final class Node {
        volatile int waitStatus;
        volatile Node prev;
        volatile Node next;
        volatile Thread thread;
        Node nextWaiter;
    }

    private transient volatile Node head;
    private transient volatile Node tail;
    /**
     * The synchronization state.
     */
    private volatile int state;
}
```

### ReentrantLock 可重入锁

#### FairSync 公平锁

```java
static final class FairSync extends Sync {

    final void lock() {
        acquire(1);
    }
}
```

```java
public abstract class AbstractQueuedSynchronizer {

    public final void acquire(int arg) {
        if (!tryAcquire(arg) &&
            acquireQueued(addWaiter(Node.EXCLUSIVE), arg))
            selfInterrupt();
    }
}
```

### ReentrantLock

### ReadWriteLock

- 只允许一个线程写入（其他线程既不能写入也不能读取）
- 没有写入时，多个线程允许同时读（提高性能）

> 适用条件是同一个数据，有大量线程读取，但仅有少数线程修改。
> 例如，一个论坛的帖子，回复可以看做写入操作，它是不频繁的，但是，浏览可以看做读取操作，是非常频繁的，这种情况就可以使用`ReadWriteLock`。

### StampedLock

> 前面介绍的`ReadWriteLock`可以解决多线程同时读，但只有一个线程能写的问题。
> 如果我们深入分析`ReadWriteLock`，会发现它有个潜在的问题：如果有线程正在读，写线程需要等待读线程释放锁后才能获取写锁，即读的过程中不允许写，这是一种悲观的读锁。
> `StampedLock`和`ReadWriteLock`相比，改进之处在于：读的过程中也允许获取写锁后写入！这样一来，我们读的数据就可能不一致，所以，需要一点额外的代码来判断读的过程中是否有写入，这种读锁是一种乐观锁。

- StampedLock提供了乐观读锁，可取代ReadWriteLock以进一步提升并发性能；
- StampedLock是不可重入锁。

### CountDownLatch

### CyclicBarrier

### Exchanger

### Phaser

### LockSupport

