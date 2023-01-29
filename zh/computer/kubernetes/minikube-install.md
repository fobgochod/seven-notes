# Install

## 文档

- [minikube start](https://minikube.sigs.k8s.io/docs/start)
- [Accessing Dashboard](https://github.com/kubernetes/dashboard/tree/master/docs/user/accessing-dashboard)
- kubectl
    - [install-kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#install-kubectl-binary-with-curl-on-linux)
    - [kubectl-commands](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [minikube安装dashboard](https://blog.csdn.net/b5wang/article/details/107028664)

## Linux

### 安装

#### 安装Docker

[Docker Install](zh/computer/docker/docker-install.md)

```sh
vi /usr/lib/systemd/system/docker.service

# 在ExecStart=/usr/bin/dockerd 后面加上
--exec-opt native.cgroupdriver=systemd

# 重启
systemctl daemon-reload
systemctl restart docker
```

#### 创建用户、组

```sh
# 查看用户、组
cat /etc/passwd
cat /etc/group
# 创建用户admin、组fobgochod
useradd -g docker -u 1000 admin
groupadd -g 1000 fobgochod
```

#### # kubectl安装

```sh
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
kubectl version --client

alias kubectl="kubectl -s http://localhost:39215"
kubectl -s http://localhost:39215 version
```

#### minikube安装

> 切换到非root用户

```sh
su admin
```

```sh
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
install minikube-linux-amd64 /usr/local/bin/minikube

# minikube manager
yum install conntrack
minikube start --driver=docker
minikube config set driver docker
minikube config set memory 16384

minikube version
minikube status
minikube pause
minikube stop
minikube delete --all

minikube service tomcat-service
minikube ssh -- docker info
minikube service list
```

#### dashboard安装

```sh
# 启用dashboard
minikube addons list
minikube addons enable dashboard

# 查看如下信息
# Labels: k8s-app=kubernetes-dashboard
# Port: 9090/TCP
kubectl get pod -A
kubectl describe pod kubernetes-dashboard-968bcb79-hb58p -n kubernetes-dashboard


# 方法一：直接修改
kubectl -n kubernetes-dashboard edit service kubernetes-dashboard
kubectl -n kubernetes-dashboard get service kubernetes-dashboard
minikube service list

# 方法二：新增yml，创建service
vi minikube-dashboard.yaml
kubectl apply -f minikube-dashboard.yaml
minikube service list
```

> minikube-dashboard.yaml

```yaml
# minikube-dashboard.yaml
apiVersion: v1
kind: Service
metadata:
  name: minikube-dashboard
  namespace: kubernetes-dashboard
  labels:
    addonmanager.kubernetes.io/mode: Reconcile
    k8s-app: kubernetes-dashboard
    kubernetes.io/minikube-addons: dashboard
spec:
  selector:
    k8s-app: kubernetes-dashboard
  type: NodePort
  ports:
    - protocol: TCP
      port: 9000
      targetPort: 9090
      nodePort: 30001
```

#### 打包部署

```sh
## 创建部署 pod
kubectl create -f k8s-dahboard.yml
## 更新部署配置
kubectl apply -f k8s-dahboard.yml
## 删除
kubectl delete -f k8s-dahboard.yml
## 查看已经部署的pod 显示信息全面[-o wide]
kubectl get pod [-o wide]
## 查看pod详细信息
kubectl describe pod podName
## 查看pod输出日志
kubectl logs [-f] podName
```

> tomcat部署

```yaml
# tomcat-deploy.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tomcat-deploy
  labels:
    k8s-app: tomcat-cluster
spec:
  replicas: 2
  selector:
    matchLabels:
      k8s-app: tomcat-cluster
  template:
    metadata:
      labels:
        k8s-app: tomcat-cluster
    spec:
      containers:
        - name: tomcat-cluster
          image: tomcat:jdk8-openjdk-slim
          ports:
            - containerPort: 8080
```

```yaml
# tomcat-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: tomcat-service
  labels:
    k8s-app: tomcat-cluster
spec:
  type: NodePort
  selector:
    k8s-app: tomcat-cluster
  ports:
    - port: 8000
      targetPort: 8080
      nodePort: 30002
```

```sh
vi tomcat-deploy.yaml
# 部署
kubectl create -f tomcat-deploy.yaml
# 查看
kubectl get deployment
kubectl get pod -o wide
kubectl describe pod tomcat-deploy-749b7f4dbf-98zhz

vi tomcat-service.yaml
# 服务
kubectl create -f tomcat-service.yaml
# 查看
kubectl get service
kubectl describe service tomcat-service

minikube service list
minikube service tomcat-service --url
```
