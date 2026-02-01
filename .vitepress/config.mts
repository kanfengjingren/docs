import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "My Awesome Project",
  description: "mark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'websocket', link: '/webNet/websocket' }
    ],

    sidebar: [
      {
        text: 'webNet',
        items: [
          { text: 'websocket', link: '/webNet/websocket' },
          { text: 'tcp', link: '/webNet/tcp' }
          
        ]
      },
      
      {
        text: 'nodejs',
        items: [
          { text: 'fs', link: '/nodejs/fs' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
