export const data = {
  "key": "v-4567f05c",
  "path": "/article/vim-advanced.html",
  "title": "A Vim Guide for Advanced Users",
  "lang": "en-US",
  "frontmatter": {
    "date": "2022-05-29T00:00:00.000Z",
    "tag": [
      "vim",
      "beginner",
      "linux",
      "editor"
    ],
    "category": [
      "programming",
      "linux"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Useful “g” Keystrokes",
      "slug": "useful-g-keystrokes",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1.5,
    "words": 450
  },
  "filePathRelative": "article/vim-advanced.md"
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
