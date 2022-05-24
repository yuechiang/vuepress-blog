export const data = {
  "key": "v-3d5315f8",
  "path": "/tag/daily/",
  "title": "daily Tags",
  "lang": "en-US",
  "frontmatter": {
    "title": "daily Tags",
    "blog": {
      "type": "category",
      "name": "daily",
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
