export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "波浪起伏",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "layout": "Blog",
    "icon": "home",
    "title": "波浪起伏",
    "heroImage": "/img/logo2.png",
    "heroText": "简约的博客",
    "heroFullScreen": true,
    "tagline": "只有爬上山峰,才能翻越高山。",
    "projects": null,
    "bgImage": "/img/bk1.jpg",
    "footer": "人民的小丑"
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.07,
    "words": 21
  },
  "filePathRelative": "README.md"
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
