export const themeData = {
  "blog": {
    "name": "简约的blog",
    "sidebarDisplay": "always",
    "roundAvatar": true,
    "avatar": "/img/logo.png"
  },
  "encrypt": {},
  "pure": false,
  "iconPrefix": "",
  "darkmode": "switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "lang": "en-US",
      "navbarLocales": {
        "langName": "English",
        "selectLangText": "Language",
        "selectLangAriaLabel": "Select language"
      },
      "metaLocales": {
        "author": "Author",
        "date": "Writing Date",
        "origin": "Original",
        "views": "Page views",
        "category": "Category",
        "tag": "Tags",
        "readingTime": "Reading Time",
        "words": "Words",
        "toc": "On This Page",
        "prev": "Prev",
        "next": "Next",
        "lastUpdated": "Last update",
        "contributors": "Contributors",
        "editLink": "Edit this page"
      },
      "blogLocales": {
        "article": "Articles",
        "articleList": "Article List",
        "category": "Category",
        "tag": "Tags",
        "timeline": "Timeline",
        "timelineTitle": "Yesterday Once More!",
        "all": "All",
        "intro": "Personal Intro",
        "star": "Star",
        "slides": "Slides",
        "encrypt": "Encrypted"
      },
      "paginationLocales": {
        "prev": "Prev",
        "next": "Next",
        "navigate": "Jump to",
        "action": "Go",
        "errorText": "Please enter a number between 1 and $page !"
      },
      "outlookLocales": {
        "themeColor": "Theme Color",
        "darkmode": "Theme Mode",
        "fullscreen": "Full Screen"
      },
      "encryptLocales": {
        "title": "Page Encrypted",
        "placeholder": "Enter password",
        "remember": "Remember password",
        "errorHint": "Please enter the correct password!"
      },
      "routeLocales": {
        "404msg": [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links."
        ],
        "back": "Go back",
        "home": "Take me home",
        "openInNewWindow": "Open in new window"
      },
      "blog": {},
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        "/zh/README.md",
        "/zh/guide/README.md",
        "/zh/config/README.md"
      ],
      "sidebarIcon": true,
      "headerDepth": 2,
      "logo": "/img/logo2.png",
      "breadcrumb": false,
      "author": "简约",
      "navbar": [
        {
          "text": "博客",
          "link": "/",
          "icon": "creative"
        },
        {
          "text": "配置",
          "link": "/zh/config/README.md",
          "icon": "config"
        },
        {
          "text": "常见问题",
          "link": "/zh/faq.md",
          "icon": "question",
          "activeMatch": "^/zh/faq"
        },
        {
          "text": "基础",
          "icon": "info",
          "prefix": "/zh/basic",
          "children": [
            "/zh/basic/markdown.md",
            "/zh/basic/vuepress.md"
          ]
        },
        {
          "text": "插件列表",
          "icon": "plugin",
          "children": [
            {
              "text": "内置插件",
              "children": [
                "/zh/basic/markdown.md",
                "/zh/basic/vuepress.md"
              ]
            },
            {
              "text": "外部插件",
              "children": [
                "/zh/basic/markdown.md",
                "/zh/basic/vuepress.md"
              ]
            }
          ]
        }
      ]
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
