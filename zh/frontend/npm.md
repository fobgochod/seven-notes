# NPM

>下载：[https://nodejs.org/en/download/releases](https://nodejs.org/en/download/releases)  
仓库：[https://www.npmjs.com](https://www.npmjs.com)

## 安装

>版本 node-v10.16.3-x64.msi
npm 是 Node.js 的包管理工具，用来安装各种 Node.js 的扩展
```s
node -v
npm -v
```

1.临时使用
```sh
npm --registry https://registry.npm.taobao.org install express
```

2.持久使用
```sh
npm config set registry https://registry.npm.taobao.org
```

3.验证是否成功 
```sh
npm config get registry
```

4.通过cnpm使用
```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```


## 配置

>参考：[https://www.cnblogs.com/liaojie970/p/9296177.html](https://www.cnblogs.com/liaojie970/p/9296177.html)

1.配置npm的全局模块的存放路径以及cache的路径
```sh
npm config set prefix "D:\install\nodejs\node_global"
npm config set cache "D:\install\nodejs\node_cache"
```

2.系统环境变量添加系统变量path
```sh
D:\install\nodejs\node_global
```

3.安装express
>注：“-g”这个参数意思是装到global目录下，也就是上面说设置的"D:\install\nodejs\node_global"
```sh
npm install -g express
# express 4.x版本中将命令工具分出来,安装一个命令工具,执行命令:
npm install -g express-generator
```

4.验证
```sh
express --version
npm info express
```

## npm安装时-S -D作用及区别

>参考：[https://www.cnblogs.com/web-record/p/10904907.html](https://www.cnblogs.com/web-record/p/10904907.html)

### 安装
```sh
# 安装
npm install -D vuepress
# 代码复制按钮插件
npm install -D vuepress-plugin-nuggets-style-copy
# 回到顶部插件
npm install -D @vuepress/plugin-back-to-top
npm install -D vuepress-plugin-go-top
```

### markdown插件
```sh
npm install -D markdown-it-task-lists

npm install -D vuepress-plugin-comment
npm install -D @vuepress/plugin-google-analytics
```


### 卸载
```sh
# 删除模块，但不删除模块留在package.json中的对应信息
npm uninstall module_name
# 删除模块，同时删除模块留在package.json中dependencies下的对应信息
npm uninstall module_name --save
# 删除模块，同时删除模块留在package.json中devDependencies下的对应信息
npm uninstall module_name --save-dev
```

### -S、-D、-g

#### -S
- --save-prod
- 包名会被注册在package.json的dependencies
- 在生产环境下这个包的依赖依然存在
- npm install -s module_name
- npm install --save-prod module_name

#### -D
- --save-dev
- 包名会被注册在package.json的devDependencies
- 里面的插件只用于开发环境，不用于生产环境
- npm install -d module_name
- npm install --save-dev module_name

#### -g
- npm install -g module_name
- 全局安装

#### 不写
- npm install module_name
- 本地安装，将安装包放在`./node_modules`下
- 包名不会进入package.json里面