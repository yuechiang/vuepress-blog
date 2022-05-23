---
date: 2022-05-22
tag:
  - github
  - speedup
  - tips
category:
  - programming
  - linxu
---

# GitHub 加速

> 参考地址：[提高国内访问 github 速度的 9 种方法!](https://zhuanlan.zhihu.com/p/314071453)

### 通过修改 HOSTS 文件进行加速

**_手动把 cdn 和 ip 地址绑定。_**

第一步：获取 github 的 global.ssl.fastly 地址 访问：http://github.global.ssl.fast... 获取 cdn 和 ip 域名：

![ssl](https://pic2.zhimg.com/80/v2-68d8b3963d66cd6153524cbf01bce201_720w.jpg)

得到：199.232.69.194 https://github.global.ssl.fas...

第二步：获取http://github.com地址
访问：https://github.com.ipaddress.... 获取 cdn 和 ip：

![pic](https://pic3.zhimg.com/80/v2-4bfe0f37ae6928a7f4de0deaf26cdeaa_720w.jpg)

得到：140.82.114.4 http://github.com

第三步：修改 host 文件映射上面查找到的 IP
windows 系统：

1、修改 C:\Windows\System32\drivers\etc\hosts 文件的权限，指定可写入：右击->hosts->属性->安全->编辑->点击 Users->在 Users 的权限“写入”后面打勾。如下：

![hosts](https://pic1.zhimg.com/80/v2-cf6884266b4e074c6c99ba85f0ca8264_720w.jpg)

然后点击确定。

2、右击->hosts->打开方式->选定记本（或者你喜欢的编辑器）->在末尾处添加以下内容：

```bash
199.232.69.194 github.global.ssl.fastly.net
140.82.114.4 github.com
```
