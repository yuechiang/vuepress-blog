<template><h1 id="vuepress-踩坑记" tabindex="-1"><a class="header-anchor" href="#vuepress-踩坑记" aria-hidden="true">#</a> vuepress 踩坑记</h1>
<h3 id="添加标签或分类后浏览器端报错" tabindex="-1"><a class="header-anchor" href="#添加标签或分类后浏览器端报错" aria-hidden="true">#</a> 添加标签或分类后浏览器端报错</h3>
<p>解决办法：</p>
<ul>
<li>重新编译或重启服务。</li>
</ul>
<h3 id="图片不能显示" tabindex="-1"><a class="header-anchor" href="#图片不能显示" aria-hidden="true">#</a> 图片不能显示</h3>
<p>原因：</p>
<ul>
<li>引用地址使用了&quot;.&quot;。如：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![图片描述](./tupian.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决办法：</p>
<ul>
<li>引用地址使用&quot;/&quot;开始。如：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![图片描述](/tupain.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
