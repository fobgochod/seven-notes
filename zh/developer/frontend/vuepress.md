# VuePress

- 参考：
  - [https://segmentfault.com/a/1190000015237352?utm_source=tag-newest#articleHeader11](https://segmentfault.com/a/1190000015237352?utm_source=tag-newest#articleHeader11)
  - [https://www.jianshu.com/p/7a2cc8a7f40c](https://www.jianshu.com/p/7a2cc8a7f40c)
- 插件：[https://vuepress.github.io/zh](https://vuepress.github.io/zh)
- 支持语言：[https://prismjs.com/#languages-list](https://prismjs.com/#languages-list)

## 安装
```sh
# 安装
npm install -g vuepress
# 卸载
npm uninstall -g vuepress
```

## 插件
```sh
# 代码复制按钮插件
npm install -g vuepress-plugin-nuggets-style-copy
# 回到顶部插件
npm install -g @vuepress/plugin-back-to-top
npm install -g vuepress-plugin-go-top
```

## FAQ
>npm install -D vuepress-plugin-export  
报错：ERROR: Failed to download Chromium r686378! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.

是因为在执行安装的过程中需要执行install.js，这里会下载Chromium,官网建议是进行跳过。
通过设置环境变量set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 阻止下载 Chromium


## 入门

>目录结构如下
```
sample
├── docs
│   ├── .vuepress
│   └── README.md
└── package.json
```

1.初始化
- 创建工作文件夹 sample
- 执行初始化命令
```sh
sample>npm init -y
```

2.配置
- 新建文件夹/docs
- 创建/docs/README.md文件
- 修改/package.json，添加下述兩行
```json {8,9}
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

3.运行
```sh
docs>npm run docs:dev
```

4.编译
```sh
docs>npm run docs:build
```



