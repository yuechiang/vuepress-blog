---
date: 2022-05-17
tag:
  - markdown
category:
  - programming
---

# MarkDown 学习笔记

### 目录

```
[[toc]]
```

[[toc]]

### 表格

要添加表，请使用三个或多个连字符（---）创建每列的标题，并使用管道（|）分隔每列。您可以选择在表的任一端添加管道。

```md
| Syntax        | Description | Test Text      |
| ------------- | ----------- | -------------- |
| Header        | Title       | Here's this JY |
| Paragraph one | your Text   | And more       |
```

| Syntax        | Description | Test Text      |
| ------------- | ----------- | -------------- |
| Header        | Title       | Here's this JY |
| Paragraph one | your Text   | And more       |

#### 表格对齐

您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。

```md
| Syntax        | Description |      Test Text |
| :------------ | :---------: | -------------: |
| Header        |    Title    | Here's this JY |
| Paragraph One |   My Text   |       And more |
```

| Syntax        | Description |      Test Text |
| :------------ | :---------: | -------------: |
| Header        |    Title    | Here's this JY |
| Paragraph One |   My Text   |       And more |

### 删除线

```md
~~世界是平坦的。~~ 我们现在知道世界是圆的。
```

~~世界是平坦的。~~ 我们现在知道世界是圆的。

### 任务列表

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### 上标和下标

```
H<sub>2</sub>O CO<sub>2</sub>
爆米<sup>TM</sup>
```

H<sub>2</sub>O CO<sub>2</sub>
爆米<sup>TM</sup>

### 图片大小及对齐方式

```html
<img src="/img/logo.png" width="100" height="100" div align="right" />
```

<img src="/img/logo.png" width = "100" height = "100" div align=right />
<br>
<br>
<br>
<br>

### 导入代码块

<!-- 最简单的语法 -->

```
@[code](../foo.js)
```

只导入这个文件的一部分：

<!-- 仅导入第 1 行至第 10 行 -->

```
@[code{1-10}](../foo.js)
```
