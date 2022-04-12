module.exports = [
    {
        title: 'Operating System',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: '计算机基础',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/os/computer/nous',
                    '/zh/os/computer/network',
                ]
            },
            {
                title: 'Docker',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/os/docker/docker-install',
                    '/zh/os/docker/docker-commands',
                    '/zh/os/docker/docker-maven-plugin',
                    '/zh/os/docker/dockerfile',
                ]
            },
            {
                title: 'Kubernetes',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/os/kubernetes/minikube-install',
                    '/zh/os/kubernetes/minikube-commands',
                ]
            },
            {
                title: 'Linux',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/os/linux/commands',
                    '/zh/os/linux/vi',
                    '/zh/os/linux/user-group',
                    '/zh/os/linux/systemctl',
                    '/zh/os/linux/firewall',
                ]
            },
            {
                title: 'Windows',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/os/windows/windows'
                ]
            }
        ]
    }
]
