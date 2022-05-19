<template><h1 id="解决-git-的-openssl-ssl-read-connection-was-reset-errno-10054-问题" tabindex="-1"><a class="header-anchor" href="#解决-git-的-openssl-ssl-read-connection-was-reset-errno-10054-问题" aria-hidden="true">#</a> 解决 GIT 的 OpenSSL SSL_read: Connection was reset, errno 10054 问题</h1>
<p>执行下面命令后问题解决。（有时需要多执行几次）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config --global http.sslVerify <span class="token string">"false"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
