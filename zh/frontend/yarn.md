# Yarn

>参考：https://yarn.bootcss.com/docs/usage/

初始化一个新项目
```sh
yarn init
```

添加依赖包
```sh
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```


将依赖项添加到不同依赖项类别中
分别添加到 devDependencies、peerDependencies 和 optionalDependencies 类别中：
```sh
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```


升级依赖包
```sh
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```


移除依赖包
```sh
yarn remove [package]
```


安装项目的全部依赖
```sh
yarn
# 或
yarn install
```