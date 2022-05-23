<template><h1 id="使用-linux-的-watch-命令观察命令和任务的变化" tabindex="-1"><a class="header-anchor" href="#使用-linux-的-watch-命令观察命令和任务的变化" aria-hidden="true">#</a> 使用 Linux 的 watch 命令观察命令和任务的变化</h1>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">watch</span> <span class="token operator">&lt;</span>command<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">watch</span> <span class="token function">ls</span> <span class="token builtin class-name">.</span> <span class="token comment"># 观察当前目录中文件变化情况</span>
<span class="token function">watch</span> -n <span class="token number">1</span> <span class="token function">ls</span> <span class="token builtin class-name">.</span> <span class="token comment"># 每隔1秒钟观察一次当前目录中文件变化情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
