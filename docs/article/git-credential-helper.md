---
date: 2022-05-21
tag:
  - git
  - credential
  - login
  - push
  - pull
catetory:
  - programming
---

# git 每次都需要输入密码的结局办法

使用 git clone 下载代码的时候是连接的 https://而不是 git@git (ssh)的形式，当我们操作 git pull/push 到远程的时候，总是需要输入账号和密码才能操作成功。

```bash
git config --global credential.helper store
```
