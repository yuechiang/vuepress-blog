<template><h1 id="linux-引导启动过程" tabindex="-1"><a class="header-anchor" href="#linux-引导启动过程" aria-hidden="true">#</a> Linux 引导启动过程</h1>
<h2 id="_1-bois-post" tabindex="-1"><a class="header-anchor" href="#_1-bois-post" aria-hidden="true">#</a> 1.BOIS POST</h2>
<h2 id="_2-mbr" tabindex="-1"><a class="header-anchor" href="#_2-mbr" aria-hidden="true">#</a> 2.MBR</h2>
<p>MBR stands for master boot record, and is reponsible for loading and executing the GRUB boot loader.</p>
<p>the MBR is located in the 1st sector of the bootable disk, which is typically <strong>/dev/hda</strong>, or <strong>/dev/sda</strong>, depending on your hardware. the MBR also contains information about GRUB, or LILO in very old systems.</p>
<h2 id="_3-grub" tabindex="-1"><a class="header-anchor" href="#_3-grub" aria-hidden="true">#</a> 3.GRUB</h2>
<p>sometimes called GNU GRUB, which is short for GNU GRand Unified Bootloader, is the typical bootloader for modern Linux systems.</p>
<p>In many systems you can find the GRUB configuration file at /boot/grub/grub.conf or /etc/grub.conf.</p>
<h2 id="_4-kenel" tabindex="-1"><a class="header-anchor" href="#_4-kenel" aria-hidden="true">#</a> 4.Kenel</h2>
<p>The kenel is often referred to as the core of any operating system, Linux included. It has complete control over everything in your system.</p>
<p>In this stage of the boot process, the kenel that was selected by GRUB first mounts the root file system that's specified in the grub.conf file. then it executes the /sbin/init program, which is always the first program to be executed. You can confirm this with its process id (PID), which should always be 1.</p>
<p>The kenel then establishes a temporary root file system using initial RAM Disk (initrd) until the real file system is mounted.</p>
<h2 id="_5-init" tabindex="-1"><a class="header-anchor" href="#_5-init" aria-hidden="true">#</a> 5.Init</h2>
<p>At this point, your system executes runlevel programs. At one point it would look for an init file, usually found at /ect/inittab to decide the Linux run level.</p>
<p>Modern Linux systems use systemd to choose a run level instead.</p>
<blockquote>
<p>Run level 0 is matched by poweroff.target (and runlevel0.target is a symbolic link to poweroff.target).</p>
</blockquote>
<blockquote>
<p>Run level 1 is matched by rescue.target (and runlevel1.target is a symbolic link to rescue.target).</p>
</blockquote>
<blockquote>
<p>Run level 3 is emulated by multi-user.target (and runlevel3.target is a symbolic link to multi-user.target).</p>
</blockquote>
<blockquote>
<p>Run level 5 is emulated by graphical.target (and runlevel5.target is a symbolic link to graphical.target).</p>
</blockquote>
<blockquote>
<p>Run level 6 is emulated by reboot.target (and runlevel6.target is a symbolic link to reboot.target).</p>
</blockquote>
<blockquote>
<p>Emergency is matched by emergency.target.</p>
</blockquote>
<h2 id="_6-runlevel-programs" tabindex="-1"><a class="header-anchor" href="#_6-runlevel-programs" aria-hidden="true">#</a> 6.RunLevel programs</h2>
<p>Depending on which Linux distribution you have installed, you may be able to see different services getting started. For example, you might catch starting sendmail …. OK.</p>
<p>These are known as runlevel programs, and are executed from different directories depending on your run level. Each of the 6 runlevels described above has its own directory:</p>
<ul>
<li>Run level 0 – /etc/rc0.d/</li>
<li>Run level 1 – /etc/rc1.d/</li>
<li>Run level 2  – /etc/rc2.d/</li>
<li>Run level 3  – /etc/rc3.d/</li>
<li>Run level 4 – /etc/rc4.d/</li>
<li>Run level 5 – /etc/rc5.d/</li>
<li>Run level 6 – /etc/rc6.d/</li>
</ul>
<p>If you look in the different run level directories, you'll find programs that start with either an &quot;S&quot; or &quot;K&quot; for startup and kill, respectively. Startup programs are executed during system startup, and kill programs during shutdown.</p>
</template>
