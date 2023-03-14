# 学习笔记

## 高并发负载均衡

### 网络协议原理 视频24

OSI 七层
TCP/IP 协议

分层解耦

应用层：HTTP、SSH、SMTP
传输控制层：TCP、UDP
网络层：IP、ICMP(ping)、ARP
链路层：





### LVS的DR,TUN,NAT模型推导 视频25


nignx 官方 5万数据包

lvs 流量
nginx 握手
tomcat

NAT 网络地址转换(3层) Network Address Translation

DR 直接路由模式(2层) Director Routing

TUN IP隧道模式 tunneling

### LVS的DR模型试验搭建 视频26

1块网卡可以配置多个IP地址

### 基于keepalived的LVS高可用搭建28
