import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MC 指北",
  description: "Guide MC",
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
          text: 'Examples',
          items: [
            { text: 'HMCL介绍', link: '/HMCL_Welcome' },
            { text: 'Test', link: '/markdown' }
          ]
        }
      ],
      '/PCL/': [
        {
          text: 'Examples',
          items: [
            { text: 'PCL介绍', link: '/PCL_Welcome' },
            { text: 'Test', link: '/markdown' }
          ]
        }
      ],
      '/BakaXL/': [
        {
          text: 'Examples',
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
            { text: '介绍', link: '/About/About' },
            { text: 'Test', link: '/About/How_To_Write' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
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
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GuideMC' }
    ],
    editLink: {
      pattern: 'https://github.com/GuideMC/GuideMC.github.io/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Guide MC`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
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
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  lastUpdated: true
})
