# 常识

`@formatter:off`

::: tip 0x7C00
为什么主引导记录的内存地址是0x7C00？

- [http://www.ruanyifeng.com/blog/2015/09/0x7c00.html](http://www.ruanyifeng.com/blog/2015/09/0x7c00.html)
- [https://www.glamenv-septzen.net/en/view/6](https://www.glamenv-septzen.net/en/view/6)
:::

::: tip MSL
参考：[https://www.cnblogs.com/ytys/p/9993535.html](https://www.cnblogs.com/ytys/p/9993535.html)

**MSL是Maximum Segment Lifetime英文的缩写**，中文可以译为“报文最大生存时间”  
RFC 793中规定MSL为2分钟，实际应用中常用的是30秒，1分钟和2分钟等。


2MSL即两倍的MSL，TCP的TIME_WAIT状态也称为2MSL等待状态，当TCP的一端发起主动关闭，在发出最后一个ACK包后，即第3次握手完成后发送了第四次握手的ACK包后就进入了TIME_WAIT状态，必须在此状态上停留两倍的MSL时间，等待2MSL时间主要目的是怕最后一个ACK包对方没收到，那么对方在超时后将重发第三次握手的FIN包，主动关闭端接到重发的FIN包后可以再发一个ACK应答包。在TIME_WAIT状态时两端的端口不能使用，要等到2MSL时间结束才可继续使用。当连接处于2MSL等待阶段时任何迟到的报文段都将被丢弃。不过在实际应用中可以通过设置SO_REUSEADDR选项达到不必等待2MSL时间结束再使用此端口。
:::

::: tip 并行和并发的区别
- **并发**：同一时刻只能有一个指令执行，但多个指令被CPU轮换执行，因为时间间隔很短，会造成同时执行的错觉。
- **并行**：同一时刻多条指令在多个处理器同时执行，不管是微观，还是宏观上，都是同时执行的。
- 举个例子，并发就是一个家庭主妇既要烧饭，也要带娃，也要打扫房间，如果每个事情只做一分钟，然后轮换，从宏观上来说，会造成同时执行的错觉。并行就是该家庭主妇请了两个保姆，一个专职负责烧饭，一个专职负责带娃，自己专职负责打扫卫生，不管从宏观还是微观上来看，他们都是同时执行的。
- 某位大佬曾经说两者的区别，**并发是同一时间应对多件事情的能力，并行是同一时间去做多件事情的能力**。
:::

::: tip 带宽5Mbps、100Mbps的网速
- Mbps=Mbit/s即兆比特每秒（Million bits per second的缩写）
- MB/s是Mbps的8倍
- 5Mbps=5*1024Kbps/8=640KB/s
- 100Mbps=100*1024Kbps/8=12.5MB/s
:::


:::tip ASCII，Unicode 和 UTF-8
- [Unicode对照表](https://www.unicode.org/Public)
- [Unicode查询对应字符](https://www.unicode.org/charts)
- [ASCII，Unicode 和 UTF-8](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
- [Unicode与JavaScript详解](https://www.ruanyifeng.com/blog/2014/12/unicode.html)
:::

:::tip 原码、反码、补码 
- 正数：原码=反码=补码
- 负数：
  - 反码：原码除符号位外，按位取反
  - 补码：反码+1（负数的补码等于他的原码自低位向高位，尾数的第一个‘1’及其右边的‘0’保持不变，左边的各位按位取反，符号位不变。）

![001](/images/other/computer-1.png)
 :::
