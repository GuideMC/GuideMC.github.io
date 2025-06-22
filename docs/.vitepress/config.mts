import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const zhSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'Game',
    resolvePath: '/Game/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortFolderTo: 'top' as const,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    removePrefixAfterOrdering: true,
    prefixSeparator: '.',
    collapsed: true,
    collapseDepth: 2,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    capitalizeEachWords: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'Launcher',
    resolvePath: '/Launcher/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortFolderTo: 'top' as const,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    removePrefixAfterOrdering: true,
    prefixSeparator: '.',
    collapsed: true,
    collapseDepth: 2,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    capitalizeEachWords: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'Tool',
    resolvePath: '/Tool/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortFolderTo: 'top' as const,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    removePrefixAfterOrdering: true,
    prefixSeparator: '.',
    collapsed: true,
    collapseDepth: 2,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    capitalizeEachWords: true
  }
];
const { themeConfig: { sidebar: zhSidebar } } = withSidebar({ themeConfig: {} }, zhSidebarOptions);

const enSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'en/Game',
    resolvePath: '/en/Game/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortFolderTo: 'top' as const,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    removePrefixAfterOrdering: true,
    prefixSeparator: '.',
    collapsed: true,
    collapseDepth: 2,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    capitalizeEachWords: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'en/Launcher',
    resolvePath: '/en/Launcher/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortFolderTo: 'top' as const,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    removePrefixAfterOrdering: true,
    prefixSeparator: '.',
    collapsed: true,
    collapseDepth: 2,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    capitalizeEachWords: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'en/Tool',
    resolvePath: '/en/Tool/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    sortFolderTo: 'top' as const,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    removePrefixAfterOrdering: true,
    prefixSeparator: '.',
    collapsed: true,
    collapseDepth: 2,
    hyphenToSpace: true,
    underscoreToSpace: true,
    capitalizeFirst: true,
    capitalizeEachWords: true
  }
];
const { themeConfig: { sidebar: enSidebar } } = withSidebar({ themeConfig: {} }, enSidebarOptions);

export default defineConfig({
  ignoreDeadLinks: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://guidemc.github.io'
  },
  markdown: {
    image: {
      lazyLoading: true
    },
  },
  vite: {
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui'
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui'
      ],
    },
  },
  locales: {
    root: {
      lang: 'zh-CN',
      label: '简体中文',
      title: "Guide MC",
      description: "入门 Minecraft",
      themeConfig: {
        nav: [
          { text: '游戏', link: '/Game/' },
          { text: '启动器', link: '/Launcher/' },
          { text: '杂项', link: '/Tool/' },
          { text: '关于', link: '/About' }
        ],
        sidebar: zhSidebar,
        footer: {
          message: '"Minecraft" 以及 "我的世界" 为美国微软公司的商标。本文档与美国微软公司之间没有从属关系',
          copyright: `版权所有 © 2024-${new Date().getFullYear()} Guide MC`
        },
        editLink: {
          pattern: 'https://github.com/GuideMC/GuideMC.github.io/blob/main/docs/:path',
          text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        outline: {
          label: '本页大纲',
          level: 'deep'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换至浅色',
        darkModeSwitchTitle: '切换至深色'
      }
    },
    en: {
      lang: 'en-US',
      label: 'English',
      title: "Guide MC",
      description: "A beginner's guide to Minecraft",
      themeConfig: {
        nav: [
          { text: 'Game', link: '/en/Game/' },
          { text: 'Launchers', link: '/en/Launcher/' },
          { text: 'Tools', link: '/en/Tool/' },
          { text: 'About', link: '/en/About' }
        ],
        sidebar: enSidebar,
        footer: {
          message: '"Minecraft" is a trademark of Microsoft Corporation. This document is not affiliated with Microsoft Corporation.',
          copyright: `Copyright © 2024-${new Date().getFullYear()} Guide MC`
        },
        editLink: {
          pattern: 'https://github.com/GuideMC/GuideMC.github.io/blob/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last Updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        outline: {
          label: 'On this page',
          level: 'deep'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        langMenuLabel: 'Change language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme'
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: "to close"
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GuideMC' }
    ]
  }
});