---
date: 2022-05-17
tag:
  - github
---

# 解决 GIT 的 OpenSSL SSL_read: Connection was reset, errno 10054 问题

执行下面命令后问题解决。（有时需要多执行几次）

```shell
git config --global http.sslVerify "false"
```
