# chkconfig、systemctl

> [https://www.cnblogs.com/yadongliang/p/12561541.html](https://www.cnblogs.com/yadongliang/p/12561541.html)

> CentOS 7.x开始，CentOS开始使用systemd服务来代替daemon，原来管理系统启动和管理系统服务的相关命令全部由systemctl命令来代替。

### service 命令与 systemctl 命令对比

daemon命令 | systemctl命令 | 说明
--- | --- | ---
service [服务] start | systemctl start [unit type] | 启动服务
service [服务] stop | systemctl stop [unit type] | 停止服务
service [服务] restart | systemctl restart [unit type] | 重启服务

此外还是二个systemctl参数没有与service命令参数对应

- status：参数来查看服务运行情况
- reload：重新加载服务，加载更新后的配置文件（并不是所有服务都支持这个参数，比如network.service）

### chkconfig 命令与 systemctl 命令对比

daemon命令 | systemctl命令 | 说明
--- | --- | ---
chkconfig [服务] on | systemctl enable [unit type] | 设置服务开机启动
chkconfig [服务] off | systemctl disable [unit type] | 设备服务禁止开机启动
chkconfig --list | systemctl list-unit-files | 查看系统上所有的服务

