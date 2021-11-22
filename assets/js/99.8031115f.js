(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{628:function(s,n,a){"use strict";a.r(n);var e=a(17),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"commands"}},[s._v("Commands")]),s._v(" "),a("h2",{attrs:{id:"minikube"}},[s._v("minikube")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("minikube start --driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none\nminikube config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" driver none\nminikube config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" memory "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384")]),s._v("\n\nminikube status\nminikube pause\nminikube stop\nminikube delete --all\n\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" tomcat-service\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -- docker info\nminikube "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" list\n\nminikube addons list\nminikube addons "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" dashboard\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"kubectl"}},[s._v("kubectl")]),s._v(" "),a("blockquote",[a("p",[s._v("缩写： pod (po)、 service (svc)、 replicationcontroller (rc)、 deployment (deploy)、 replicaset (rs)")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("kubectl get pod\nkubectl describe pod "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个服务 暴露444端口")]),s._v("\nkubectl expose pod "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("444")]),s._v(" --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对主机暴露8080端口")]),s._v("\nkubectl port-forword "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接到容器")]),s._v("\nkubectl attach pod -c container\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器 [-c]")]),s._v("\nkubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -- /bin/sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加标签mylabel=awesome")]),s._v("\nkubectl label pods "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mylabel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("awesome\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行一个shell, use for debugging ")]),s._v("\nkubectl run -i --tty busybox --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("busybox --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Never -- "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地 docker 与 K8S 依赖的 docker 进行绑定")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("minikube docker-env"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消与 minikube 中的 docker 进行绑定")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("minikube docker-env -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出导入镜像")]),s._v("\ndocker save -o /opt/package/docker/image/fobgochod-admin.tar fobgochod/fobgochod-admin:1.0.0\ndocker load -i /opt/package/docker/image/fobgochod-admin.tar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出已有的Pod为YAML格式")]),s._v("\nkubectl get deployment nginx-deploy -o yaml\nkubectl get deployment nginx-deploy -o yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nginx.yaml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用dry-run干跑模式导出YAML")]),s._v("\nkubectl create deployment "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx --dry-run -o yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nginx.yaml\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deployment.yaml，主要有以下五个字段，而需要自己维护的实际只有4个字段")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. apiVersion：定义API组名和版本，如v1。")]),s._v("\nkubectl api-versions  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看K8S所支持API版本")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. kind：定义资源类别，要创建的是POD就写为pod、Deployment、StatefulSet等")]),s._v("\nkubectl api-resources  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看K8S所有资源类型")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. metadata：元数据信息，包含资源名称、namespace等。namespace用于给资源进行分类，默认会有一个default名称空间")]),s._v("\nkubectl get namespaces  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看namespace")]),s._v("\nkubectl create namespace myns  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建一个名为myns的namespace")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. spec（核心）：声明资源的属性状态，也就是说希望deployment是什么样的。它的属性通常应该和status字段一致")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. status（核心）：资源当前状态，应该与spec接近才对，本字段无需配置，由K8S集群维护。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看每个字段支持的子字段")]),s._v("\nkubectl explain deployment.metadata\nkubectl explain deployment.spec.template.spec.containers\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);