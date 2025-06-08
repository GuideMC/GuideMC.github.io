import { defineConfig } from 'vitepress'
import vitepressProtectPlugin from 'vitepress-protect-plugin'

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
    sidebar: {
      '/Launcher/HMCL/': [
        {
          text: 'HMCL',
          items: [
            { text: '介绍', link: '/Launcher/HMCL/' },
            {
              text: '安装',
              items: [
                { text: '安装模组', link: '/Launcher/HMCL/InstallMod' },
                { text: '导入整合包', link: '/Launcher/HMCL/InstallModpack' },
                { text: '添加光影', link: '/Launcher/HMCL/InstallShader' },
                { text: '添加资源包', link: '/Launcher/HMCL/InstallResourcepack' },
                { text: '导入世界', link: '/Launcher/HMCL/InstallWorld' },
                { text: '添加数据包', link: '/Launcher/HMCL/InstallDatapack' }
              ]
            },
            {
              text: '旧版教程',
              items: [
                { text: '使用 LittleSkin 登录', link: '/Launcher/HMCL/AuthlibInjector' },
                { text: '设置讲解', link: '/Launcher/HMCL/SetItemDetail' },
                { text: '外置 Java', link: '/Launcher/HMCL/PackagedJava' },
                { text: '服务端整合包', link: '/Launcher/HMCL/ServerPack' },
                { text: '制作数据包', link: '/Launcher/HMCL/Datapack' }
              ]
            }
          ]
        }
      ],
      '/Launcher/PCL/': [
        {
          text: 'PCL',
          items: [
            { text: '介绍', link: '/Launcher/PCL/' },
            {
              text: '安装',
              items: [
                { text: '安装模组', link: '/Launcher/PCL/InstallMod' },
                { text: '导入整合包', link: '/Launcher/PCL/InstallModpack' },
                { text: '添加光影', link: '/Launcher/PCL/InstallShader' },
                { text: '添加资源包', link: '/Launcher/PCL/InstallResourcepack' },
                { text: '导入世界', link: '/Launcher/PCL/InstallWorld' },
                { text: '添加数据包', link: '/Launcher/PCL/InstallDatapack' }
              ]
            },
            { text: '导出设置', link: '/Launcher/PCL/ExportSettings' },
            { text: '制作整合包', link: '/Launcher/PCL/MakeModpack' },
            { text: '使用 LittleSkin 登录', link: '/Launcher/PCL/AuthlibInjector' },
            { text: '赞助', link: '/Launcher/PCL/Sponser' },
            { text: '常见问题', link: '/Launcher/PCL/Problem' },
            { text: '主题', link: '/Launcher/PCL/Theme' }
          ]
        },
      ],
      '/Launcher/BakaXL/': [
        {
          text: 'BakaXL',
          items: [
            { text: '介绍', link: '/Launcher/BakaXL/' },
            {
              text: '安装',
              items: [
                { text: '安装模组', link: '/Launcher/BakaXL/InstallMod' },
                { text: '导入整合包', link: '/Launcher/BakaXL/InstallModpack' },
                { text: '添加光影', link: '/Launcher/BakaXL/InstallShader' },
                { text: '添加资源包', link: '/Launcher/BakaXL/InstallResourcepack' },
                { text: '导入世界', link: '/Launcher/BakaXL/InstallWorld' },
                { text: '添加数据包', link: '/Launcher/BakaXL/InstallDatapack' }
              ]
            },
            {
              text: '旧版教程',
              items: [
                { text: '在线更新整合包制作', link: '/Launcher/BakaXL/Modpack' },
                { text: '常见问题解决', link: '/Launcher/BakaXL/Problem' },
                { text: '大厅', link: '/Launcher/BakaXL/Hall' },
              ]
            }
          ]
        }
      ],
      '/Client/': [
        {
          text: '单人游戏',
          items: [
            { text: '介绍', link: '/Client/' },
            {
              text: '旧版教程',
              items: [
                { text: '常见报错解决', link: '/Client/CrashResolve' },
                { text: '关于版本隔离', link: '/Client/VerIsolation' }
              ]
            }
          ]
        }
      ],
      '/Server/': [
        {
          text: '多人游戏',
          items: [
            { text: '介绍', link: '/Server/' },
            { text: '加入服务器', link: '/Server/Join' },
            {
              text: '联机',
              items: [
                { text: '加入服务器', link: '/Server/Join' }
              ]
            },
            {
              text: '服务器',
              items: [
                { text: '服务端核心', link: '/Server/ServerCore' },
                { text: '创建服务器', link: '/Server/ServerCreate' },
                { text: '配置服务器', link: '/Server/ServerConfig' }
              ]
            }
          ]
        }
      ],
      '/Other/': [
        {
          text: '杂项',
          items: [
            { text: '介绍', link: '/Other/' },
            { text: '下载安装 Java', link: '/Other/JavaInstall' },
            { text: '计算机基本常识', link: '/Other/ComputerKnowledge' },
            { text: '如何解决杀软拦截问题', link: '/Other/StopDefenderBlock' },
            { text: '关于网络问题', link: '/Other/TryFixNetSpeed' },
            { text: '使用密码登录微软账户', link: '/Other/LoginWithPassword' },
            { text: '在不同版本之间共享目录', link: '/Other/LinkDirectory' }
          ]
        }
      ],
      '/About/': [
        {
          text: '关于',
          items: [
            { text: '介绍', link: '/About/About' },
            { text: '编写规则', link: '/About/WriteRule' },
            { text: '贡献者', link: '/About/Contributor' }
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
    plugins: [
      vitepressProtectPlugin({
        disableF12: true,
        disableCopy: true,
        disableSelect: true,
      }),
    ],
  },
})
