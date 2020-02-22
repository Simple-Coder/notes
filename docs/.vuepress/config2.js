module.exports = {
    title: '沫沫儿的技能树',
    description: '***的 ****博客',
    //  指定 vuepress build 的输出目录
    dest:'./dist',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/vue-logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: {
                message: "新的风暴已经出现",
                buttonText: "盘他"
            }
        }],
        ['@vuepress/google-analytics', {
            //  谷歌ga ID
            ga:'**-*********-*'
        }],
        ['@vuepress/medium-zoom', true]
    ],
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        //repo: 'https://github.com/Mulander-J/Wiki1001Pro.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        //repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        //docsRepo: 'https://github.com/Mulander-J/Wiki1001Pro',
        // 假如文档不是放在仓库的根目录下：
        //docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        //docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        //editLinks: true,
        // 默认为 "Edit this page"
        //editLinkText: 'Git EditLink',
        // 文档更新时间：每个文件git最后提交的时间,
        //lastUpdated: 'Last Updated' ,
        // 侧边栏搜索深度
        sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        nav:[
			{ text: '首页', link: '/' },
            { text: '高级软件工程师养成攻略', link: '/FAQ/Wiki' },
            { text: '大数据开发工程实习攻略', link: '/FAQ/Console/A000' },
            //{ text: 'Store', link: '/Store/' },
            //{ text: 'Thought', link: '/Thought/' },
            {
                text: '关于我',
                items: [
                    { text: 'Github', link: 'https://github.com/Simple-Coder' },
                    { text: '博客园', link: 'https://www.cnblogs.com/rmxd/' }
                ]
            }
        ],
        sidebar:{
            '/FAQ/':[
                ['/FAQ/Wiki','Wiki'],
                {
                    title: 'Console',
                    children: [
                        ['/FAQ/Console/A000','#FAQ1000'],
                        ['/FAQ/Console/A001','#A001_VuePress_1'],
                        ['/FAQ/Console/A002','#A002_VuePress_2']
                    ]
                },
                {
                    title: 'Digest',
                    children: [
                        ['/FAQ/DigestionHeap/Digested','#Digested'],
                        ['/FAQ/DigestionHeap/Digesting','#Digesting'],
                        ['/FAQ/DigestionHeap/DigestWill','#DigestWill']
                    ]
                }
            ],
            '/Thought/':[
                ['','Thought']
            ],
            '/Store/': [
                ['','Store'],
                {
                    title: 'WebDev',
                    children: [
                        ['/Store/Dev/Links', '#Links'],
                        ['/Store/Dev/Issue', '#Issue']
                    ]
                },
            ],
            '/Another/':[
                ['/Another/MySelf','#MySelf'],
                ['/Another/Project','#Project'],
                ['/Another/Fillory','#Fillory'],
                ['/Another/Review','#Review']
            ]
        }
    }
};

