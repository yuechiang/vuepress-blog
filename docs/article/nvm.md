---
date: 2022-05-19
tag:
  - nodejs
  - version
  - nvm
category:
  - programming
---

# 使用 nvm 管理不同版本的 node 与 npm

### 使用 wget 下载命令

```
 wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

### 使用 curl 命令下载安装

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

> 下载安装完成后，需要重启命令终端

### 检查是否安装成功

```
nvm -v
```

### 查看哪些 nodejs 版本可以安装

```
nvm ls-remote
```

### 安装最新版本的 nodejs

```
nvm install node
```

### 安装指定版本的 nodejs

```
nvm install node 16
```

### 切换到指定版本,如: 4.2.2：

```
nvm use 4.2.2
```

### 切换到最新的 4.2.x：

```
nvm use 4.2
```

### 切换到最新版：

```
nvm use node
```

### 设置别名：

```
nvm alias awesome-version 4.2.2
```

我们给 4.2.2 这个版本号起了一个名字叫做 awesome-version，然后我们可以运行：

```
nvm use awesome-version
```

### 取消别名：

```
nvm unalias awesome-version
```

### 设置 default 这个特殊别名：

```
nvm alias default node
```

### 列出已安装实例

```
nvm ls
```
