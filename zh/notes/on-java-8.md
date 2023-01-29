# On Java 8

::: warning 书籍简介
- 本书作者为 [美] Bruce Eckel，即《Java 编程思想》的作者。
- 本书是事实上的 《Java 编程思想》第五版。
- 《Java 编程思想》第四版基于 JAVA 5 版本；《On Java 8》 基于 JAVA 8 版本。
:::

## 类初始化和加载

::: tip 初始化和加载
Java中每个类的编译代码都存在于它自己独立的文件中。该文件只有在使用程序代码时才会被加载。
一般可以说“类的代码在首次使用时加载“。这通常是指创建类的第一个对象，或者是访问了类的 static 属性或方法。
构造器也是一个 static 方法尽管它的 static 关键字是隐式的。
因此，准确地说，**一个类当它任意一个 static 成员被访问时，就会被加载。**

首次使用时就是 static 初始化发生时。所有的 static 对象和 static 代码块在加载时按照文本的顺序（**在类中定义的顺序**）依次初始化。
static 变量只被初始化一次。

在类中变量定义的顺序决定了它们初始化的顺序。
即使变量定义散布在方法定义之间，它们仍会在任何方法（包括构造器）被调用之前得到初始化。
:::

>概括一下创建对象的过程，假设有个名为 Dog 的类：
1. 即使没有显式地使用 static 关键字，构造器实际上也是静态方法。所以，当首次创建 Dog 类型的对象或是首次访问 Dog 类的静态方法或属性时，Java 解释器必须在类路径中查找，以定位 Dog.class。
2. 当加载完 Dog.class 后（后面会学到，这将创建一个 Class 对象），有关静态初始化的所有动作都会执行。因此，静态初始化只会在首次加载 Class 对象时初始化一次。
3. 当用 new Dog() 创建对象时，首先会在堆上为 Dog 对象分配足够的存储空间。
4. 分配的存储空间首先会被清零，即会将 Dog 对象中的所有基本类型数据设置为默认值（数字会被置为 0，布尔型和字符型也相同），引用被置为 null。
5. 执行所有出现在字段定义处的初始化动作。
6. 执行构造器。你将会在"复用"这一章看到，这可能会牵涉到很多动作，尤其当涉及继承的时候。

```java
class Insect {

    static {
        System.out.println("Insect static block");
    }

    private static int x1 = printInit("static Insect.x1 initialized");
    static int x3 = 3;
    protected int x5 = printInit("Insect.x5 initialized");
    public int x7;

    Insect() {
        System.out.println("Insect constructor");
        System.out.println("Insect.x5 = " + x5);
        System.out.println("Insect.x7 = " + x7);
        this.x7 = 7;
    }

    static int printInit(String s) {
        System.out.println(s);
        return 47;
    }
}

/**
 * The full process of initialization
 * <p>
 * 1、父类静态代码块、静态变量按文本顺序初始化
 * 2、子类静态代码块、静态变量按文本顺序初始化
 * 3、父类实例变量初始化
 * 4、父类构造函数
 * 5、子类实例变量初始化
 * 6、子类构造函数
 *
 * @author zhouxiao
 * @date 2020/8/1
 */
public class Beetle extends Insect {

    public static void main(String[] args) {
        System.out.println("********** main method begin **********");
        Beetle b = new Beetle();
    }

    private static int x2 = printInit("static Beetle.x2 initialized");
    static int x4 = 6;
    protected int x6 = printInit("Beetle.x6 initialized");
    public int x8 = 8;

    public Beetle() {
        super();
        System.out.println("Beetle constructor");
        System.out.println("Beetle.x6 = " + x6);
        System.out.println("Beetle.x8 = " + x8);
        System.out.println("Insect.x7 = " + x7);
    }

    static {
        System.out.println("Beetle static block");
    }
}
```

#### 输出：

```
Insect static block
static Insect.x1 initialized
static Beetle.x2 initialized
Beetle static block
********** main method begin **********
Insect.x5 initialized
Insect constructor
Insect.x5 = 47
Insect.x7 = 0
Beetle.x6 initialized
Beetle constructor
Beetle.x6 = 47
Beetle.x8 = 8
Insect.x7 = 7
```