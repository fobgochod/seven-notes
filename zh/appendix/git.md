# Git

## 参考

- [Reference](https://git-scm.com/docs)
- [一分钟玩转 Git](https://mp.weixin.qq.com/s/glnO8ZDITSfjRcBn9Ss2EQ)

### config

```shell
git --version

git config --global user.name "fobgochod"
git config --global user.email "fobgochod@gmail.com"

git config --global core.autocrlf false
git config --global core.safecrlf true

# 查看所有
git config --list
# 查看user.name
git config user.name
```

### AutoCRLF与SafeCRLF换行符问题

```shell
# 1、AutoCRLF
# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true
# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input
# 提交检出均不转换
git config --global core.autocrlf false

# 2、SafeCRLF
# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true
# 允许提交包含混合换行符的文件
git config --global core.safecrlf false
# 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn
```

## 使用

### Basic Git commands

```shell
git init

git clone git@github.com:fobgochod/fobgochod.github.io.git


git status
git add add.txt
git restore --staged add.txt

git add .
git commit -m "message"

git blame add.txt

git push origin matser

git branch


```

### Git 基本操作

![add&commit](/images/git/git-1.png)

```shell
git add 文件名/文件夹/多个也可
git add .
git commit -m "comment"
git commit --amend

# 发现有不该提交的文件已经提交后，仅仅在.gitignore中加入忽略是不行的
git rm -r --cached 文件/文件夹名字

# 取消add
git reset HEAD .
git reset HEAD <filename>
```

![pull&fetch](/images/git/git-2.png)

```shell
git pull origin master
git merge

git push origin master

```

### Git 分支管理

```shell
# 查看当前所有分支
git branch
# 创建分支
git branch <分支名字>
# 切换到分支
git checkout <分支名字>
# 删除分支,有可能会删除失败，因为Git会保护没有被合并的分支
git branch -d <分支名字>
# 强行删除，丢弃没被合并的分支
git branch -D <分支名字>
```
