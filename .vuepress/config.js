module.exports = {
    base: '/',
    title: 'Seven',
    description: '七的笔记',
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico`}],
    ],
    host: 'localhost',
    port: 8080,
    dest: '.vuepress/dist',
    themeConfig: {
        logo: '/images/logo/book.png',
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,
        activeHeaderLinks: false,
        repo: '',
        repoLabel: '',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./config/nav'),
        sidebar: require('./config/sidebar')
    },
    markdown: {
        lineNumbers: true,
        anchor: {permalink: false},
        toc: {includeLevel: [2, 3]},
        plugins: ['task-lists']
    },
    plugins: [
        require('./plugins/read-time'),
        require('./plugins/export'),
        require('./plugins/md-copy'),
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
            }
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github-v4',
            owner: 'fobgochod',
            repo: 'seven-notes',
            clientId: '86b0873df13688df1cc2',
            clientSecret: '0be83a1ff2a594501e217b9b991de8917998e746',
            locale: 'zh-CN',
            autoCreateIssue: true
        }]
    ]
}
