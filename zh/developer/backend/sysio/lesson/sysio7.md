# 全手写急速理解Netty模型及IO模型应用实战

## 网络

```sh

# 网卡信息
cat /etc/sysconfig/network-scripts/ifcfg-eth0
# 路由表
route -b

# ping 使用的是ICMP协议
# DNS 域名到IP地址的映射 全网
ping www.baidu.com

# IP地址和网卡硬件地址(MAC)的映射
# arp 是局域网内
arp -a


# 结论：TCP/IP协议基于下一跳机制，IP是端点间MAC地址是节点间的

route add -host 192.168.8.8 gw 192.168.8.1

# LVS(4层) 流量 数据包
# nginx(7层) 握手 5万
```

### LVS高可用

问题：
LVS会挂，业务下线，单点故障
RS(real server)会挂，一部分用户请求异常，LVS还存有这个RS的负载记录
解决问题：
单点故障的解决方式：它是一个，一个有问题，那么我们就用一堆：一变多~！
2个思路：多点：a)主备 b)主主
结论：先讨论主备
方向性：
效率性：

主备，主（单点->主备）从

```sh
# node01~node04
yum install keepalived ipvsadm -y

cd /etc/keepalived/
```
