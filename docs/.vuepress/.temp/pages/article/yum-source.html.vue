<template><h1 id="linux-更换-yum-镜像源" tabindex="-1"><a class="header-anchor" href="#linux-更换-yum-镜像源" aria-hidden="true">#</a> Linux 更换 yum 镜像源</h1>
<ol>
<li>安装 wget</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>type wget
# 如果找不到wget命令，需要先安装
yum -y install wget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>备份</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>下载</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># CentOS 7
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
# CentOS 8
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-8.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>生成缓存</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 清除缓存
yum clean all
# 生成缓存，建立元数据
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
