# Commands

> [docker commandline](https://docs.docker.com/engine/reference/commandline/docker)

```sh
docker version
docker info
```

## images

- [build](https://docs.docker.com/engine/reference/commandline/build)
- [images](https://docs.docker.com/engine/reference/commandline/images)
- [rmi](https://docs.docker.com/engine/reference/commandline/rmi)

```sh
# 构建镜像
docker build -t nginx:v1 .
docker build -f Dockerfile.debug .

# 查看
docker images
docker images -a

## 删除
docker rmi [IMAGE ID]
docker rmi REPOSITORY:TAG
```

```sh
# 导出镜像
docker save -o ~/hello-world.tar hello-world:latest
docker save hello-world > ~/hello-world.tar
# 导入镜像
docker load -i ~/hello-world.tar
docker load < ~/hello-world.tar
```

[Prune unused Docker objects](https://docs.docker.com/config/pruning)

```sh
# 删除<none>镜像
docker rmi $(docker images | grep "none" | awk '{print $3}') 
# 删除未使用镜像
docker image prune
```

## container

```sh
docker run -idt --name docker_nginx_v1 -p 80:80 nginx:v1
# --name="docker_nginx_v1": 为容器指定一个名称；
# -p: 端口映射，格式为：主机(宿主)端口:容器端口；
# -d: 后台运行容器，并返回容器ID；
# -i: 以交互模式运行容器，通常与 -t 同时使用；
# -t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；

cd /var/lib/docker

# 容器自动启动
docker run --restart=always
# 如果已经启动了则可以使用如下命令：
docker update --restart=always <CONTAINER ID>
```

```sh
# 查看
docker ps
docker ps --no-trunc
docker ps -a

docker start [CONTAINER ID]
docker stop [CONTAINER ID]
docker restart [CONTAINER ID]

# 删除
docker rm [CONTAINER ID]
docker rm -f [CONTAINER ID]

# 进入容器
docker exec -it CONTAINER_ID /bin/sh
exit
```

```sh
# 日志
docker logs [CONTAINER_ID]

# 网络
docker network ls
# 默认的网络模式是 bridge 。在该模式下，docker 创建了一个 bridge，名称通常为 docker0 。 
ifconfig docker0
```

## 数据拷贝

```sh
# 1) 将主机/www/runoob目录拷贝到容器96f7f14e99ab的/www目录下。
docker cp /www/runoob 96f7f14e99ab:/www/
# 2) 将主机/www/runoob目录拷贝到容器96f7f14e99ab中，目录重命名为www。
docker cp /www/runoob 96f7f14e99ab:/www

# 将容器96f7f14e99ab的/www目录拷贝到主机的/tmp目录中。
docker cp  96f7f14e99ab:/www /tmp/
```

## volume

```sh
# 创建卷hello
docker volume create hello
# 查看卷
docker volume ls
# 查看卷[hello]的信息
docker volume inspect hello
# 查看无效卷
docker volume ls -qf dangling=true
# 删除卷
docker volume rm $(docker volume ls -qf dangling=true)
```
