<template><h1 id="linux-安装-ftp-服务" tabindex="-1"><a class="header-anchor" href="#linux-安装-ftp-服务" aria-hidden="true">#</a> Linux 安装 ftp 服务</h1>
<h2 id="下载安装-ftp" tabindex="-1"><a class="header-anchor" href="#下载安装-ftp" aria-hidden="true">#</a> 下载安装 ftp</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yum install -y vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="add-user-for-ftp" tabindex="-1"><a class="header-anchor" href="#add-user-for-ftp" aria-hidden="true">#</a> add user for ftp</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>adduser <span class="token function">ftp</span>
<span class="token function">passwd</span> <span class="token function">ftp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd/vsftpd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#除下面提及的参数，其他参数保持默认值即可。

#修改下列参数的值：
#禁止匿名登录FTP服务器。
anonymous_enable=NO
#允许本地用户登录FTP服务器。
local_enable=YES
#监听IPv4 sockets。
listen=YES

#在行首添加#注释掉以下参数：
#关闭监听IPv6 sockets。
#listen_ipv6=YES

#在配置文件的末尾添加下列参数：
#设置本地用户登录后所在目录。
local_root=/var/ftp/test
#全部用户被限制在主目录。
chroot_local_user=YES
#启用例外用户名单。
chroot_list_enable=YES
#指定例外用户列表文件，列表中用户不被锁定在主目录。
chroot_list_file=/etc/vsftpd/chroot_list
#开启被动模式。
pasv_enable=YES
allow_writeable_chroot=YES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
