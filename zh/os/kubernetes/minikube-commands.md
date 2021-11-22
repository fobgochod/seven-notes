# Commands

## minikube

```sh
minikube start --driver=none
minikube config set driver none
minikube config set memory 16384

minikube status
minikube pause
minikube stop
minikube delete --all

minikube service tomcat-service
minikube ssh -- docker info
minikube service list

minikube addons list
minikube addons enable dashboard
```

## kubectl

> 缩写： pod (po)、 service (svc)、 replicationcontroller (rc)、 deployment (deploy)、 replicaset (rs)

```sh
kubectl get pod
kubectl describe pod [pod]
# 创建一个服务 暴露444端口
kubectl expose pod [pod] --port=444 --name=test-service
# 对主机暴露8080端口
kubectl port-forword [pod] 8080
# 连接到容器
kubectl attach pod -c container
# 进入容器 [-c]
kubectl exec -it [pod] -- /bin/sh
# 添加标签mylabel=awesome
kubectl label pods [pod] mylabel=awesome
# 运行一个shell, use for debugging 
kubectl run -i --tty busybox --image=busybox --restart=Never -- sh
```

```sh
# 将本地 docker 与 K8S 依赖的 docker 进行绑定
eval $(minikube docker-env)
# 取消与 minikube 中的 docker 进行绑定
eval $(minikube docker-env -u)

# 导出导入镜像
docker save -o /opt/package/docker/image/fobgochod-admin.tar fobgochod/fobgochod-admin:1.0.0
docker load -i /opt/package/docker/image/fobgochod-admin.tar
```

```sh
# 导出已有的Pod为YAML格式
kubectl get deployment nginx-deploy -o yaml
kubectl get deployment nginx-deploy -o yaml > nginx.yaml
# 使用dry-run干跑模式导出YAML
kubectl create deployment test --image=nginx --dry-run -o yaml > nginx.yaml


# deployment.yaml，主要有以下五个字段，而需要自己维护的实际只有4个字段

# 1. apiVersion：定义API组名和版本，如v1。
kubectl api-versions  #查看K8S所支持API版本

# 2. kind：定义资源类别，要创建的是POD就写为pod、Deployment、StatefulSet等
kubectl api-resources  #查看K8S所有资源类型

# 3. metadata：元数据信息，包含资源名称、namespace等。namespace用于给资源进行分类，默认会有一个default名称空间
kubectl get namespaces  #查看namespace
kubectl create namespace myns  #创建一个名为myns的namespace

# 4. spec（核心）：声明资源的属性状态，也就是说希望deployment是什么样的。它的属性通常应该和status字段一致


# 5. status（核心）：资源当前状态，应该与spec接近才对，本字段无需配置，由K8S集群维护。

# 查看每个字段支持的子字段
kubectl explain deployment.metadata
kubectl explain deployment.spec.template.spec.containers
```