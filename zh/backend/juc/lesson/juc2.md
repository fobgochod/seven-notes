# 解析自旋锁CAS操作与volatile

## volatile关键字

>可以阅读这篇文章进行更深入的理解[Java内存模型](http://www.cnblogs.com/nexiyi/p/java_memory_model_and_thread.html)

- 保证线程可见性
- 禁止指令重排

---
### 保证线程可见性
- volatile 关键字，使一个变量在多个线程间可见
- A B线程都用到一个变量，java默认是A线程中保留一份copy，这样如果B线程修改了该变量，则A线程未必知道
- 使用volatile关键字，会让所有线程都会读到变量的修改值

>volatile并不能保证多个线程共同修改running变量时所带来的不一致问题，也就是说volatile不能替代synchronized  
>volatile修饰引用类型（包括数组）只能保证引用本身的可见性，不能保证内部字段的可见性

---

- 保证线程可见性
  - MESI
  - CPU缓存一致性协议


### 禁止指令重排

> 和现代CPU有关
- 以前CPU是顺序执行
- 现在为了提高效率，会把指令并发执行（流水线执行）
  - 这样就可能会出现，后面的指令先执行完毕
  - 有必要，经过实际工程验证，速度提高很多

- DCL 单例
- Double Check Lock
- loadfence原语指令
- storefence原语指令

```java
public class DCLSingle {

    private int a = 1;
    private static volatile DCLSingle instance;

    private DCLSingle() {
    }

    public static DCLSingle getInstance() {
        if (instance == null) {
            synchronized (DCLSingle.class) {
                if (instance == null) {
                    instance = new DCLSingle();
                }
            }
        }
        return instance;
    }
}
```

> Object o = new Object(); 编译后的字节码指令
```shell
0 new #2 <java/lang/Object>
3 dup
4 invokespecial #1 <java/lang/Object.<init>>
7 astore_1
8 return
```

- new对象这个过程，编译后字节码指令有三步 (instance = new DCLSingle())
  1. 给对象申请内存，此时a=0
  2. 给成员变量初始化，此时a=1 
  3. 内存地址赋值给instance
>如果有指令重排序（2、3对调），DCL第一次null判断会获取到没有初始化的对象(即a=0);  
所以有必要加volatile，禁止指令重排序

>jvm中规定了8种happen-before原则，其它指令都可以重排序  
>读屏障和写屏障是防止指令重排序用的


### synchronized优化

- 同步代码块中的语句越少越好
- 用对象加锁，加final防止对象被修改 final Object o = new Object();
- 不能用String常量、Integer、Long(池化)



## CAS(无锁优化 自旋 乐观锁)
 
>AtomicXXX开头的类都是以CAS操作保证线程安全的 
 
- Compare And Set/Swap
- CAS(V, Expected, NewValue)
> if(V==E) V = NEW otherwise try again or fail
- CPU原语支持 

### ABA问题

>在进行CAS操作时候，被另一个线程修改，并且又改回去了  
>0->1->0 对于当前CAS操作线程不变

- 如果基础类型 无所谓
- 如果引用类型  
  - 加version
  - A 1.0
  - B 2.0
  - A 3.0

 
## Unsafe(jdk1.8) = c c++的指针

- 直接操作内存
  - allocateMemory putXX freeMemory pageSize
- 直接生成类实例
  - allocateInstance
- 直接操作类或者实例变量
  - objectFieldOffset getInt getObject
- CAS相关操作
  - compareAndSwapObject Int Long
- c -> malloc free 
- c++ -> new delete


>可见性：CPU缓存一致性协议 MESI  
>禁止指令重排：JMM模型里有8个指令完成数据的读写，通过其中load和store指令相互组合成的4个内存屏障实现禁止指令重排序



## wait notify线程通信(面试高频)
