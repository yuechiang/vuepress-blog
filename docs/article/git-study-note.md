---
date: 2022-05-22
tag:
  - git
  - linux
  - github
  - gitee
category:
  - linux
  - programming
---

# Git 学习笔记

## 配置文件

### 全局配置文件

```bash
cat ~/.gitconfig
```

### 局部配置文件

```bash
cd <仓库目录>
cat .git/config
```

### 查看本地仓库状态

```bash
git status
```

## 查看 objects 目录内容

查看文件类型用参数 -t

```bash
git cat-file -t <文件hash名>
```

查看文件内容参数 -p

```bash
git cat-file -p <文件hash名>
```

查看文件大小参数 -s

```bash
git cat-file -s <文件hash名>
```

## 查看缓存区 index 内容

```bash
git ls-files # 查看文件名
git ls-files -s # 查看文件详细信息
```

## 文件的状态

![fileStatus](/img/git-fileStatus.png)

## 分支 Branch

![branch](/img/git-branch.png)

分支指向 commit 对象

### 查看分支

```bash
git branch
```

### 创建分支

```bash
git branch <branch name>
git checkout -b <branch name> # 创建一个指向 commit 的分支
```

### 删除分支

```bash
git branch -d <branch name>
git branch -D <branch name> # 强制删除
```

### 切换分支

```bash
git checkout <branch name>
```

## 查看 commit 历史记录

```bash
git reflog
```

## 对比不同

```bash
git diff # 对比工作区与仓库的不同
git diff --cached # 对比索引区与仓库的不同
```

## 上传仓库

```bash
git push -u origin master # 把当前分支上传到远程仓库origin的master分支.
```

## Git 压缩仓库

```bash
git gc
```

**_把.git/objects 目录下的文件压缩并打包到.git/objects/pack 目录下。_**

## Git 清理仓库垃圾对象

```bash
git prune
```

## 查看垃圾对象

```bash
git fsck
```

## 查看帮助

```bash
git help <command> # 例如: git help push
```

## 查看远程仓库分支

```bash
git branch -r
git branch -a
git branch -vv
```

## 查看远程仓库地址

```bash
git remote -v
```

## 同步远程分支

```bash
git fetch # 只增不减
git fetch --prune # 又增又减
```

## 回滚

想要让 Git 回退历史，有以下步骤：

使用 git log 命令，查看分支提交历史，确认需要回退的版本
使用 git reset --hard commit_id 命令，进行版本回退
使用 git push origin 命令，推送至远程分支
快捷命令：

```bash
git reset --hard HEAD^ # 回滚到上一个版本
```

【注：HEAD 是指向当前版本的指针，HEAD^表示上个版本,HEAD^^表示上上个版本】

如果修改到的文件比较少，我们可以不通过命令回滚的方式，手动删除之前的修改，再进行提交。
