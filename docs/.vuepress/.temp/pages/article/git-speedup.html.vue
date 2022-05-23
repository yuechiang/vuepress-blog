<template><h1 id="github-加速" tabindex="-1"><a class="header-anchor" href="#github-加速" aria-hidden="true">#</a> GitHub 加速</h1>
<blockquote>
<p>参考地址：<a href="https://zhuanlan.zhihu.com/p/314071453" target="_blank" rel="noopener noreferrer">提高国内访问 github 速度的 9 种方法!<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="通过修改-hosts-文件进行加速" tabindex="-1"><a class="header-anchor" href="#通过修改-hosts-文件进行加速" aria-hidden="true">#</a> 通过修改 HOSTS 文件进行加速</h3>
<p><strong><em>手动把 cdn 和 ip 地址绑定。</em></strong></p>
<p>第一步：获取 github 的 global.ssl.fastly 地址 访问：http://github.global.ssl.fast... 获取 cdn 和 ip 域名：</p>
<p><img src="https://pic2.zhimg.com/80/v2-68d8b3963d66cd6153524cbf01bce201_720w.jpg" alt="ssl"></p>
<p>得到：199.232.69.194 https://github.global.ssl.fas...</p>
<p>第二步：获取http://github.com地址
访问：https://github.com.ipaddress.... 获取 cdn 和 ip：</p>
<p><img src="https://pic3.zhimg.com/80/v2-4bfe0f37ae6928a7f4de0deaf26cdeaa_720w.jpg" alt="pic"></p>
<p>得到：140.82.114.4 http://github.com</p>
<p>第三步：修改 host 文件映射上面查找到的 IP
windows 系统：</p>
<p>1、修改 C:\Windows\System32\drivers\etc\hosts 文件的权限，指定可写入：右击-&gt;hosts-&gt;属性-&gt;安全-&gt;编辑-&gt;点击 Users-&gt;在 Users 的权限“写入”后面打勾。如下：</p>
<p><img src="https://pic1.zhimg.com/80/v2-cf6884266b4e074c6c99ba85f0ca8264_720w.jpg" alt="hosts"></p>
<p>然后点击确定。</p>
<p>2、右击-&gt;hosts-&gt;打开方式-&gt;选定记本（或者你喜欢的编辑器）-&gt;在末尾处添加以下内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">199.232</span>.69.194 github.global.ssl.fastly.net
<span class="token number">140.82</span>.114.4 github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
