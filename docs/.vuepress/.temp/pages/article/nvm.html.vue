<template><h1 id="使用-nvm-管理不同版本的-node-与-npm" tabindex="-1"><a class="header-anchor" href="#使用-nvm-管理不同版本的-node-与-npm" aria-hidden="true">#</a> 使用 nvm 管理不同版本的 node 与 npm</h1>
<h3 id="使用-wget-下载命令" tabindex="-1"><a class="header-anchor" href="#使用-wget-下载命令" aria-hidden="true">#</a> 使用 wget 下载命令</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-curl-命令下载安装" tabindex="-1"><a class="header-anchor" href="#使用-curl-命令下载安装" aria-hidden="true">#</a> 使用 curl 命令下载安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>下载安装完成后，需要重启命令终端</p>
</blockquote>
<h3 id="检查是否安装成功" tabindex="-1"><a class="header-anchor" href="#检查是否安装成功" aria-hidden="true">#</a> 检查是否安装成功</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看哪些-nodejs-版本可以安装" tabindex="-1"><a class="header-anchor" href="#查看哪些-nodejs-版本可以安装" aria-hidden="true">#</a> 查看哪些 nodejs 版本可以安装</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm ls-remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装最新版本的-nodejs" tabindex="-1"><a class="header-anchor" href="#安装最新版本的-nodejs" aria-hidden="true">#</a> 安装最新版本的 nodejs</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm install node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装指定版本的-nodejs" tabindex="-1"><a class="header-anchor" href="#安装指定版本的-nodejs" aria-hidden="true">#</a> 安装指定版本的 nodejs</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm install node 16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="切换到指定版本-如-4-2-2" tabindex="-1"><a class="header-anchor" href="#切换到指定版本-如-4-2-2" aria-hidden="true">#</a> 切换到指定版本,如: 4.2.2：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm use 4.2.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="切换到最新的-4-2-x" tabindex="-1"><a class="header-anchor" href="#切换到最新的-4-2-x" aria-hidden="true">#</a> 切换到最新的 4.2.x：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm use 4.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="切换到最新版" tabindex="-1"><a class="header-anchor" href="#切换到最新版" aria-hidden="true">#</a> 切换到最新版：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm use node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置别名" tabindex="-1"><a class="header-anchor" href="#设置别名" aria-hidden="true">#</a> 设置别名：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm alias awesome-version 4.2.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们给 4.2.2 这个版本号起了一个名字叫做 awesome-version，然后我们可以运行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm use awesome-version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="取消别名" tabindex="-1"><a class="header-anchor" href="#取消别名" aria-hidden="true">#</a> 取消别名：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm unalias awesome-version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置-default-这个特殊别名" tabindex="-1"><a class="header-anchor" href="#设置-default-这个特殊别名" aria-hidden="true">#</a> 设置 default 这个特殊别名：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm alias default node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列出已安装实例" tabindex="-1"><a class="header-anchor" href="#列出已安装实例" aria-hidden="true">#</a> 列出已安装实例</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nvm ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
