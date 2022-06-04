export const data = {
  "key": "v-a93c4c1e",
  "path": "/article/centos7-boot-process.html",
  "title": "CentOS / RHEL 7 : Booting process",
  "lang": "en-US",
  "frontmatter": {
    "date": "2022-05-28T00:00:00.000Z",
    "tag": [
      "centos",
      "boot"
    ],
    "category": [
      "linux"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Introduction of systemd",
      "slug": "introduction-of-systemd",
      "children": []
    },
    {
      "level": 2,
      "title": "1. POST (Power on Self Test)",
      "slug": "_1-post-power-on-self-test",
      "children": []
    },
    {
      "level": 2,
      "title": "2. Selecting the bootable device (With MBR)",
      "slug": "_2-selecting-the-bootable-device-with-mbr",
      "children": []
    },
    {
      "level": 2,
      "title": "3. Loading the boot loader (GRUB2)",
      "slug": "_3-loading-the-boot-loader-grub2",
      "children": [
        {
          "level": 3,
          "title": "initramfs",
          "slug": "initramfs",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4. Loading the kernel",
      "slug": "_4-loading-the-kernel",
      "children": []
    },
    {
      "level": 2,
      "title": "5. Starting systemd",
      "slug": "_5-starting-systemd",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 3.23,
    "words": 969
  },
  "filePathRelative": "article/centos7-boot-process.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
