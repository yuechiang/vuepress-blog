export const data = {
  "key": "v-6136d5b8",
  "path": "/article/myblog01.html",
  "title": "My first blog",
  "lang": "en-US",
  "frontmatter": {
    "date": "2022-05-16T00:00:00.000Z",
    "title": "My first blog",
    "bgImage": "logo.png"
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.03,
    "words": 10
  },
  "filePathRelative": "article/myblog01.md"
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
