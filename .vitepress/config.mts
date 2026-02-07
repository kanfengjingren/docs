import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  outDir: "docs",//打包放入的文件夹，默认是dist，这里改成了docs并且放在根目录下
  base:"/docs/",//加上仓库前缀
  title: "看风景人的博客",
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
          { text: 'tcp', link: '/webNet/tcp' },
          { text: '浏览器流程', link: '/webNet/浏览器流程' },
          { text: 'SSE', link: '/webNet/SSE' },
          
        ]
      },
      
      {
        text: 'nodejs',
        items: [
          { text: 'fs', link: '/nodejs/fs' },
          
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: 'webpack', link: '/前端工程化/webpack' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kanfengjingren' }
    ]
  }
})
