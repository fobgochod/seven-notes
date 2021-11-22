# GitBook

## 安装
```sh
npm install -g gitbook-cli
```

## 常用命令
```sh
gitbook init //初始化目录文件
gitbook help //列出gitbook所有的命令
gitbook --help //输出gitbook-cli的帮助信息
gitbook build //生成静态网页
gitbook serve //生成静态网页并运行服务器
gitbook build --gitbook=2.0.1 //生成时指定gitbook的版本, 本地没有会先下载
gitbook ls //列出本地所有的gitbook版本
gitbook ls-remote //列出远程可用的gitbook版本
gitbook fetch 标签/版本号 //安装对应的gitbook版本
gitbook update //更新到gitbook的最新版本
gitbook uninstall 2.0.1 //卸载对应的gitbook版本
gitbook build --log=debug //指定log的级别
gitbook builid --debug //输出错误信息
```

## 入门

>目录结构如下
```
sample
├── _book
├── README.md
└── SUMMARY.md
```

1.初始化
- 创建工作文件夹 sample
- 执行初始化命令
```sh
gitbook init
```

2.运行
```sh
gitbook serve
gitbook serve --port 8080
```

3.编译
```sh
gitbook build
```


4.生成PDF文件
```sh
gitbook pdf ./ ./sample.pdf
```

