---
date: 2022-05-29
tag:
  - vim
  - beginner
  - linux
  - editor
category:
  - programming
  - linux
---

# A Vim Guide for Advanced Users

> [A Vim Guide for Advanced Users](https://thevaluable.dev/vim-advanced/)

## Useful “g” Keystrokes

Let’s begin gently with a mixed bag of keystrokes starting with g. There are many of these “g” commands in Vim, and we already saw some of them in the previous articles. Can you recall them?

You can use these keystrokes in NORMAL mode:

```bash
- gf - Edit the file located at the filepath under your cursor.
- - You can use CTRL+W CTRL+F to open the file in a new window.
- - It can open the URL under your cursor if you have the plugin netrw.
- gx - Open the file located at the filepath under your cursor.
  It will use the default application used by your OS for this filetype.
  It works with URLs too. It will open your favorite browser and load the website.
  It only works if you have the plugin netrw.
  gi - Move to the last insertion you did and switch to INSERT mode.
  Pretty useful if you stopped your editing to look at some other file.
  It uses marks under the hood: more on that later in this article.
  gv - Start VISUAL mode and use the selection made during the last VISUAL mode.
  gn - Select the match of your last search:
  Move to the last searched match.
  Switch to VISUAL mode (if you weren’t in VISUAL mode already).
  Select the match.
  You can continue to hit n (or gn) to select the area between the current match and the next match.
  gI - Insert text at the beginning of the line, no matter what the first characters are.
  The keystroke I insert text just before the first non-blank characters of the line.
  ga - Print the ascii value of the character under the cursor in decimal, hexadecimal or octal.
  gu - Lowercase using a motion (for example, guiw).
  gU - Uppercase using a motion (for example, gUiw).
  To try out gf and gx, you can write for example https://www.google.com/ in Vim, place your cursor on it, and hit the keystrokes. Don’t forget the trailing slash in your URL.

You’ll soon discover an inconvenience with gx: when you use it on a filepath, Vim will hang till you close the file. That’s why I’ve created the following mapping you can add to your .vimrc:

nnoremap gX :silent :execute
\ "!xdg-open" expand('%:p:h') . "/" . expand("<cfile>") " &"<cr>
It maps the keystroke gX to use xdg-open with a relative filepath under your cursor. It will open the file with your favorite application in the background. The program xdg-open will only work on Linux-based systems; for MacOS, try open u
```
