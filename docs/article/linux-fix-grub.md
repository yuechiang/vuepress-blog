---
date: 2022-06-04
tag:
  - fix
  - trouble
  - grub
  - boot
  - linux
category:
  - linux
---

# 修复 Linux 引导错误 grub 被损坏

- 从启动盘引导进入系统
- 在启动菜单选择 Troubleshooting 选项，然后 rescue a centos system , 选择 continue 再回车进入 shell。
- 切换到故障系统

```bash
chroot /mnt/sysimage
```

- 安装 grub2

```bash
grub2-install /dev/sda #指定安装到哪个磁盘
grub2-mkconfig > /boot/grub2/grub.cfg #创建 grub2 配置文件
```

- 安装内核从光盘上

```bash
mount /dev/cdroom /media #挂在光驱
cd /media/Packages
rpm -ivh kernel<version> --force #指定要安装的内核文件,注意要用--force 选项
```
