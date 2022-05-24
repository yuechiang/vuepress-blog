export const data = {
  "key": "v-4001cb1f",
  "path": "/tag/reactivity/",
  "title": "reactivity Tags",
  "lang": "en-US",
  "frontmatter": {
    "title": "reactivity Tags",
    "blog": {
      "type": "category",
      "name": "reactivity",
      "key": "tag"
    },
    "layout": "Blog"
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
