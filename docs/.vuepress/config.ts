// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  theme: hopeTheme({
    // 此处放置主题配置
    logo: '/img/logo2.png',
    breadcrumb: false,
    author: '简约',
    navbar: [
      {
        text: "博客",
        link: "/",
        icon: "creative",
        // 仅在 `/zh/guide/` 激活
        // activeMatch: "^/zh/guide/$",
      },
      { text: "配置", link: "/zh/config/README.md", icon: "config" },
      {
        text: "常见问题",
        link: "/zh/faq.md",
        icon: "question",
        // 会在 `/zh/faq` 开头的路径激活
        // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
        activeMatch: "^/zh/faq",
      },
       {
        text: "基础",
        icon: "info",
        prefix: "/zh/basic",
        children: ["/zh/basic/markdown.md", "/zh/basic/vuepress.md"],
      },
        {
        text: "插件列表",
        icon: "plugin",
        children: [
          {
            text: "内置插件",
            children: [
              /* 一些子项目 */
              "/zh/basic/markdown.md", "/zh/basic/vuepress.md"
            ],
          },
          {
            text: "外部插件",
            children: [
              /* 一些子项目 */
              "/zh/basic/markdown.md", "/zh/basic/vuepress.md"
            ],
          },
        ],
      },
    ],
    sidebar: ["/zh/README.md", "/zh/guide/README.md", "/zh/config/README.md"],
    blog: {
      name: '简约的blog',
      sidebarDisplay: 'always',
      roundAvatar:true,
      avatar: '/img/logo.png'
    },
    plugins: {
      blog: {
        autoExcerpt: true
      },
      comment: {
        type: "giscus",
        repo: "yuechiang/yuechiang.github.io",
        repoId: "R_kgDOHVprdQ",
        category: "General",
        categoryId: "DIC_kwDOHVprdc4CPIcY",
      }
    }
  }),
    plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
