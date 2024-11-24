import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Guide MC",
  description: "入门 Minecraft",
  themeConfig: {
    nav: [
      {
        text: '启动器',
        items: [
          { text: 'HMCL', link: '/HMCL/HMCL_Welcome' },
          { text: 'PCL', link: '/PCL/PCL_Welcome' },
          { text: 'BakaXL', link: '/BakaXL/BakaXL_Welcome' }
        ]
      },
      { text: '关于', link: '/About/About' }
    ],
    sidebar: {
      '/HMCL/': [
        {
          text: 'HMCL',
          items: [
            { text: 'HMCL介绍', link: '/HMCL_Welcome' },
            { text: 'Test', link: '/markdown' }
          ]
        }
      ],
      '/PCL/': [
        {
          text: 'PCL',
          items: [
            { text: 'PCL介绍', link: '/PCL_Welcome' },
            { text: 'Test', link: '/markdown' }
          ]
        }
      ],
      '/BakaXL/': [
        {
          text: 'BakaXL',
          items: [
            { text: 'BakaXL介绍', link: '/BakaXL_Welcome' },
            { text: 'Test', link: '/markdown' }
          ]
        }
      ],
      '/About/': [
        {
          text: 'Examples',
          items: [
            { text: '介绍', link: '/Other/About' },
            { text: '编写规则', link: '/Other/Write_Rule' },
            { text: '贡献者', link: '/Other/Contributor' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GuideMC' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Guide MC`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '文章大纲'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '浅色模式',
    darkModeSwitchTitle: '深色模式'
  },
})
