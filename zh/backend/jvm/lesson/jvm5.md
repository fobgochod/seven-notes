# Java运行时数据区和常用指令

JVM Runtime Data Area and JVM Instructions

```shell
<clinit> 静态语句块

<init> 构造方法

_sotre

_load

invoke_XXX
```

1. InvokeStatic 调用静态方法
2. InvokeVirtual 自带多态 调用实例方法
3. InvokeInterface
4. InovkeSpecial 可以直接定位，不需要多态的方法 private 方法 ， 构造方法
5. InvokeDynamic JVM最难的指令 lambda表达式或者反射或者其他动态语言scala kotlin，或者CGLib ASM，动态产生的class，会用到的指令

