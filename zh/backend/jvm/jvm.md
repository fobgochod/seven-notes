# JVM

- [Java Language and Virtual Machine Specifications](https://docs.oracle.com/javase/specs/index.html)
- [JDK8启动参数-Windows](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html)
- [JDK8启动参数-UNIX](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html)
- [JDK17启动参数](https://docs.oracle.com/en/java/javase/17/docs/specs/man/java.html)

### JVM配置参数分类

##### Standard Options(-)

> These are the most commonly used options that are supported by all implementations of the JVM.

##### Non-Standard Options(-X)

> These options are general purpose options that are specific to the Java HotSpot Virtual Machine.

##### Advanced Runtime Options(-XX)

> These options control the runtime behavior of the Java HotSpot VM.

### 查看参数

```shell
# 是打印所有的默认参数设置
-XX:+PrintFlagsInitial
# 是打印最终值，如果某个默认值被新值覆盖，显示新值
-XX:+PrintFlagsFinal
# 是打印那些被新值覆盖的项
-XX:+PrintCommandLineFlags

java -XX:+PrintFlagsInitial
java -XX:+PrintFlagsFinal -version | grep ":"
java -XX:+PrintCommandLineFlags -version
```

格式如下： Type | Name | Operator | Value | Application

- product – 官方支持, JVM内部选项
- rw – 可动态写入的.
- C1 – Client JIT 编译器
- C2 – Server JIT 编译器
- pd – platform Dependent 平台独立
- lp64 – 仅 64 位JVM
- manageable – 外部定义的并且是可动态写入的.
- diagnostic – 用于虚拟机debug的
- experimental – 非官方支持的

### 内存区域

![](/images/jvm/jvm-1.png)

- 控制参数详解
    - -Xms设置堆的最小空间大小。
    - -Xmx设置堆的最大空间大小。
    - -Xmn堆中新生代初始及最大大小（NewSize和MaxNewSize为其细化）。
    - -XX:NewSize设置新生代最小空间大小。
    - -XX:MaxNewSize设置新生代最大空间大小。
    - -XX:PermSize设置永久代最小空间大小。
    - -XX:MaxPermSize设置永久代最大空间大小。
    - -Xss设置每个线程的堆栈大小。

-XX:NewRatio=2

- 默认 -XX:NewRatio=2 新生代占1,老年代占2,年轻代占整个堆的1/3
- 假如 -XX:NewRatio=4 新生代占1,老年代占4,年轻代占整个堆的1/5

-XX:SurvivorRatio=8

- 默认 -XX:SurvivorRatio=8 Eden:S0:S1=8:1:1
- 假如 -XX:SurvivorRatio=4 Eden:S0:S1=4:1:1

-XX:-UseAdaptiveSizePolicy

- 开启：-XX:+UseAdaptiveSizePolicy
- 关闭：-XX:-UseAdaptiveSizePolicy

> 说明：-XX:NewRatio=默认值是2、-Xmn优先级高于-XX:NewRatio

```shell
java -Xms30M -Xmx30m -XX:+PrintFlagsFinal -version | grep -E '(Old|New)Size'
java -Xms30M -Xmx30m -XX:NewRatio=2 -XX:+PrintFlagsFinal -version | grep -E '(Old|New)Size'
java -Xms30M -Xmx30m -XX:NewRatio=2 -Xmn20M -XX:+PrintFlagsFinal -version | grep -E '(Old|New)Size'
```

```shell
-verbose:gc  
-XX:+PrintGCDetails  
-XX:+PrintGCDateStamps  
-Xloggc:E:\gc\gc.log
```

### JVM问题排查

> 查看进程ID

```shell
[root@fobgochod ~]# jps -l
1413 sun.tools.jps.Jps
```

```shell
# 堆内存分布
jmap -heap 1413
# GC信息
jstat -gcutil 1413 1000 5

# 导出堆信息
jmap -dump:format=b,file=heap_dump.hprof 1413
# 导出线程栈
jstack 1413 > jstack.txt
```

```shell
# 查看进程1413中最耗cpu的子线程
top -p 1413 -H

# 将最耗cpu的线程ID转换为16进制输出
[root@fobgochod ~]# printf "%x \n" 1413
585 

# 查询具体出现问题的代码位置
jstack 23219 | grep 585 -A 30
```

```shell
# 查看java线程数
ps -eLf | grep java | wc -l
# 监控网络客户连接数
netstat -n | grep tcp | grep 8080 | wc -l
# 查一下tcp连接情况
netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'
```
