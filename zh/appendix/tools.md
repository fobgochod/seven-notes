# 乱七八糟

> C:\Windows\System32

```sh
%windir%\System32
%SystemRoot%\system32
```

### tcping

[https://www.elifulkerson.com/projects/tcping.php](https://www.elifulkerson.com/projects/tcping.php)

```sh
# help
tcping /?

tcping baidu.com 80
```

### nc

[https://eternallybored.org/misc/netcat](https://eternallybored.org/misc/netcat)

```sh
# help
nc -h
# server
nc -l -p 9090
# client
nc localhost 9090
```

### ngrok

[https://ngrok.com/download](https://ngrok.com/download)

```sh
# help
ngrok help

ngrok http 8080
```

### PuTTY

[https://www.chiark.greenend.org.uk](https://www.chiark.greenend.org.uk)


> 快捷登录

```sh
-load "192.168.9.27" -ssh -l root -pw root

192.168.9.27 -l root -pw root
```

> 文件传输

```sh
# 1.运行psftp.exe并连接远程服务器
open 192.168.9.27

# 2.进入linux中对应存放文件的文件夹位置，
cd /usr/local/src

# 3.进入本地相应的文件夹位置
lcd e:/111

# 4.上传recerver.go到服务器上
put recerver.go

# 5.下载recerver.go到自己的电脑上
get recerver.go
```

### TreeSize

[https://www.jam-software.com/treesize_free](https://www.jam-software.com/treesize_free)

### Chromium

[https://download-chromium.appspot.com](https://download-chromium.appspot.com)

> 手动下载Chromium文件，解压后放在本地

```sh
# 全局安装puppeteer
npm install -g puppeteer
# 下载下来的文件 chrome-win.zip
node_modules\puppeteer\.local-chromium\win64-686378(系统类型-版本号)\chrome-win(解压出的文件)
# 版本号来自
puppeteer\package.json->puppeteer.chromium_revision
```

