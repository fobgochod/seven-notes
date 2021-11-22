# Docker Maven Plugin

## Docker容器设定

```sh
vi /usr/lib/systemd/system/docker.service

# 在ExecStart=/usr/bin/dockerd 后面加上
-H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock

# 重启
systemctl daemon-reload
systemctl restart docker

# Verify is correctly
curl http://localhost:2375/version
```

```sh
# 防火墙开放2375端口
firewall-cmd --zone=public --add-port=2375/tcp --permanent
firewall-cmd --reload
```

## Maven pom插件

```xml
<plugin>
    <groupId>com.spotify</groupId>
    <artifactId>docker-maven-plugin</artifactId>
    <configuration>
        <!--指定生成的镜像名-->
        <imageName>${project.artifactId}</imageName>
        <!--指定标签-->
        <imageTags>
            <imageTag>${project.version}</imageTag>
        </imageTags>
        <!-- 指定 Dockerfile 路径-->
        <dockerDirectory>${project.basedir}/src/main/resources/docker</dockerDirectory>
        <!--指定远程 docker api地址-->
        <dockerHost>http://192.168.9.27:2375</dockerHost>
        <!-- 这里是复制 jar 包到 docker 容器指定目录配置 -->
        <resources>
            <resource>
                <targetPath>/</targetPath>
                <!--jar 包所在的路径  此处配置的 即对应 target 目录-->
                <directory>${project.build.directory}</directory>
                <!-- 需要包含的 jar包 ，这里对应的是 Dockerfile中添加的文件名-->
                <include>${project.build.finalName}.jar</include>
            </resource>
        </resources>
    </configuration>
    <executions>
        <execution>
            <id>build-image</id>
            <!--将插件绑定在package这个phase上。也就是说，用户只需执行mvn package ，就会自动执行mvn docker:build-->
            <phase>package</phase>
            <goals>
                <goal>build</goal>
            </goals>
        </execution>
    </executions>    
</plugin>
```