export const data = {
  "key": "v-2897d318",
  "path": "/slides/",
  "title": "Slides",
  "lang": "en-US",
  "frontmatter": {
    "title": "Slides",
    "blog": {
      "type": "type",
      "key": "slide"
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
