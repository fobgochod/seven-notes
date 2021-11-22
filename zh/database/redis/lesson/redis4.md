# redis的消息订阅、pipeline、事务、modules、布隆过滤器、缓存LRU

## Pipelining

```sh
echo -e "aaa\nbbb"
echo -e "set k1 99\n incr k1\n get k2" | nc localhost 6379
```
