import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"波浪起伏","icon":"home","type":"home","readingTime":{"minutes":0.07,"words":21}},["/index.html","/README.md"]],
  ["v-29425b72","/article/1.%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue-reactivity.html",{"title":"1.跟尤雨溪学 vue 之响应性","type":"article","readingTime":{"minutes":0.71,"words":212},"date":"2022-05-18T00:00:00.000Z","category":["programming"],"tag":["vue","尤雨溪","源码","响应性","reactivity"]},["/article/1.跟尤雨溪学vue-reactivity.html","/article/1.%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue-reactivity","/article/1.跟尤雨溪学vue-reactivity.md","/article/1.%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue-reactivity.md"]],
  ["v-0be96e40","/article/2.%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue-plugin.html",{"title":"跟尤雨溪学 vue 之 plugin","type":"article","readingTime":{"minutes":0.52,"words":157},"date":"2022-05-18T00:00:00.000Z","category":["programming"],"tag":["vue","尤雨溪","源码"]},["/article/2.跟尤雨溪学vue-plugin.html","/article/2.%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue-plugin","/article/2.跟尤雨溪学vue-plugin.md","/article/2.%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue-plugin.md"]],
  ["v-61059cc9","/article/Bats.html",{"title":"Bats-core: Bash Automated Testing System","type":"article","readingTime":{"minutes":0.2,"words":59},"date":"2022-05-17T00:00:00.000Z","category":["programming"],"tag":["bash","bats","test","shell"]},["/article/Bats","/article/Bats.md"]],
  ["v-407f85f5","/article/daily2022%E5%B9%B45%E6%9C%8817%E6%97%A5.html",{"title":"今天开始装修 HOUSE 了","type":"article","readingTime":{"minutes":0.04,"words":11},"date":"2022-05-17T00:00:00.000Z","category":["live"],"tag":["daily","live"]},["/article/daily2022年5月17日.html","/article/daily2022%E5%B9%B45%E6%9C%8817%E6%97%A5","/article/daily2022年5月17日.md","/article/daily2022%E5%B9%B45%E6%9C%8817%E6%97%A5.md"]],
  ["v-28801a33","/article/daily2022%E5%B9%B45%E6%9C%8817%E6%97%A502.html",{"title":"好不容易搭建一个博客却被抢了，哎","type":"article","readingTime":{"minutes":0.1,"words":30},"date":"2022-05-17T00:00:00.000Z","category":["live"],"tag":["live"]},["/article/daily2022年5月17日02.html","/article/daily2022%E5%B9%B45%E6%9C%8817%E6%97%A502","/article/daily2022年5月17日02.md","/article/daily2022%E5%B9%B45%E6%9C%8817%E6%97%A502.md"]],
  ["v-48e3e1fc","/article/git_remote_show.html",{"title":"git-查看远程仓库信息","type":"article","readingTime":{"minutes":0.05,"words":14},"date":"2022-05-17T00:00:00.000Z","category":["programming"],"tag":["git"]},["/article/git_remote_show","/article/git_remote_show.md"]],
  ["v-2f49550e","/article/github_action.html",{"title":"GitHub Actions","type":"article","readingTime":{"minutes":0.76,"words":227},"date":"2022-05-17T00:00:00.000Z"},["/article/github_action","/article/github_action.md"]],
  ["v-56161c6c","/article/github_error_10054.html",{"title":"解决 GIT 的 OpenSSL SSL_read: Connection was reset, errno 10054 问题","type":"article","readingTime":{"minutes":0.13,"words":39},"date":"2022-05-17T00:00:00.000Z","tag":["github"]},["/article/github_error_10054","/article/github_error_10054.md"]],
  ["v-cfbc381e","/article/github_page_cached.html",{"title":"解决GitHub pages不能及时更新的问题","type":"article","readingTime":{"minutes":0.19,"words":58},"date":"2022-05-16T00:00:00.000Z"},["/article/github_page_cached","/article/github_page_cached.md"]],
  ["v-12c882d0","/article/markdown.html",{"title":"MarkDown 学习笔记","type":"article","readingTime":{"minutes":1.14,"words":343},"date":"2022-05-17T00:00:00.000Z","category":["programming"],"tag":["markdown"]},["/article/markdown","/article/markdown.md"]],
  ["v-6136d5b8","/article/myblog01.html",{"title":"My first blog","type":"article","readingTime":{"minutes":0.03,"words":10},"date":"2022-05-16T00:00:00.000Z"},["/article/myblog01","/article/myblog01.md"]],
  ["v-62ebae57","/article/myblog02.html",{"title":"my blog 02","type":"article","readingTime":{"minutes":0.09,"words":28},"date":"2022-05-01T00:00:00.000Z","star":true},["/article/myblog02","/article/myblog02.md"]],
  ["v-44a2347a","/article/npm-version-error.html",{"title":"npm 版本兼容导致的 npm ERR! ERESOLVE unable to resolve dependency tree","type":"article","readingTime":{"minutes":0.24,"words":73},"date":"2022-05-19T00:00:00.000Z","category":["programming"],"tag":["nodejs","version","踩坑","npm"]},["/article/npm-version-error","/article/npm-version-error.md"]],
  ["v-086c8374","/article/nvm.html",{"title":"使用 nvm 管理不同版本的 node 与 npm","type":"article","readingTime":{"minutes":0.7,"words":211},"date":"2022-05-19T00:00:00.000Z","category":["programming"],"tag":["nodejs","version","nvm"]},["/article/nvm","/article/nvm.md"]],
  ["v-8af1a6b8","/article/vim-select-all.html",{"title":"How To “Select All” In Vim/Vi?","type":"article","readingTime":{"minutes":0.4,"words":121},"date":"2022-05-18T00:00:00.000Z","category":["programming","office"],"tag":["vim","office","editor"]},["/article/vim-select-all","/article/vim-select-all.md"]],
  ["v-3316772e","/article/vuepress-theme-hope-comment.html",{"title":"vuepress-theme-hope评论功能","type":"article","readingTime":{"minutes":0.19,"words":57},"date":"2022-05-16T00:00:00.000Z","star":true},["/article/vuepress-theme-hope-comment","/article/vuepress-theme-hope-comment.md"]],
  ["v-d93f55bc","/article/vuepress%E8%B8%A9%E5%9D%91.html",{"title":"vuepress 踩坑记","type":"article","readingTime":{"minutes":0.24,"words":72},"date":"2022-05-17T00:00:00.000Z","category":["programming"],"tag":["vuepress","vuepress-theme-hope","踩坑"]},["/article/vuepress踩坑.html","/article/vuepress%E8%B8%A9%E5%9D%91","/article/vuepress踩坑.md","/article/vuepress%E8%B8%A9%E5%9D%91.md"]],
  ["v-34f88824","/article/%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue.html",{"title":"跟尤雨溪学 vue","type":"article","readingTime":{"minutes":0.17,"words":50},"date":"2022-05-17T00:00:00.000Z","category":["programming"],"tag":["vue","尤雨溪","源码"]},["/article/跟尤雨溪学vue.html","/article/%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue","/article/跟尤雨溪学vue.md","/article/%E8%B7%9F%E5%B0%A4%E9%9B%A8%E6%BA%AA%E5%AD%A6vue.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0}},["/404"]],
  ["v-5bc93818","/category/",{"title":"Category","type":"page","readingTime":{"minutes":0,"words":0}},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"Articles","type":"page","readingTime":{"minutes":0,"words":0}},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"Encrypted","type":"page","readingTime":{"minutes":0,"words":0}},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"Slides","type":"page","readingTime":{"minutes":0,"words":0}},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"Star","type":"page","readingTime":{"minutes":0,"words":0}},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"Timeline","type":"page","readingTime":{"minutes":0,"words":0}},["/timeline/index.html"]],
  ["v-48a28e8e","/category/programming/",{"title":"programming Category","type":"page","readingTime":{"minutes":0,"words":0}},["/category/programming/index.html"]],
  ["v-b302da92","/tag/vue/",{"title":"vue Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/vue/index.html"]],
  ["v-585183ab","/category/live/",{"title":"live Category","type":"page","readingTime":{"minutes":0,"words":0}},["/category/live/index.html"]],
  ["v-7ec32133","/tag/%E5%B0%A4%E9%9B%A8%E6%BA%AA/",{"title":"尤雨溪 Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/尤雨溪/","/tag/%E5%B0%A4%E9%9B%A8%E6%BA%AA/index.html"]],
  ["v-22b495db","/category/office/",{"title":"office Category","type":"page","readingTime":{"minutes":0,"words":0}},["/category/office/index.html"]],
  ["v-07f91f24","/tag/%E6%BA%90%E7%A0%81/",{"title":"源码 Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/源码/","/tag/%E6%BA%90%E7%A0%81/index.html"]],
  ["v-29cfad9a","/tag/%E5%93%8D%E5%BA%94%E6%80%A7/",{"title":"响应性 Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/响应性/","/tag/%E5%93%8D%E5%BA%94%E6%80%A7/index.html"]],
  ["v-4001cb1f","/tag/reactivity/",{"title":"reactivity Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/reactivity/index.html"]],
  ["v-2831124d","/tag/bash/",{"title":"bash Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/bash/index.html"]],
  ["v-28311763","/tag/bats/",{"title":"bats Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/bats/index.html"]],
  ["v-29308c4f","/tag/test/",{"title":"test Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/test/index.html"]],
  ["v-09601066","/tag/shell/",{"title":"shell Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/shell/index.html"]],
  ["v-3d5315f8","/tag/daily/",{"title":"daily Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/daily/index.html"]],
  ["v-28c1ab35","/tag/live/",{"title":"live Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/live/index.html"]],
  ["v-b310d42a","/tag/git/",{"title":"git Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/git/index.html"]],
  ["v-132a6ac4","/tag/github/",{"title":"github Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/github/index.html"]],
  ["v-484552dc","/tag/markdown/",{"title":"markdown Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/markdown/index.html"]],
  ["v-721080b6","/tag/nodejs/",{"title":"nodejs Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/nodejs/index.html"]],
  ["v-16b352a5","/tag/version/",{"title":"version Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/version/index.html"]],
  ["v-49d344b9","/tag/%E8%B8%A9%E5%9D%91/",{"title":"踩坑 Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/踩坑/","/tag/%E8%B8%A9%E5%9D%91/index.html"]],
  ["v-b30a441c","/tag/npm/",{"title":"npm Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/npm/index.html"]],
  ["v-b30a1710","/tag/nvm/",{"title":"nvm Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/nvm/index.html"]],
  ["v-b30332ba","/tag/vim/",{"title":"vim Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/vim/index.html"]],
  ["v-d08dfa36","/tag/office/",{"title":"office Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/office/index.html"]],
  ["v-f8ff1358","/tag/editor/",{"title":"editor Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/editor/index.html"]],
  ["v-ed16b278","/tag/vuepress/",{"title":"vuepress Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/vuepress/index.html"]],
  ["v-6ccaed6d","/tag/vuepress-theme-hope/",{"title":"vuepress-theme-hope Tags","type":"page","readingTime":{"minutes":0,"words":0}},["/tag/vuepress-theme-hope/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)