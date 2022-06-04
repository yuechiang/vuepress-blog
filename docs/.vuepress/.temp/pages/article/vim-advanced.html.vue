<template><h1 id="a-vim-guide-for-advanced-users" tabindex="-1"><a class="header-anchor" href="#a-vim-guide-for-advanced-users" aria-hidden="true">#</a> A Vim Guide for Advanced Users</h1>
<blockquote>
<p><a href="https://thevaluable.dev/vim-advanced/" target="_blank" rel="noopener noreferrer">A Vim Guide for Advanced Users<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="useful-g-keystrokes" tabindex="-1"><a class="header-anchor" href="#useful-g-keystrokes" aria-hidden="true">#</a> Useful “g” Keystrokes</h2>
<p>Let’s begin gently with a mixed bag of keystrokes starting with g. There are many of these “g” commands in Vim, and we already saw some of them in the previous articles. Can you recall them?</p>
<p>You can use these keystrokes in NORMAL mode:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>- gf - Edit the <span class="token function">file</span> located at the filepath under your cursor.
- - You can use CTRL+W CTRL+F to <span class="token function">open</span> the <span class="token function">file</span> <span class="token keyword">in</span> a new window.
- - It can <span class="token function">open</span> the URL under your cursor <span class="token keyword">if</span> you have the plugin netrw.
- gx - Open the <span class="token function">file</span> located at the filepath under your cursor.
  It will use the default application used by your OS <span class="token keyword">for</span> this filetype.
  It works with URLs too. It will <span class="token function">open</span> your favorite browser and load the website.
  It only works <span class="token keyword">if</span> you have the plugin netrw.
  gi - Move to the last insertion you did and switch to INSERT mode.
  Pretty useful <span class="token keyword">if</span> you stopped your editing to <span class="token function">look</span> at some other file.
  It uses marks under the hood: <span class="token function">more</span> on that later <span class="token keyword">in</span> this article.
  gv - Start VISUAL mode and use the selection made during the last VISUAL mode.
  gn - Select the match of your last search:
  Move to the last searched match.
  Switch to VISUAL mode <span class="token punctuation">(</span>if you weren’t <span class="token keyword">in</span> VISUAL mode already<span class="token punctuation">)</span>.
  Select the match.
  You can <span class="token builtin class-name">continue</span> to hit n <span class="token punctuation">(</span>or gn<span class="token punctuation">)</span> to <span class="token keyword">select</span> the area between the current match and the next match.
  gI - Insert text at the beginning of the line, no matter what the first characters are.
  The keystroke I insert text just before the first non-blank characters of the line.
  ga - Print the ascii value of the character under the cursor <span class="token keyword">in</span> decimal, hexadecimal or octal.
  gu - Lowercase using a motion <span class="token punctuation">(</span>for example, guiw<span class="token punctuation">)</span>.
  gU - Uppercase using a motion <span class="token punctuation">(</span>for example, gUiw<span class="token punctuation">)</span>.
  To try out gf and gx, you can <span class="token function">write</span> <span class="token keyword">for</span> example https://www.google.com/ <span class="token keyword">in</span> Vim, place your cursor on it, and hit the keystrokes. Don’t forget the trailing slash <span class="token keyword">in</span> your URL.

You’ll soon discover an inconvenience with gx: when you use it on a filepath, Vim will hang till you close the file. That’s why I’ve created the following mapping you can <span class="token function">add</span> to your .vimrc:

nnoremap gX :silent :execute
<span class="token punctuation">\</span> <span class="token string">"!xdg-open"</span> expand<span class="token punctuation">(</span><span class="token string">'%:p:h'</span><span class="token punctuation">)</span> <span class="token builtin class-name">.</span> <span class="token string">"/"</span> <span class="token builtin class-name">.</span> expand<span class="token punctuation">(</span><span class="token string">"&lt;cfile>"</span><span class="token punctuation">)</span> <span class="token string">" &amp;"</span><span class="token operator">&lt;</span>cr<span class="token operator">></span>
It maps the keystroke gX to use <span class="token function">xdg-open</span> with a relative filepath under your cursor. It will <span class="token function">open</span> the <span class="token function">file</span> with your favorite application <span class="token keyword">in</span> the background. The program <span class="token function">xdg-open</span> will only work on Linux-based systems<span class="token punctuation">;</span> <span class="token keyword">for</span> MacOS, try <span class="token function">open</span> u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
