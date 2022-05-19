<template><h1 id="markdown-学习笔记" tabindex="-1"><a class="header-anchor" href="#markdown-学习笔记" aria-hidden="true">#</a> MarkDown 学习笔记</h1>
<h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><nav class="table-of-contents"><ul><li><RouterLink to="#目录">目录</RouterLink></li><li><RouterLink to="#表格">表格</RouterLink></li><li><RouterLink to="#删除线">删除线</RouterLink></li><li><RouterLink to="#任务列表">任务列表</RouterLink></li><li><RouterLink to="#上标和下标">上标和下标</RouterLink></li><li><RouterLink to="#图片大小及对齐方式">图片大小及对齐方式</RouterLink></li><li><RouterLink to="#导入代码块">导入代码块</RouterLink></li></ul></nav>
<h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3>
<p>要添加表，请使用三个或多个连字符（---）创建每列的标题，并使用管道（|）分隔每列。您可以选择在表的任一端添加管道。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Syntax        </span><span class="token punctuation">|</span><span class="token table-header important"> Description </span><span class="token punctuation">|</span><span class="token table-header important"> Test Text      </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-------------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------</span> <span class="token punctuation">|</span> <span class="token punctuation">--------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> Header        </span><span class="token punctuation">|</span><span class="token table-data"> Title       </span><span class="token punctuation">|</span><span class="token table-data"> Here's this JY </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> Paragraph one </span><span class="token punctuation">|</span><span class="token table-data"> your Text   </span><span class="token punctuation">|</span><span class="token table-data"> And more       </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Syntax</th>
<th>Description</th>
<th>Test Text</th>
</tr>
</thead>
<tbody>
<tr>
<td>Header</td>
<td>Title</td>
<td>Here's this JY</td>
</tr>
<tr>
<td>Paragraph one</td>
<td>your Text</td>
<td>And more</td>
</tr>
</tbody>
</table>
<h4 id="表格对齐" tabindex="-1"><a class="header-anchor" href="#表格对齐" aria-hidden="true">#</a> 表格对齐</h4>
<p>您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Syntax        </span><span class="token punctuation">|</span><span class="token table-header important"> Description </span><span class="token punctuation">|</span><span class="token table-header important">      Test Text </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:------------</span> <span class="token punctuation">|</span> <span class="token punctuation">:---------:</span> <span class="token punctuation">|</span> <span class="token punctuation">-------------:</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> Header        </span><span class="token punctuation">|</span><span class="token table-data">    Title    </span><span class="token punctuation">|</span><span class="token table-data"> Here's this JY </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> Paragraph One </span><span class="token punctuation">|</span><span class="token table-data">   My Text   </span><span class="token punctuation">|</span><span class="token table-data">       And more </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">Syntax</th>
<th style="text-align:center">Description</th>
<th style="text-align:right">Test Text</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Header</td>
<td style="text-align:center">Title</td>
<td style="text-align:right">Here's this JY</td>
</tr>
<tr>
<td style="text-align:left">Paragraph One</td>
<td style="text-align:center">My Text</td>
<td style="text-align:right">And more</td>
</tr>
</tbody>
</table>
<h3 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线" aria-hidden="true">#</a> 删除线</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~~</span><span class="token content">世界是平坦的。</span><span class="token punctuation">~~</span></span> 我们现在知道世界是圆的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><s>世界是平坦的。</s> 我们现在知道世界是圆的。</p>
<h3 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表" aria-hidden="true">#</a> 任务列表</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> [x] Write the press release
<span class="token list punctuation">-</span> [ ] Update the website
<span class="token list punctuation">-</span> [ ] Contact the media
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[x] Write the press release</li>
<li>[ ] Update the website</li>
<li>[ ] Contact the media</li>
</ul>
<h3 id="上标和下标" tabindex="-1"><a class="header-anchor" href="#上标和下标" aria-hidden="true">#</a> 上标和下标</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>H&lt;sub>2&lt;/sub>O CO&lt;sub>2&lt;/sub>
爆米&lt;sup>TM&lt;/sup>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>H<sub>2</sub>O CO<sub>2</sub>
爆米<sup>TM</sup></p>
<h3 id="图片大小及对齐方式" tabindex="-1"><a class="header-anchor" href="#图片大小及对齐方式" aria-hidden="true">#</a> 图片大小及对齐方式</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/img/logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">div</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="/img/logo.png" width = "100" height = "100" div align=right />
<br>
<br>
<br>
<br>
<h3 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块" aria-hidden="true">#</a> 导入代码块</h3>
<!-- 最简单的语法 -->
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@[code](../foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只导入这个文件的一部分：</p>
<!-- 仅导入第 1 行至第 10 行 -->
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@[code{1-10}](../foo.js)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
