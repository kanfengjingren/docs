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
      { text: 'webpack', link: '/前端工程化/webpack' }
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
          { text: 'nodejs基础', link: '/nodejs/node基础' },
          { text: 'os', link: '/nodejs/os' },
          { text: 'process', link: '/nodejs/process' },
          { text: 'path', link: '/nodejs/path' },
          { text: '响应头和请求头', link: '/nodejs/响应头和请求头' },
          { text: '数据库', link: '/nodejs/数据库' },
          { text: 'prisma', link: '/nodejs/prisma' },
          { text: 'lua', link: '/nodejs/lua' },
          { text: 'JWT', link: '/nodejs/JWT' },
          { text: '爬虫', link: '/nodejs/爬虫' },
          
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: 'webpack', link: '/前端工程化/webpack' },
          
        ]
      },
      {
        text: '服务器',
        items: [
          { text: '个人电脑作为局域网服务器', link: '/服务器/个人电脑作为局域网服务器' },
          
        ]
      },
      {
        text: 'openclaw',
        items: [
          { text: 'openclaw', link: '/openclaw/openclaw' },
          
        ]
      },
      {
        text: 'NESTJS',
        items: [
          { text: 'NESTjs', link: '/nestjs/nestjs' },
          { text: 'middleware', link: '/nestjs/middleware' },
          { text: 'nestjs+prisma+redis+nodemailer+JWT', link: '/nestjs/nestjs+prisma+redis+nodemailer+JWT' },
          
        ]
      },
      {
        text: '一点思考',
        items: [
          { text: '学到今天的一个总结', link: '/一点思考/学到今天的一个总结' },
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: '入门和认识目录', link: '/Vue/入门和认识目录' },
          { text: 'Vue模板语法和指令', link: '/Vue/Vue模板语法和指令' },
          { text: '响应式', link: '/Vue/响应式' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kanfengjingren' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/524473823?spm_id_from=333.1007.0.0' },
    ]
  }
})
