import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Guide MC",
  description: "入门 Minceraft",
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
      { text: '关于', link: '/Other/About' }
    ],
    sidebar: {
      '/Launcher/HMCL/': [
        {
          text: 'HMCL',
          items: [
            { text: 'HMCL介绍', link: '/Launcher/HMCL/' },
            {
              text: '旧目录',
              items: [
                { text: '聊天群', link: '/Launcher/HMCL/Chat' },
                { text: '外置登录', link: '/Launcher/HMCL/Authlib' },
                { text: '自动安装', link: '/Launcher/HMCL/AutoInstall' },
                { text: '数据包', link: '/Launcher/HMCL/Datapack' },
                { text: '同时安装Forge和Optifine', link: '/Launcher/HMCL/ForgeAndOptInstall' },
                { text: '使用密码登录', link: '/Launcher/HMCL/LoginWithPassword' },
                { text: '离线皮肤', link: '/Launcher/HMCL/OfflineSkin' },
                { text: '设置讲解', link: '/Launcher/HMCL/SetItemDetail' },
                { text: '安装光影', link: '/Launcher/HMCL/Shader' },
                { text: '版本隔离', link: '/Launcher/HMCL/VerIsolate' },
                { text: '外置Java', link: '/Launcher/HMCL/PackagedJava' },
                { text: '服务端整合包', link: '/Launcher/HMCL/ServerPack' }
              ]
            }
          ]
        }
      ],
      '/Launcher/PCL/': [
        {
          text: 'PCL',
          items: [
            { text: 'PCL介绍', link: '/Launcher/PCL/' },
            {
              text: '旧目录',
              items: [
                { text: '更新帮助文档', link: '/Launcher/PCL/UpdateHelp' },
                { text: '整合包有关问题', link: '/Launcher/PCL/Problem' },
                { text: '个性化主页', link: '/Launcher/PCL/XAML' },
                { text: '安装数据包', link: '/Launcher/PCL/DatapackInstall' },
                { text: '修复存档', link: '/Launcher/PCL/FixCorruptedSave' },
                { text: '加入服务器', link: '/Launcher/PCL/JoinServer' },
                { text: '登录失败', link: '/Launcher/PCL/LoginFail' },
                { text: '安装Mod', link: '/Launcher/PCL/ModInstall' },
                { text: '安装整合包', link: '/Launcher/PCL/ModpackInstall' },
                { text: '更新Mod', link: '/Launcher/PCL/ModUpdate' },
                { text: '安装资源包', link: '/Launcher/PCL/ResourcepackInstall' },
                { text: '安装光影', link: '/Launcher/PCL/ShaderInstall' },
                { text: '安装世界', link: '/Launcher/PCL/WorldInstall' },
                { text: 'WD添加排除项', link: '/Launcher/PCL/AgainstWD' },
                { text: '导出皮肤', link: '/Launcher/PCL/ExportSkin' },
                { text: '使用LittleSkin登录', link: '/Launcher/PCL/LittleSkin' },
                { text: '指定登录方式', link: '/Launcher/PCL/LoginSelect' },
                { text: '使用密码登录', link: '/Launcher/PCL/LoginWithPassword' },
                { text: '备份设置', link: '/Launcher/PCL/SettingsBackup' }
              ]
            }
          ]
        },
      ],
      '/Launcher/BakaXL/': [
        {
          text: 'BakaXL',
          items: [
            { text: 'BakaXL介绍', link: '/Launcher/BakaXL/Welcome' },
            {
              text: '旧目录',
              items: [
                { text: '在线更新整合包制作', link: '/Launcher/BakaXL/Modpack' },
                { text: '版本隔离', link: '/Launcher/BakaXL/VerSeperate' },
                { text: '常见游戏崩溃', link: '/Launcher/BakaXL/Crash' },
                { text: '常见问题解决', link: '/Launcher/BakaXL/Problem' },
                { text: '指南', link: '/Launcher/BakaXL/Guide' }
              ]
            }
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
      message: '"Minecraft" 以及 "我的世界" 为美国微软公司的商标。本文档与美国微软公司之间没有从属关系。',
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
      pattern: 'https://github.com/GuideMC/GuideMC.github.io/blob/main/docs/Other/WriteRule.md',
      text: '在 GitHub 上编辑'
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
})
