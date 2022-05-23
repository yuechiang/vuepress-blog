---
date: 2022-05-22
tag:
  - linux
  - watch
  - monitor
category:
  - linux
  - programming
---

# 使用 Linux 的 watch 命令观察命令和任务的变化

## 使用方法

```bash
watch <command>
```

例如:

```bash
watch ls . # 观察当前目录中文件变化情况
watch -n 1 ls . # 每隔1秒钟观察一次当前目录中文件变化情况
```
