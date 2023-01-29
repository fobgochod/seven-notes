module.exports = [
    {
        title: '目录',
        collapsable: false,
        path: '/SUMMARY.md'
    },
    {
        title: '前言',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/introduction/about-me',
            '/zh/introduction/about-the-project',
            '/zh/introduction/guide/quick-start'
        ]
    },
    ...require('./sidebar/developer'),
    ...require('./sidebar/database'),
    ...require('./sidebar/computer'),
    {
        title: '读书笔记',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/notes/understanding-the-jvm',
            '/zh/notes/on-java-8',
            '/zh/notes/mashibing',
            '/zh/notes/blog',
            {
                title: '面试',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/zh/notes/interview/abstract-queued-synchronizer',
                    '/zh/notes/interview/thread-pool',
                    '/zh/notes/interview/java-virtual-machine',
                ]
            },
        ]
    },
    {
        title: '附录',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/appendix/markdown',
            '/zh/appendix/halo',
            '/zh/appendix/git',
            '/zh/appendix/tools',
            '/zh/appendix/proper-noun',
        ]
    }
]
