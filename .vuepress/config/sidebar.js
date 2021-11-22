module.exports = [
    {
        title: '🐮Introduction',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/introduction/about-me',
            '/zh/introduction/about-the-project',
            '/zh/introduction/guide/quick-start'
        ]
    },
    ...require('./sidebar/backend'),
    ...require('./sidebar/frontend'),
    ...require('./sidebar/database'),
    ...require('./sidebar/os'),
    {
        title: '🐶Reading Notes',
        collapsable: false,
        sidebarDepth: 2,
        children: [
            '/zh/book/mashibing',
            '/zh/book/this-is-why',
            '/zh/book/blog',
            '/zh/book/on-java-8',
            '/zh/book/understanding-the-jvm',
        ]
    },
    {
        title: '🐷Appendix',
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
