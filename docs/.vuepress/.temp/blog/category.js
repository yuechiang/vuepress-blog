export const categoryMap = {"category":{"/":{"path":"/category/","map":{"programming":{"path":"/category/programming/","keys":["v-983f3bbc","v-44a2347a","v-086c8374","v-29425b72","v-0be96e40","v-8af1a6b8","v-61059cc9","v-48e3e1fc","v-12c882d0","v-d93f55bc","v-34f88824"]},"live":{"path":"/category/live/","keys":["v-407f85f5","v-28801a33"]},"office":{"path":"/category/office/","keys":["v-8af1a6b8"]}}}},"tag":{"/":{"path":"/tag/","map":{"vue":{"path":"/tag/vue/","keys":["v-29425b72","v-0be96e40","v-34f88824"]},"尤雨溪":{"path":"/tag/%E5%B0%A4%E9%9B%A8%E6%BA%AA/","keys":["v-29425b72","v-0be96e40","v-34f88824"]},"源码":{"path":"/tag/%E6%BA%90%E7%A0%81/","keys":["v-29425b72","v-0be96e40","v-34f88824"]},"响应性":{"path":"/tag/%E5%93%8D%E5%BA%94%E6%80%A7/","keys":["v-29425b72"]},"reactivity":{"path":"/tag/reactivity/","keys":["v-29425b72"]},"bash":{"path":"/tag/bash/","keys":["v-61059cc9"]},"bats":{"path":"/tag/bats/","keys":["v-61059cc9"]},"test":{"path":"/tag/test/","keys":["v-61059cc9"]},"shell":{"path":"/tag/shell/","keys":["v-61059cc9"]},"daily":{"path":"/tag/daily/","keys":["v-407f85f5"]},"live":{"path":"/tag/live/","keys":["v-407f85f5","v-28801a33"]},"linux":{"path":"/tag/linux/","keys":["v-983f3bbc"]},"ftp":{"path":"/tag/ftp/","keys":["v-983f3bbc"]},"git":{"path":"/tag/git/","keys":["v-48e3e1fc"]},"github":{"path":"/tag/github/","keys":["v-56161c6c"]},"markdown":{"path":"/tag/markdown/","keys":["v-12c882d0"]},"nodejs":{"path":"/tag/nodejs/","keys":["v-44a2347a","v-086c8374"]},"version":{"path":"/tag/version/","keys":["v-44a2347a","v-086c8374"]},"踩坑":{"path":"/tag/%E8%B8%A9%E5%9D%91/","keys":["v-44a2347a","v-d93f55bc"]},"npm":{"path":"/tag/npm/","keys":["v-44a2347a"]},"nvm":{"path":"/tag/nvm/","keys":["v-086c8374"]},"vim":{"path":"/tag/vim/","keys":["v-8af1a6b8"]},"office":{"path":"/tag/office/","keys":["v-8af1a6b8"]},"editor":{"path":"/tag/editor/","keys":["v-8af1a6b8"]},"vuepress":{"path":"/tag/vuepress/","keys":["v-d93f55bc"]},"vuepress-theme-hope":{"path":"/tag/vuepress-theme-hope/","keys":["v-d93f55bc"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
