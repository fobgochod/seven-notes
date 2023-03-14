# LVS

> [How virtual server works?](http://www.linuxvirtualserver.org/how.html)

## 应用层协议演示

### 1.基础常识

```sh
# 0-标准输入 1-标准输出 2-错误输出
# < 输入重定向
# > 输出重定向
# 文件描述符需在>后加上&

exec 8<> /opt/test.txt
echo '111' >& 8
```

### 2.通过Socket请求百度首页

```sh
cd /proc/$$/fd
# 1.建立连接，fd8的输入输出都指向socket
exec 8<> /dev/tcp/www.baidu.com/80
# 2.传送数据（HTTP协议：规范标准，规定Request的最小写法 'GET / HTTP/1.0\n'）
echo -e 'GET / HTTP/1.0\n' >& 8
# 3.响应结果，cat输入重新定向到fd8
cat 0<& 8
# 4.关闭fd8
exec 8<& -
```

## LVS DR模型搭建

### 1.准备服务器

```sh
# node01(Virtual Server)
# DIP
eth0 192.168.150.11
# VIP
eth0:2 192.168.150.100

# node02(Real Server 02)
# RIP
eth0 192.168.150.12
# VIP
lo:2 192.168.150.100

# node03(Real Server 03)
# RIP
eth0 192.168.150.13
# VIP
lo:2 192.168.150.100
```

### 2.Virtual Server网络配置(node01)

```sh
# 负载均衡：node01
ifconfig eth0:2 192.168.150.100/24
# 或者
ifconfig eth0:2 192.168.150.100 netmask 255.255.255.0
# 删除
ifconfig eth0:2 down
```

### 3.Real Server网络配置(node02~node03)

```sh
# 1.修改内核arp协议
cd /proc/sys/net/ipv4/conf/
## eth0
echo 1 > /proc/sys/net/ipv4/conf/eth0/arp_ignore
echo 2 > /proc/sys/net/ipv4/conf/eth0/arp_announce
## all
echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore
echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce
# 2.设置隐藏的VIP
ifconfig lo:2 192.168.150.100 netmask 255.255.255.255
```

### 4.Real Server服务安装(node02~node03)

```sh
# 3.安装80服务
yum install httpd -y
# 启动
service httpd satrt
vi /var/www/html/index.html # from 192.168.150.1x
```

### 5.负载均很配置(node01)

| long          | short |                                                           |
|---------------|-------|-----------------------------------------------------------|
| --add-service | -A    | 添加一条新的虚拟服务                                                |
| --tcp-service | -t    | TCP协议的虚拟服务 host[:port]                                    |
| --udp-service | -u    | UDP协议的虚拟服务 host[:port]                                    |
| --scheduler   | -s    | 配置负载均衡算法，rr, wrr, lc, wlc, lblc, lblcr, dh, sh, sed, nq之一 |
| --list        | -L -l | 显示内核中的虚拟服务规则                                              |
| --add-server  | -a    | 添加一个新的真实服务器                                               |
| --real-server | -r    | 真实服务器地址 host (and port)                                   |
| --gatewaying  | -g    | 负载均衡模式 NAT、DR (default)、TUN                               |
| --weight      | -w    | 配置真实服务器的权重                                                |

```sh
# ipvs内核模块
yum install ipvsadm -y

ipvsadm -A -t 192.168.150.100:80 -s rr
ipvsadm -ln

ipvsadm -a -t 192.168.150.100:80 -r 192.168.159.12 -g -w 1
ipvsadm -a -t 192.168.150.100:80 -r 192.168.159.13 -g -w 1
ipvsadm -ln
```

### 6.验证

```sh
# 浏览器访问192.168.150.100 看到负载
http://192.168.150.100

# node01 看不到socket连接
# node02、node03 有很多socket连接
netstat -natp

# node01
# FIN_WAIT：连接过，偷窥了所有的包
# SYN_RECV：基本上lvs都记录了，证明lvs没问题，一定是后边的网络层出问题
ipvsadm -lnc
```

## LVS负载均衡 keepalived

### 删除node01手工配置

```sh
# 删除lvs负载均衡配置
ipvsadm -C
# 删除VIP
ifconfig eth0:8 down
```

### node01、node04安装

```sh
yum install keepalived ipvsadm -y
# 配置：
cd  /etc/keepalived
cp keepalived.conf keepalived.conf.bak
vi keepalived.conf
# node01
# vrrp：虚拟路由冗余协议！

vrrp_instance VI_1 {
    state MASTER    # node04 BACKUP
    interface eth0
    virtual_router_id 51
    priority 100    # node04 50
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.150.100/24 dev eth0 label eth0:2 # 类似于手动配置 ifconfig eth0:2 192.168.150.100/24
    }
}
virtual_server 192.168.150.100 80 {
    delay_loop 6
    lb_algo rr
    lb_kind DR
    nat_mask 255.255.255.0
    persistence_timeout 0
    protocol TCP

    real_server 192.168.150.12 80 {
        weight 1
        HTTP_GET {
            url {
              path /
              status_code 200
            }
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
        }
    }
    real_server 192.168.150.13 80 {
        weight 1
        HTTP_GET {
            url {
              path /
              status_code 200
            }
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
        }
    }
}

# 拷贝到node04，修改对应信息
scp ./keepalived.conf root@node04:`pwd`
```

### 启动node01、node04的keepalived

```sh
service keepalived start

ifconfig
ipvsadm -ln
```
