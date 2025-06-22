import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import viewTransition from './components/viewTransition.vue'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export default {
  extends: DefaultTheme,

  setup() {
    const { frontmatter } = useData();
    const route = useRoute();

    giscusTalk({
      repo: 'GuideMC/GuideMC.github.io',
      repoId: 'R_kgDONVGrAQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDONVGrAc4Ckohc',
      mapping: 'pathname',
      reactionsEnabled: '1',
      inputPosition: 'top',
      theme: 'preferred_color_scheme',
      lang: 'zh-CN',
      loading: 'lazy'
      },
      {
        frontmatter, route
      },
      true
    );
  },

  Layout: () => {
    return h(viewTransition, null, {
      default: () => h(DefaultTheme.Layout, null, {
        'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
        'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      })
    })
  },

  enhanceApp({ app, router, siteData }) {
  }

} satisfies Theme