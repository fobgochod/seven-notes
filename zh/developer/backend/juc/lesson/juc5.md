# 强软弱虚四种引用以及ThreadLocal的原理与源码

## AQS源码

- VarHandle
  - 普通属性也能进行原子操作
  - 比反射快，直接操纵二进制码


## ThreadLocal

- 声明式事物，保证同一个Connection

## 强软弱虚

- 强 
  - 普通引用 Object obj = new Object()
- 软 SoftReference
  - 大对象的缓存
  - 常用对象的缓存
  - 内存不够才回收
- 弱 WeakReference
  - 遇到gc就回收 一般用在容器中
  - 应用 ThreadLocal、WeakHashMap
- 虚 PhantomReference
  - 管理堆外内存 

Memory Leak - 内存泄漏
OOM((Out Of Memory)-内存溢出