---
date: 2022-05-16
title: 解决GitHub pages不能及时更新的问题
---

# 解决 GitHub pages 不能及时更新的问题

上传文件到 GitHub 仓库后，GitHub Pages 不能及时更新，原因是 CDN 缓存导致。

通过在 URL 地址后添加“?version=f36af91”可以解决此缓存问题。
