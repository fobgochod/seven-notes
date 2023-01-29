# Windows

## 常用

### bat

```sh
# 退回上一级目录
cd.. 
# 退回到根目录
cd\   

# md 目录名 建立指定文件夹
md d:\file

# rd 目录名 删除指定文件夹
rd d:\file

# 清屏
cls 

# 复制
copy 路径\文件名 路径\文件名 

# 剪切
move 路径\文件名 路径\文件名

# 删除D:\file目录下文件1.txt
del d:\file\1.txt /p
del d:\file\1.txt 

# 删除当前文件夹下所有文件
del *.* 

# 删除D盘file文件夹下所有文件
del d:\file\
del d:\file\*
del d:\file\*.*


# 删除一个文件（不能删除文件夹）
del 文件名 

# 重命名
ren 旧文件名 新文件名

# 注释
rem 注释内容
:: 注释内容

# 暂停
pause

# 日期
date
time

# 查看命令帮助
help
help cd
cd /?

# 退出dos窗口
exit
```

### cmd

```sh
# 版本信息
ver
winver

# 查看系统信息
systeminfo

# 调出任务管理器
taskmgr

# 修改dos窗口标题
title 我是标题

# 颜色属性由两个十六进制数字指定：第一个为背景，第二个则为前景。
# 每个数字可以为以下任何值之一:
    0 = 黑色       8 = 灰色
    1 = 蓝色       9 = 淡蓝色
    2 = 绿色       A = 淡绿色
    3 = 浅绿色     B = 淡浅绿色
    4 = 红色       C = 淡红色
    5 = 紫色       D = 淡紫色
    6 = 黄色       E = 淡黄色
    7 = 白色       F = 亮白色

# 背景红色
color 4
# 在亮白色上产生亮红色
color fc 
# 恢复默认
color 

# 改变窗口大小
mode con cols=80 lines=25


ping
net
telnet
ftp
netstat
nbtstat
tracert
ipconfig
```

### 命令

```sh
# 查看端口
netstat -ano
netstat -ano | findstr 8080

# 查看进程
tasklist | findstr java

# 结束进程
taskkill /f /t /im java.exe
```

### 快捷键

```sh
# 讲述人
Windows+Enter 
# 我的电脑
Windows+E
# 运行
Windows+R
# 远程桌面连接
mstsc
# 服务
services.msc
# 注册表编辑器
regedit
# 打开系统属性
sysdm.cpl
# 查看win10系统版本信息
dxdiag
# 记事本
notepad
```

## 路径

```sh
# 任务栏图片
%APPDATA%\Microsoft\Internet Explorer\Quick Launch\User Pinned\TaskBar
# 开始菜单：
%APPDATA%\Microsoft\Windows\Start Menu\Programs
# hosts
%windir%\System32\drivers\etc
```

## 压测

```sh
# 界面修改、重启生效
regedit>计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
添加 DWORD(32位)值(D)
TcpTimedWaitDelay 小于30(s)

# 命令行修改注册表的值
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v MaxFreeTcbs /d "65534" /t REG_DWORD
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v MaxHashTableSize /d "65534" /t REG_DWORD
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v MaxUserPort /d "65534" /t REG_DWORD
REG ADD "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" /v TcpNumConnections /d "65534" /t REG_DWORD

# 查看动态端口范围
netsh interface ipv4 show dynamicportrange protocol=tcp
netsh int ipv4 show dynamicportrange tcp

# 设置动态端口
netsh int ipv4 set dynamicport tcp start=1024 num=64512

# 查看TCP连接状态的数量
netstat -an|find "ESTABLISHED" /c
netstat -an|find "TIME_WAIT" /c
```
