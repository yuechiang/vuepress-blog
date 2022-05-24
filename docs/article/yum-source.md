---
date: 2022-05-23
tag:
  - linux
  - yum
category:
  - linux
---

# Linux 更换 yum 镜像源

1. 安装 wget

```
type wget
# 如果找不到wget命令，需要先安装
yum -y install wget
```

2. 备份

```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

3. 下载

```
# CentOS 7
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
# CentOS 8
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-8.repo
```

4. 生成缓存

```
# 清除缓存
yum clean all
# 生成缓存，建立元数据
yum makecache
```
