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
    scanStartPath: 'en-US/Game',
    resolvePath: '/en-US/Game/',
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
    scanStartPath: 'en-US/Launcher',
    resolvePath: '/en-US/Launcher/',
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
    scanStartPath: 'en-US/Tool',
    resolvePath: '/en-US/Tool/',
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
        },
        lastUpdated: {
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        outline: {
          level: 'deep'
        }
      }
    },
    en: {
      lang: 'en-US',
      label: 'English',
      title: "Guide MC",
      description: "A beginner's guide to Minecraft",
      themeConfig: {
        nav: [
          { text: 'Game', link: '/en-US/Game/' },
          { text: 'Launchers', link: '/en-US/Launcher/' },
          { text: 'Tools', link: '/en-US/Tool/' },
          { text: 'About', link: '/en-US/About' }
        ],
        sidebar: enSidebar,
        footer: {
          message: '"Minecraft" is a trademark of Microsoft Corporation. This document is not affiliated with Microsoft Corporation.',
          copyright: `Copyright © 2024-${new Date().getFullYear()} Guide MC`
        },
        editLink: {
          pattern: 'https://github.com/GuideMC/GuideMC.github.io/blob/main/docs/:path',
        },
        lastUpdated: {
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        outline: {
          level: 'deep'
        }
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GuideMC' }
    ]
  }
});