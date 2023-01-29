module.exports = [
    {
        title: '计算机基础',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/computer/nous',
            '/zh/computer/network',
            {
                title: 'Docker',
                sidebarDepth: 2,
                children: [
                    '/zh/computer/docker/docker-install',
                    '/zh/computer/docker/docker-commands',
                    '/zh/computer/docker/docker-maven-plugin',
                    '/zh/computer/docker/dockerfile',
                ]
            },
            {
                title: 'Kubernetes',
                sidebarDepth: 2,
                children: [
                    '/zh/computer/kubernetes/minikube-install',
                    '/zh/computer/kubernetes/minikube-commands',
                ]
            },
            {
                title: 'Linux',
                sidebarDepth: 2,
                children: [
                    '/zh/computer/linux/commands',
                    '/zh/computer/linux/vi',
                    '/zh/computer/linux/user-group',
                    '/zh/computer/linux/systemctl',
                    '/zh/computer/linux/firewall',
                ]
            },
            {
                title: 'Windows',
                sidebarDepth: 2,
                children: [
                    '/zh/computer/windows/windows'
                ]
            }
        ]
    }
]
