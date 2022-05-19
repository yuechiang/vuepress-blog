export const data = {
  "key": "v-62ebae57",
  "path": "/article/myblog02.html",
  "title": "my blog 02",
  "lang": "en-US",
  "frontmatter": {
    "date": "2022-05-01T00:00:00.000Z",
    "title": "my blog 02",
    "star": true
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.09,
    "words": 28
  },
  "filePathRelative": "article/myblog02.md"
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
