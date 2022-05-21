---
date: 2022-05-20
tag:
  - linux
  - ftp
category:
  - programming
---

# Linux 安装 ftp 服务

## 下载安装 ftp

```
yum install -y vsftpd
```

## add user for ftp

```bash
adduser ftp
passwd ftp
```

## config

```bash
vim /etc/vsftpd/vsftpd.conf
```

```
#除下面提及的参数，其他参数保持默认值即可。

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
```
