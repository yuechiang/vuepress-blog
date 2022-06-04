---
date: 2022-05-28
tag:
  - windows
  - win10
  - cmd
  - proxy
category:
  - windows
---

# win10 CMD 使用代理

进入 cmd 命令窗口输入如下命令:

```bash
set http_proxy=127.0.0.1:<代理端口>
set https_proxy=127.0.0.1:<代理端口>
```

测试:

```bash
curl -vv www.google.com
```
