<template><h1 id="git-每次都需要输入密码的结局办法" tabindex="-1"><a class="header-anchor" href="#git-每次都需要输入密码的结局办法" aria-hidden="true">#</a> git 每次都需要输入密码的结局办法</h1>
<p>使用 git clone 下载代码的时候是连接的 https://而不是 git@git (ssh)的形式，当我们操作 git pull/push 到远程的时候，总是需要输入账号和密码才能操作成功。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --global credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
