import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Guide MC",
  description: "入门 Minecraft",
  themeConfig: {
    nav: [
      {
        text: '启动器',
        items: [
          { text: 'HMCL', link: '/HMCL/Welcome' },
          { text: 'PCL', link: '/PCL/Welcome' },
          { text: 'BakaXL', link: '/BakaXL/Welcome' }
        ]
      },
      { text: '关于', link: '/Other/About' }
    ],
    sidebar: {
      '/HMCL/': [
        {
          text: 'HMCL',
          items: [
            { text: 'HMCL介绍', link: '/HMCL/Welcome' },
            { text: 'Test', link: '/markdown' }
          ]
        }
      ],
      '/PCL/': [
        {
          text: 'PCL',
          items: [
            { text: 'PCL介绍', link: '/PCL/Welcome' },
            { text: 'Test', link: '/markdown' }
          ]
        }
      ],
      '/BakaXL/': [
        {
          text: 'BakaXL',
          items: [
            { text: 'BakaXL介绍', link: '/BakaXL/Welcome' },
            { text: '在线更新整合包制作', link: '/BakaXL/Modpack' },
            { text: '版本隔离', link: '/BakaXL/VerSeperate' },
            { text: '常见游戏崩溃', link: '/BakaXL/Crash' },
            { text: '常见问题解决', link: '/BakaXL/Problem' },
            { text: '指南', link: '/BakaXL/Guide' }
          ]
        }
      ],
      '/Other/': [
        {
          text: '关于',
          items: [
            { text: '介绍', link: '/Other/About' },
            { text: '编写规则', link: '/Other/WriteRule' },
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
              navigateText: '切换',
              closeText: "关闭"
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
    editLink: {
      pattern: 'https://github.com/GuideMC/GuideMC.github.io/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
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
