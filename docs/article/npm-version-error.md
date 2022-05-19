---
date: 2022-05-19
tag:
  - nodejs
  - version
  - 踩坑
  - npm
category:
  - programming
---

# npm 版本兼容导致的 npm ERR! ERESOLVE unable to resolve dependency tree

一：升级或降级 npm 版本，保持一致 npm install -g npm@x.x.x

二：npm install --legacy-peer-deps（推荐）

![图片](https://img2020.cnblogs.com/blog/2397556/202111/2397556-20211102195407107-1171338586.png)

三：使用 cnpm 或者 yarn

> 参考:[https://www.cnblogs.com/it-people/p/15500753.html](https://www.cnblogs.com/it-people/p/15500753.html)
