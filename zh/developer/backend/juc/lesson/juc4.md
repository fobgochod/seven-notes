# LockSupport，高频面试题，AQS源码，以及源码阅读方法论

## LockSupport

- 锁支持

```java
public class LockSupportTest {
    LockSupport.park();
    LockSupport.unpark(t);
}
```

## 面试题

### 题目1  
>实现一个容器，提供两个方法，add，size，写两个线程，  
>线程1添加10个元素到容器中，线程2实现监控元素的个数，当个数到5个时，线程2给出提示并结束

```java {18,20,35,41}
public class Problem1 {

    private static final int TOTAL_SIZE = 10;
    private static final int OUT_SIZE = 5;
    private List<Object> lists = new ArrayList<>(TOTAL_SIZE);

    public static void main(String[] args) {
        Problem1 p = new Problem1();
        final Object lock = new Object();

        new Thread(() -> {
            synchronized (lock) {
                System.out.println("t1 begin...");
                for (int i = 0; i < TOTAL_SIZE; i++) {
                    p.add(i);
                    System.out.println("t1 add " + i);
                    if (p.size() == OUT_SIZE) {
                        lock.notify();
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
                System.out.println("t1 end...");
            }
        }).start();

        new Thread(() -> {
            System.out.println("t2 begin...");
            synchronized (lock) {
                try {
                    if (p.size() != OUT_SIZE) {
                        lock.wait();
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("t2 end...");
                lock.notify();
            }
        }).start();
    }

    public void add(Object o) {
        lists.add(o);
    }

    public int size() {
        return lists.size();
    }
}
```


### 题目2
>写一个固定容量同步容器，拥有put和get方法，以及getCount方法，  
>能够支持2个生产者线程以及10个消费者线程的阻塞调用

```java
public class Problem2<T> {
    private final LinkedList<T> lists = new LinkedList<>();
    private final int MAX = 10;
    private int count = 0;

    private Lock lock = new ReentrantLock();
    private Condition producer = lock.newCondition();
    private Condition consumer = lock.newCondition();

    public static void main(String[] args) throws InterruptedException {
        Problem2<String> p = new Problem2<>();
        //启动消费者线程
        for (int i = 0; i < 10; i++) {
            new Thread(() -> {
                for (int j = 0; j < 5; j++) {
                    System.out.println(p.get());
                }
            }, "consumer" + i).start();
        }
        TimeUnit.SECONDS.sleep(2);
        //启动生产者线程
        for (int i = 0; i < 2; i++) {
            new Thread(() -> {
                for (int j = 0; j < 25; j++) {
                    p.put(Thread.currentThread().getName() + " " + j);
                }
            }, "producer" + i).start();
        }
    }

    public void put(T t) {
        try {
            lock.lock();
            while (lists.size() == MAX) { //想想为什么用while而不是用if？
                producer.await();
            }
            lists.add(t);
            ++count;
            consumer.signalAll(); //通知消费者线程进行消费
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }

    public T get() {
        T t = null;
        try {
            lock.lock();
            while (lists.size() == 0) {
                consumer.await();
            }
            t = lists.removeFirst();
            count--;
            producer.signalAll(); //通知生产者进行生产
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
        return t;
    }
}
```

## AQS(CLH(三个人首字母缩写))

>核心  
>volatile state 根据子类不同实现，意义不同  
>Node 双向链表 节点装的是Thread，监控上面的state

```java
public abstract class AbstractQueuedSynchronizer{
    private volatile int state;

    static final class Node {
        volatile Node prev;
        volatile Node next;
        volatile Thread thread;
    }
}
```


- ReentrantLock state 0、1、2... 代表 解锁、加锁、锁重入... 
- CountDownLatch