# JUC包下AtomicXXX类与新的同步机制：Latch Semaphore等

## Long、AtomicLong、LongAdder

- 多线程自增(i++)
  - synchronized(o) aLong++
  - CAS atomicLong.incrementAndGet();
  - 分段锁 longAdder.increment();

- 可重入(synchronized)

<p class="tip">各种JUC同步锁</p>

## ReentrantLock 

- Reentrantlock用于替代synchronized
- 必须要必须要必须要手动释放锁
- 使用sync锁定的话如果遇到异常，jvm会自动释放锁，但是lock必须手动释放锁，因此经常在finally中进行锁的释放
- 使用ReentrantLock可以进行“尝试锁定”tryLock，这样无法锁定，或者在指定时间内无法锁定，线程可以决定是否继续等待
- 使用ReentrantLock还可以调用lockInterruptibly方法，可以对线程interrupt方法做出响应，
- 在一个线程等待锁的过程中，可以被打断
- ReentrantLock还可以指定为公平锁
  
- 公平锁、非公平锁
  - 非公平锁：直接争抢，抢不到再进队列
  - 公平锁：新来的线程，获取锁时，先去检查等待队列是否为空，不为空，直接进入队列排队

ReentrantLock | syncchronized
--- | ---
手动加锁、解锁 | 系统自动
可重入 | 可重入
CAS | sync(锁升级)
tryLock | 
lockInterruptibly | 
非公平(默认)、公平 | 非公平

## CountDownLatch

- 门闩

```java
public class CountDownLatchTest {
    CountDownLatch latch = new CountDownLatch(10);
    latch.countDown();
    latch.await();
}
```

## CyclicBarrier

- 栅栏

```java
public class CyclicBarrierTest {
    CyclicBarrier barrier = new CyclicBarrier(20);
    barrier.await();
}
```

## Phaser

- 阶段（门闩+栅栏）

```java
public class PhaserTest {
    MarriagePhaser phaser = new MarriagePhaser();
    phaser.bulkRegister(7);
    phaser.arriveAndAwaitAdvance();
    
    phaser.arriveAndDeregister();
    phaser.register()
}
```

## ReadWriteLock、StampedLock

- 读写锁
  - 读 共享锁
  - 写 排它锁、互斥锁

```java
public class ReadWriteLockTest {
    ReadWriteLock readWriteLock = new ReentrantReadWriteLock();
    Lock readLock = readWriteLock.readLock();
    Lock writeLock = readWriteLock.writeLock();
}
```

## Semaphore

- 信号灯，允许N个线程同时运行
  - 限流

```java
public class SemaphoreTest {
    Semaphore s = new Semaphore(1);
    s.acquire();
    s.release();
}
```

## Exchanger

- 交换器

```java
public class ExchangerTest {
    Exchanger<String> exchanger = new Exchanger<>();
}
```


<p class="tip">锁概念</p>

- 乐观锁 CAS
- 悲观锁 synchronized
- 自旋锁 CAS AtomicXXX
- 读写锁（排它锁、共享锁） ReadWriteLock
- 分段锁 LongAdder、ConcurrentHashMap