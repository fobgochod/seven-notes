# 网络基础

开放式系统互联通信参考模型（英语：Open System Interconnection Reference Model，缩写为 OSI），简称为OSI模型（OSI model），
一种概念模型，由国际标准化组织提出，一个试图使各种计算机在世界范围内互连为网络的标准框架。定义于ISO/IEC 7498-1。

国际标准化组织（International Organization for Standardization，简称为ISO）是标准化领域中的一个国际性非政府组织。
ISO一来源于希腊语“ISOS”，即“EQUAL”——平等之意。ISO成立于1947年，是全球最大最权威的国际标准化组织，全体大会是ISO最高权力机构，理事会是ISO重要决策机构，中国是ISO常任理事国

分层解耦

TCP/IP（Transmission Control Protocol/Internet Protocol，传输控制协议/网际协议）是指能够在多个不同网络间实现信息传输的协议簇。 TCP/IP协议不仅仅指的是TCP
和IP两个协议，而是指一个由FTP、SMTP、TCP、UDP、IP等协议构成的协议簇， 只是因为在TCP/IP协议中TCP协议和IP协议最具代表性，所以被称为TCP/IP协议。

- 应用层：HTTP SSH SMTP
- 传输控制层：TCP UDP 三次握手->数据传输->四次挥手 成为一个最小粒度 不可分割
- 网络层：
- 链路层：
- 物理层：

```shell
cd /proc/$$/fd
# 和百度建立socket，开启一个8号文件描述符，打开一个TCP连接
exec 8<> /dev/tcp/www.baidu.com/80
# 向百度发起request请求，将请求头发出去
echo -e 'GET / HTTP/1.0\n' >& 8
# 用cat读取8号文件描述符读回的百度主页，百度response响应信息
cat 0<& 8

# 关闭文件描述符
exec 8<& -
```

```shell
# n是IP地址 a是所有 t是tcp p是pid
netstat -natp

# 基础
cat /etc/sysconfig/network-scripts/ifcfg-eth0
# 网络层路由表 IP DNS解析域名和IP地址的映射 DNS全网
route -n
# 链路层 ARP会解释IP地址和网卡硬件地址的映射 ARP同一局域网
arp -a
```

```shell
ifconfig eth0:3 192.168.88.88/24
route add -host 192.168.88.88 gw 192.168.150.13
```

LVS(Linux Virtual Server)即Linux虚拟服务器 模型

- NAT(Network Address Translation，网络地址转换)
- DR(Direct Routing，直接路由)
- TUN(隧道)
