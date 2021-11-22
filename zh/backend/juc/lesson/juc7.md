# 详解线程池：自定义线程池，JDK自带线程池，ForkJoin，源码解析等(一)


### 题目
>求用线程顺序打印A1B2C3....Z26

#### LockSupport

```java
public class Problem3 {

    private static final char[] nums = "1234567".toCharArray();
    private static final char[] letters = "ABCDEFG".toCharArray();

    private static Thread t1;
    private static Thread t2;

    public static void main(String[] args) {
        t1 = new Thread(() -> {
            for (char num : nums) {
                System.out.print(num);
                LockSupport.unpark(t2); // 叫醒T2
                LockSupport.park(); // T1阻塞
            }
        });
        t2 = new Thread(() -> {
            for (char letter : letters) {
                LockSupport.park(); // t2阻塞
                System.out.print(letter);
                LockSupport.unpark(t1); // 叫醒t1
            }
        });
        t1.start();
        t2.start();
    }
}
```

#### wait notify

```java
public class Problem4 {

    private static final char[] nums = "1234567".toCharArray();
    private static final char[] letters = "ABCDEFG".toCharArray();
    private static final Object lock = new Object();

    public static void main(String[] args) {
        new Thread(() -> {
            synchronized (lock) {
                for (char num : nums) {
                    System.out.print(num);
                    try {
                        lock.notify();
                        lock.wait();
                    } catch (InterruptedException e) {
                    }
                }
                lock.notify();  // 必须，否则无法停止程序
            }

        }).start();

        new Thread(() -> {
            synchronized (lock) {
                for (char letter : letters) {
                    System.out.print(letter);
                    try {
                        lock.notify();
                        lock.wait();
                    } catch (InterruptedException e) {
                    }
                }
                lock.notify();
            }
        }).start();
    }
}
```

## Executor ExecutorService

Callable -> Runnable + Result
Future -> 存储执行的 将来才会产生结果
FutureTask -> Future + Runnable
CompletableFuture -> 管理多个Future

- ThreadPoolExecutor
- ForkJoinPool
    - 分解汇总的任务
    - 用很少的线程可以执行很多的任务（子任务）TPE做不到先执行子任务
    - CPU密集型
