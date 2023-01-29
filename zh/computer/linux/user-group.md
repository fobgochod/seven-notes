# 用户和组

## 用户

```
# 查看用户
cat /etc/passwd
cat /etc/gshadow
```

```sh
# 查看当前用户
whoami
who am i
```

```sh
groupadd test-group

# 添加用户到组test-group
useradd -g test-group test-user && cat /etc/passwd | grep test-user && userdel -r test-user
useradd -g test-group -u 1111 test-user && cat /etc/passwd | grep test-user && userdel -r test-user

# 修改用户
useradd -g test-group test-user
usermod -l test-user-new test-user && cat /etc/passwd | grep test-user && && userdel -r test-user-new

# 删除用户
# 删除用户zhou，但不删除其家目录及文件；
userdel test-user
# 删除用户zhou，及其目录及文件一并删除；
userdel -r test-user
```

## 组

```sh
# 查看组
cat /etc/group
cat /etc/shadow
```

```sh
groupadd test-group
groupdel test-group

# -g：指定新建工作组的id；
groupadd -g 1111 test-group
cat /etc/group | grep test-group
groupdel test-group


# 添加测试组
groupadd test-group && cat /etc/group | grep test-group
# 修改组id
groupmod -g 1111 test-group && cat /etc/group | grep test-group
# 修改组名称
groupmod -n test-group-new test-group && cat /etc/group | grep test-group
# 删除新测试组
groupdel test-group-new

# 查看
groups
# 查看用户nobody所在组
groups nobody
```

## 权限

![002](/images/linux/linux-1.jpg)

```sh
# 修改文件权限 用户 组
vi test
chmod +x test
chmod 755 test
chown nobody test 
chgrp nobody test 
rm -f test
```

![003](/images/linux/linux-2.png)
