module.exports = [
    {
        title: '开发手册',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: 'Frontend',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/developer/frontend/npm',
                    '/zh/developer/frontend/yarn',
                    '/zh/developer/frontend/vuepress',
                    '/zh/developer/frontend/gitbook',
                ]
            },
            {
                title: 'Backend',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    {
                        title: 'Java',
                        sidebarDepth: 2,
                        children: [
                            '/zh/developer/backend/java/java-install',
                            '/zh/developer/backend/java/java-tools',
                        ]
                    },
                    {
                        title: 'JUC',
                        sidebarDepth: 2,
                        children: [
                            '/zh/developer/backend/juc/lesson/',
                        ]
                    },
                    {
                        title: 'JVM',
                        sidebarDepth: 2,
                        children: [
                            '/zh/developer/backend/jvm/jvm',
                            '/zh/developer/backend/jvm/lesson/',
                        ]
                    },
                    {
                        title: 'Nginx',
                        sidebarDepth: 2,
                        children: [
                            '/zh/developer/backend/nginx/nginx-install',
                            '/zh/developer/backend/nginx/nginx-conf',
                            '/zh/developer/backend/nginx/nginx-commands',
                        ]
                    },
                    {
                        title: 'ZooKeeper',
                        sidebarDepth: 2,
                        children: [
                            '/zh/developer/backend/zookeeper/zookeeper-install',
                            '/zh/developer/backend/zookeeper/lesson/',
                        ]
                    },
                    {
                        title: 'SysIO',
                        sidebarDepth: 2,
                        children: [
                            '/zh/developer/backend/sysio/lesson/',
                        ]
                    }
                ]
            }
        ]
    }
]
