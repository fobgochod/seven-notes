# Install Windows

## 文档

- [https://www.runoob.com/redis/redis-install.html](https://www.runoob.com/redis/redis-install.html)
- [https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)

## 测试

### 启动服务端

```sh
redis-server.exe redis.windows.conf
```

### 启动客户端

```sh
# 另起一个cmd窗口
redis-cli.exe -h 127.0.0.1 -p 6379
# 设置键值对
set myKey abc
# 取出键值对
get myKey
# 退出
quit
```
