# Markdown基本语法

你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。

## 标题

#### 输入

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

#### 输出

输入1次<kbd>#</kbd>，并按下<kbd>space</kbd>后，将生成1级标题。  
输入2次<kbd>##</kbd>，并按下<kbd>space</kbd>后，将生成2级标题。  
以此类推，我们支持6级标题。有助于使用`TOC`语法后生成一个完美的目录。

## 文本样式

#### 输入

```
`斜体:` *强调文本* _强调文本_
`加粗:` **加粗文本** __加粗文本__
`加粗+斜体:` ***加粗文本*** ___加粗文本___
`删除线:` ~~删除文本~~
> 引用文本
>> 引用文本
>>> 引用文本
`分割线:` 三个或者三个以上的 - 或者 * 都可以，例如：
---
----
***
****
`下标:` H<sub>2</sub>O
`上标:` 2<sup>10</sup>
`键盘文本:` <kbd>Ctrl+Shift</kbd>
```

#### 输出

`斜体:` *强调文本* _强调文本_

`加粗:` **加粗文本** __加粗文本__

`加粗+斜体:` ***加粗文本*** ___加粗文本___

`删除线:` ~~删除文本~~
 
> 引用文本
>> 引用文本
>>> 引用文本

`分割线:` 三个或者三个以上的 - 或者 * 都可以，例如：

---
----
***
****

`下标:` H<sub>2</sub>O

`上标:` 2<sup>10</sup>

`键盘文本:` <kbd>Ctrl+Shift</kbd>

## 链接与图片

#### 输入

```
链接: [GitHub](https://github.com/).

图片: ![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw)

图片: ![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw "猴子")
```

#### 输出

链接: [GitHub](https://github.com/).

图片: ![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw)

图片: ![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9hdmF0YXIuY3Nkbi5uZXQvNy83L0IvMV9yYWxmX2h4MTYzY29tLmpwZw "猴子")

## 代码片

#### 输入

```
    ```java {3}
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }
    ```
```

#### 输出

```java {3}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
``` 

## 列表

### 无序列表

>只需要在文字前面加上- 、*、+就可以了，它们效果是一样的，例如：

#### 输入

```
- 项目1
  - 项目11
* 项目2
  + 项目21
* 项目3
* 项目4
```

#### 输出

- 项目1
  - 项目11
* 项目2
  + 项目21
* 项目3
* 项目4

### 有序列表

>只需在数字后面加上英文句点即可，这里面的数字不影响排序，例如：

#### 输入

```
1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务
```

#### 输出

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务

## 表格

一个简单的表格是这么创建的：
项目     | Value
-------- | -----
电脑  | $1600
手机  | $12
导管  | $1

***设定内容居中、居左、居右***

使用`:---------:`居中
使用`:----------`居左
使用`----------:`居右
| 第一列       | 第二列         | 第三列        |
|:-----------:| -------------:|:-------------|
| 第一列文本居中 | 第二列文本居右  | 第三列文本居左 | 


## Markdown 拓展(Vue)

### 链接

[Home](/) <!-- 跳转到根部的 README.md --> 
::: tip 说明
`[跳转](/)`  
跳转到根的 index.html
:::
 
[SUMMARY](/summary) 
::: tip 说明
`[跳转](/summary)`  
跳转到 /summary 文件夹的 index.html
:::

[appendix markdown](/zh/appendix/markdown) 
::: tip 说明
`[跳转](/appendix/markdown)`  
跳转到 /zh/appendix 文件夹的 markdown.html
:::

[appendix markdown](/zh/appendix/markdown.md) 
::: tip 说明
`[跳转](/zh/appendix/markdown.md)`  
跳转到 /zh/appendix 文件夹的 markdown.html 
具体文件可以使用 .md 结尾（推荐）
:::
  
[appendix markdown](/zh/appendix/markdown.html) 
::: tip 说明
`[跳转](/zh/appendix/markdown.html)`  
跳转到 /zh/appendix 文件夹的 markdown.html
:::

### 表格

#### 输入

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

#### 输出

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Emoji

:tada: :100:

你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji。

### 目录

#### 输入

```
[[toc]]
```

#### 输出

[[toc]]

### 自定义容器

#### 输入

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

你也可以自定义块中的标题：
::: danger STOP
Danger zone, do not proceed
:::
```

#### 输出

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

你也可以自定义块中的标题：
::: danger STOP
Danger zone, do not proceed
:::

### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>

- Props:
  - `text` - string
  - `type` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`
  - `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`

#### 输入

```
三千世界<Badge text="三"/>
三千世界<Badge text="千" type="warn"/>
三千世界<Badge text="世" type="error"/> 
三千世界<Badge text="界" type="tip" vertical="middle"/>
```

#### 输出

三千世界<Badge text="三"/>  
三千世界<Badge text="千" type="warn"/>  
三千世界<Badge text="世" type="error"/>   
三千世界<Badge text="界" type="tip" vertical="middle"/>

### 代码

VuePress 使用了 Prism 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

在 Prism 的网站上查看[合法的语言列表](https://prismjs.com/#languages-list)。

#### 输入

```
    ```java {3}
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }
    ```
```

#### 输出

```java {3}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```


### 行号

你可以通过配置来为每个代码块显示行号：
```javascript 
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```