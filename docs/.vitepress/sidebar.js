import { withSidebar } from 'vitepress-sidebar'

// 公共配置
const commonSidebarOptions = {
  documentRootPath: 'docs',
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  sortFolderTo: 'top',
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
};

// 中文侧边栏配置
const zhSidebarOptions = [
  {
    ...commonSidebarOptions,
    scanStartPath: 'Game',
    resolvePath: '/Game/',
  },
  {
    ...commonSidebarOptions,
    scanStartPath: 'Launcher',
    resolvePath: '/Launcher/',
  },
  {
    ...commonSidebarOptions,
    scanStartPath: 'Tool',
    resolvePath: '/Tool/',
  }
];

// 英文侧边栏配置
const enSidebarOptions = [
  {
    ...commonSidebarOptions,
    scanStartPath: 'en/Game',
    resolvePath: '/en/Game/',
  },
  {
    ...commonSidebarOptions,
    scanStartPath: 'en/Launcher',
    resolvePath: '/en/Launcher/',
  },
  {
    ...commonSidebarOptions,
    scanStartPath: 'en/Tool',
    resolvePath: '/en/Tool/',
  }
];

// 生成并导出中文侧边栏
const zhResult = withSidebar({ themeConfig: {} }, zhSidebarOptions);
export const zhSidebar = zhResult.themeConfig.sidebar;

// 生成并导出英文侧边栏
const enResult = withSidebar({ themeConfig: {} }, enSidebarOptions);
export const enSidebar = enResult.themeConfig.sidebar;