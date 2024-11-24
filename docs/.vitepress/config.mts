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
      { text: '关于', link: '/About' }
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
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GuideMC' }
    ],
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true
})
