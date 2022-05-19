export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-44a2347a","v-086c8374","v-29425b72","v-0be96e40","v-8af1a6b8","v-61059cc9","v-407f85f5","v-28801a33","v-48e3e1fc","v-2f49550e","v-56161c6c","v-12c882d0","v-d93f55bc","v-34f88824","v-cfbc381e","v-6136d5b8","v-3316772e","v-62ebae57"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-3316772e","v-62ebae57"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-44a2347a","v-086c8374","v-29425b72","v-0be96e40","v-8af1a6b8","v-61059cc9","v-407f85f5","v-28801a33","v-48e3e1fc","v-2f49550e","v-56161c6c","v-12c882d0","v-d93f55bc","v-34f88824","v-cfbc381e","v-6136d5b8","v-3316772e","v-62ebae57"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
