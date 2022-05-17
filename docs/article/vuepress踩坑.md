---
date: 2022-05-17
tag:
  - vuepress
  - vuepress-theme-hope
  - 踩坑
category:
  - programming
---

# vuepress 踩坑记

### 添加标签或分类后浏览器端报错

解决办法：

- 重新编译或重启服务。

### 图片不能显示

原因：

- 引用地址使用了"."。如：

```
![图片描述](./tupian.png)
```

解决办法：

- 引用地址使用"/"开始。如：

```
![图片描述](/tupain.png)
```
