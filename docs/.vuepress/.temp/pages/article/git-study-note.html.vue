<template><h1 id="git-学习笔记" tabindex="-1"><a class="header-anchor" href="#git-学习笔记" aria-hidden="true">#</a> Git 学习笔记</h1>
<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>
<h3 id="全局配置文件" tabindex="-1"><a class="header-anchor" href="#全局配置文件" aria-hidden="true">#</a> 全局配置文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.gitconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="局部配置文件" tabindex="-1"><a class="header-anchor" href="#局部配置文件" aria-hidden="true">#</a> 局部配置文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>仓库目录<span class="token operator">></span>
<span class="token function">cat</span> .git/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看本地仓库状态" tabindex="-1"><a class="header-anchor" href="#查看本地仓库状态" aria-hidden="true">#</a> 查看本地仓库状态</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看-objects-目录内容" tabindex="-1"><a class="header-anchor" href="#查看-objects-目录内容" aria-hidden="true">#</a> 查看 objects 目录内容</h2>
<p>查看文件类型用参数 -t</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> cat-file -t <span class="token operator">&lt;</span>文件hash名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看文件内容参数 -p</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> cat-file -p <span class="token operator">&lt;</span>文件hash名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看文件大小参数 -s</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> cat-file -s <span class="token operator">&lt;</span>文件hash名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看缓存区-index-内容" tabindex="-1"><a class="header-anchor" href="#查看缓存区-index-内容" aria-hidden="true">#</a> 查看缓存区 index 内容</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> ls-files <span class="token comment"># 查看文件名</span>
<span class="token function">git</span> ls-files -s <span class="token comment"># 查看文件详细信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件的状态" tabindex="-1"><a class="header-anchor" href="#文件的状态" aria-hidden="true">#</a> 文件的状态</h2>
<p><img src="/img/git-fileStatus.png" alt="fileStatus"></p>
<h2 id="分支-branch" tabindex="-1"><a class="header-anchor" href="#分支-branch" aria-hidden="true">#</a> 分支 Branch</h2>
<p><img src="/img/git-branch.png" alt="branch"></p>
<p>分支指向 commit 对象</p>
<h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">&lt;</span>branch name<span class="token operator">></span>
<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>branch name<span class="token operator">></span> <span class="token comment"># 创建一个指向 commit 的分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch -d <span class="token operator">&lt;</span>branch name<span class="token operator">></span>
<span class="token function">git</span> branch -D <span class="token operator">&lt;</span>branch name<span class="token operator">></span> <span class="token comment"># 强制删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token operator">&lt;</span>branch name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看-commit-历史记录" tabindex="-1"><a class="header-anchor" href="#查看-commit-历史记录" aria-hidden="true">#</a> 查看 commit 历史记录</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="对比不同" tabindex="-1"><a class="header-anchor" href="#对比不同" aria-hidden="true">#</a> 对比不同</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> <span class="token comment"># 对比工作区与仓库的不同</span>
<span class="token function">git</span> <span class="token function">diff</span> --cached <span class="token comment"># 对比索引区与仓库的不同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传仓库" tabindex="-1"><a class="header-anchor" href="#上传仓库" aria-hidden="true">#</a> 上传仓库</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push -u origin master <span class="token comment"># 把当前分支上传到远程仓库origin的master分支.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-压缩仓库" tabindex="-1"><a class="header-anchor" href="#git-压缩仓库" aria-hidden="true">#</a> Git 压缩仓库</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> gc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><em>把.git/objects 目录下的文件压缩并打包到.git/objects/pack 目录下。</em></strong></p>
<h2 id="git-清理仓库垃圾对象" tabindex="-1"><a class="header-anchor" href="#git-清理仓库垃圾对象" aria-hidden="true">#</a> Git 清理仓库垃圾对象</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看垃圾对象" tabindex="-1"><a class="header-anchor" href="#查看垃圾对象" aria-hidden="true">#</a> 查看垃圾对象</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">fsck</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span> <span class="token operator">&lt;</span>command<span class="token operator">></span> <span class="token comment"># 例如: git help push</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看远程仓库分支" tabindex="-1"><a class="header-anchor" href="#查看远程仓库分支" aria-hidden="true">#</a> 查看远程仓库分支</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch -r
<span class="token function">git</span> branch -a
<span class="token function">git</span> branch -vv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看远程仓库地址" tabindex="-1"><a class="header-anchor" href="#查看远程仓库地址" aria-hidden="true">#</a> 查看远程仓库地址</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="同步远程分支" tabindex="-1"><a class="header-anchor" href="#同步远程分支" aria-hidden="true">#</a> 同步远程分支</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch <span class="token comment"># 只增不减</span>
<span class="token function">git</span> fetch --prune <span class="token comment"># 又增又减</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回滚" tabindex="-1"><a class="header-anchor" href="#回滚" aria-hidden="true">#</a> 回滚</h2>
<p>想要让 Git 回退历史，有以下步骤：</p>
<p>使用 git log 命令，查看分支提交历史，确认需要回退的版本
使用 git reset --hard commit_id 命令，进行版本回退
使用 git push origin 命令，推送至远程分支
快捷命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset --hard HEAD^ <span class="token comment"># 回滚到上一个版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【注：HEAD 是指向当前版本的指针，HEAD^表示上个版本,HEAD^^表示上上个版本】</p>
<p>如果修改到的文件比较少，我们可以不通过命令回滚的方式，手动删除之前的修改，再进行提交。</p>
</template>
