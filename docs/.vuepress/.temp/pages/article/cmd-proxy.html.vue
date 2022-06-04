<template><h1 id="win10-cmd-使用代理" tabindex="-1"><a class="header-anchor" href="#win10-cmd-使用代理" aria-hidden="true">#</a> win10 CMD 使用代理</h1>
<p>进入 cmd 命令窗口输入如下命令:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:<span class="token operator">&lt;</span>代理端口<span class="token operator">></span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1:<span class="token operator">&lt;</span>代理端口<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>测试:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -vv www.google.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
