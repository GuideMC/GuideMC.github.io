import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

export default defineConfig({
  title: "Guide MC",
  description: "入门 Minecraft",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      {
        text: '启动器',
        items: [
          { text: 'HMCL', link: '/Launcher/HMCL/' },
          { text: 'PCL', link: '/Launcher/PCL/' },
          { text: 'BakaXL', link: '/Launcher/BakaXL/' }
        ]
      },
      { text: '单人游戏', link: '/Client/' },
      { text: '多人游戏', link: '/Server/' },
      { text: '杂项', link: '/Other/' },
      { text: '关于', link: '/About/About' }
    ],
    sidebar: generateSidebar({
      documentRootPath: '/docs',
      collapsed: false,
      capitalizeFirst: true
    }),
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
      message: '"Minecraft" 以及 "我的世界" 为美国微软公司的商标。本文档与美国微软公司之间没有从属关系',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Guide MC`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: `deep`,
      label: '文章大纲'
    },
    editLink: {
      pattern: 'https://github.com/GuideMC/GuideMC.github.io/blob/main/docs/:path',
      text: '在 GitHub 上编辑本页'
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
    lightModeSwitchTitle: '切换至浅色模式',
    darkModeSwitchTitle: '切换至深色模式'
  },
  vite: {
    plugins: []
  },
});