module.exports = {
  base: '/notes',
  title: '沫沫儿的技能树',
  description: '沫沫儿的技能树',
  head: [
    ['link', { rel: 'icon', href: '/vue-logo.png' }]
  ],
  themeConfig: {
  	nav: [
  		{ text: 'FirstBlog', link: '/blog/FirstBlog.md' },
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
  	sidebar: false
  }
}