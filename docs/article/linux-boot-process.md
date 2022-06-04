---
date: 2022-05-28
tag:
  - linux
  - boot
category:
  - linux
---

# Linux 引导启动过程

## 1.BOIS POST

## 2.MBR

MBR stands for master boot record, and is reponsible for loading and executing the GRUB boot loader.

the MBR is located in the 1st sector of the bootable disk, which is typically **/dev/hda**, or **/dev/sda**, depending on your hardware. the MBR also contains information about GRUB, or LILO in very old systems.

## 3.GRUB

sometimes called GNU GRUB, which is short for GNU GRand Unified Bootloader, is the typical bootloader for modern Linux systems.

In many systems you can find the GRUB configuration file at /boot/grub/grub.conf or /etc/grub.conf.

## 4.Kenel

The kenel is often referred to as the core of any operating system, Linux included. It has complete control over everything in your system.

In this stage of the boot process, the kenel that was selected by GRUB first mounts the root file system that's specified in the grub.conf file. then it executes the /sbin/init program, which is always the first program to be executed. You can confirm this with its process id (PID), which should always be 1.

The kenel then establishes a temporary root file system using initial RAM Disk (initrd) until the real file system is mounted.

## 5.Init

At this point, your system executes runlevel programs. At one point it would look for an init file, usually found at /ect/inittab to decide the Linux run level.

Modern Linux systems use systemd to choose a run level instead.

> Run level 0 is matched by poweroff.target (and runlevel0.target is a symbolic link to poweroff.target).

> Run level 1 is matched by rescue.target (and runlevel1.target is a symbolic link to rescue.target).

> Run level 3 is emulated by multi-user.target (and runlevel3.target is a symbolic link to multi-user.target).

> Run level 5 is emulated by graphical.target (and runlevel5.target is a symbolic link to graphical.target).

> Run level 6 is emulated by reboot.target (and runlevel6.target is a symbolic link to reboot.target).

> Emergency is matched by emergency.target.

## 6.RunLevel programs

Depending on which Linux distribution you have installed, you may be able to see different services getting started. For example, you might catch starting sendmail …. OK.

These are known as runlevel programs, and are executed from different directories depending on your run level. Each of the 6 runlevels described above has its own directory:

- Run level 0 – /etc/rc0.d/
- Run level 1 – /etc/rc1.d/
- Run level 2  – /etc/rc2.d/
- Run level 3  – /etc/rc3.d/
- Run level 4 – /etc/rc4.d/
- Run level 5 – /etc/rc5.d/
- Run level 6 – /etc/rc6.d/

If you look in the different run level directories, you'll find programs that start with either an "S" or "K" for startup and kill, respectively. Startup programs are executed during system startup, and kill programs during shutdown.
