import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

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
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
