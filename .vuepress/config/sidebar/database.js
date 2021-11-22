module.exports = [
    {
        title: '🐵Database',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            {
                title: 'MySQL',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/database/mysql/data',
                    '/zh/database/mysql/lesson/',
                ]
            },
            {
                title: 'MariaDB',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/database/mariadb/mariadb-install',
                    '/zh/database/mariadb/mariadb-documentation',
                    '/zh/database/mariadb/mariadb-faq',
                ]
            },
            {
                title: 'Redis',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/database/redis/redis-install',
                    '/zh/database/redis/redis-install-windows',
                    '/zh/database/redis/redis-commands',
                    '/zh/database/redis/lesson/',
                ]
            },
            {
                title: 'MongoDB',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/database/mongodb/mongodb-install',
                    '/zh/database/mongodb/mongodb-commands',
                    '/zh/database/mongodb/mongodb-dump',
                ]
            }
        ]
    },
]
