<template><h1 id="npm-版本兼容导致的-npm-err-eresolve-unable-to-resolve-dependency-tree" tabindex="-1"><a class="header-anchor" href="#npm-版本兼容导致的-npm-err-eresolve-unable-to-resolve-dependency-tree" aria-hidden="true">#</a> npm 版本兼容导致的 npm ERR! ERESOLVE unable to resolve dependency tree</h1>
<p>一：升级或降级 npm 版本，保持一致 npm install -g npm@x.x.x</p>
<p>二：npm install --legacy-peer-deps（推荐）</p>
<p><img src="https://img2020.cnblogs.com/blog/2397556/202111/2397556-20211102195407107-1171338586.png" alt="图片"></p>
<p>三：使用 cnpm 或者 yarn</p>
<blockquote>
<p>参考:<a href="https://www.cnblogs.com/it-people/p/15500753.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/it-people/p/15500753.html<ExternalLinkIcon/></a></p>
</blockquote>
</template>
