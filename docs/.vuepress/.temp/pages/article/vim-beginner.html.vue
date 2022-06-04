<template><h1 id="vim-commands-a-beginner-guide-with-examples" tabindex="-1"><a class="header-anchor" href="#vim-commands-a-beginner-guide-with-examples" aria-hidden="true">#</a> Vim Commands: A Beginner Guide with Examples</h1>
<blockquote>
<p><a href="https://thevaluable.dev/vim-commands-beginner/" target="_blank" rel="noopener noreferrer">Vim Commands: A Beginner Guide with Examples<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="the-modes-of-vim" tabindex="-1"><a class="header-anchor" href="#the-modes-of-vim" aria-hidden="true">#</a> The Modes of Vim</h2>
<p>Vim's normal mode will give you the power
After launching Vim, you will see a welcome screen displaying the very basic commands you can use. This screen will disappear as soon as you begin to type some content.</p>
<p>Vim is not like your standard editor where you can simply type on your keyboard and your content will magically appear on your screen. Try to type x, for example: nothing seems to happen.</p>
<p>This is because Vim has modes, and you can do different things depending on the mode you’re in. To spot easily the different modes I’m speaking about in this article, I’ll always write them in uppercase (i.e. NORMAL mode).</p>
<h3 id="normal-mode" tabindex="-1"><a class="header-anchor" href="#normal-mode" aria-hidden="true">#</a> Normal Mode</h3>
<p>Normally, when you open an editor, you can directly type some content. Not in Vim. Its default mode is NORMAL mode, where you can edit some existing content.</p>
<p>You can use keystrokes to move where you want and edit what you want: inserting, changing or deleting words, sentences, or even paragraphs. Without using your mouse once!</p>
<p>Think of it as a system of shortcuts which allows you to target exactly what you want to edit. The difference between your default GUI editor and Vim when we speak about shortcuts (or keystrokes) is significant: they make sense in Vim, most of the time. They follow a certain logic, and they are composable. That’s why Vim is easy to learn.</p>
<p>For example, the shortcut CTRL+shift+n to find a file in your favorite GUI editor is difficult to remember because it’s difficult to link what you know (opening a file) and what you want to learn (the keystroke).</p>
<p>We will come back to the NORMAL mode later, when we will learn the main Vim’s keystrokes.</p>
<h3 id="insert-mode" tabindex="-1"><a class="header-anchor" href="#insert-mode" aria-hidden="true">#</a> Insert Mode</h3>
<p>Look at your cursor in Vim: it should normally be a square. Now, let’s hit our first NORMAL mode keystroke: i, for insert.</p>
<p>What’s this dark magic? Your cursor became a pipe! In the bottom left corner, the indicator --INSERT-- appeared! How impressive! How marvelous! Do you think I’m exaggerating? Yes I do!</p>
<p>Welcome to the INSERT mode.</p>
<p>You can finally type your content in this mode: go ahead, type anything you want. To come back to NORMAL mode and stop inserting, simply hit ESC or CTRL-c. The cursor becomes a square again, and the --INSERT-- indicator disappears. Don’t be sad, it will come back.</p>
<p>That’s how you work with Vim: juggling between NORMAL mode to edit existing content and INSERT mode to insert some new content.</p>
<h3 id="visual-mode" tabindex="-1"><a class="header-anchor" href="#visual-mode" aria-hidden="true">#</a> Visual Mode</h3>
<p>There is a third important mode in Vim you’ll often use: VISUAL mode. Its goal? Selecting your content. From there, you can modify, edit or copy your selection.</p>
<p>To enter VISUAL mode, you might have guessed it already, you need to type v in NORMAL mode. You’ll see the indicator --VISUAL-- appearing in the bottom left corner of your Vim instance. Again, to come back to our default mode, NORMAL mode, press ESC or CTRL-c.</p>
<p>You can as well select entire lines if you start the visual mode linewise with the keystroke <strong>SHIFT+v</strong>. That’s not all: you can start visual mode blockwise, using the keystroke <strong>CTRL+v</strong>. It’s pretty useful when you have to deal with tables or lists, for example.</p>
<h3 id="command-line-mode" tabindex="-1"><a class="header-anchor" href="#command-line-mode" aria-hidden="true">#</a> Command-Line Mode</h3>
<p>You can compare the COMMAND LINE mode as a menu on a GUI. A big and powerful one.</p>
<p>If you type : in NORMAL mode, your cursor will end up automatically at the bottom of Vim. From there, you can type any command you want. These commands are also called Ex command.</p>
<p>Here are the most basic ones:</p>
<p>:help to open Vim’s help. Arguably the most useful command. This help is insanely complete. If you don’t remember how to quit Vim for example, you can type :help quit.
:q to quit the current window. If there is only one window (it’s the default), you’ll finally quit Vim.
:q! to quit without saving. Imagine that you yell at your editor you want to quit, whatever the consequences!
:w to write (save the current file open).
You can even combine some ex command: :wq to write and quit. Or just use :x.
:e <path> to edit a file. The path can be absolute or relative.
Now that you know how to access Vim’s help, I’ll put at the end of each section the help commands you can use to go deeper. For example, here’s the ones for this section:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Vim help
:help helphelp
:help vim-modes
:help insert.txt
:help visual.txt
:help cmdline.txt
:help write-quite
:help ex-cmd-index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Don’t worry if you don’t understand what’s written in the help itself, or if it’s too daunting. Bear with me in this article, and later, when you’re more comfortable with Vim, you can come back to this delightful help.</p>
<h2 id="searching" tabindex="-1"><a class="header-anchor" href="#searching" aria-hidden="true">#</a> Searching</h2>
<p>I wrote a whole article about searching in Vim, but, for now, the keystroke / should be enough. If you use it, your cursor will end up the bottom of the screen. From there, type your search and press ENTER.</p>
<p>You can go to the next found occurrence by typing n. To go to the previous one, use N.</p>
<p>You can also use these two keystrokes in NORMAL mode to search the word under the cursor:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>* - Search forward.
# - Search backward.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="undo-and-redo" tabindex="-1"><a class="header-anchor" href="#undo-and-redo" aria-hidden="true">#</a> Undo and Redo</h2>
<p>What would we do without the essential undo and redo?</p>
<p>u will undo your last edit.
<strong>CTRL-r</strong> will redo. You can think of it as you being in control (CTRL) of your content.</p>
<h2 id="vim-motion-commands" tabindex="-1"><a class="header-anchor" href="#vim-motion-commands" aria-hidden="true">#</a> Vim Motion Commands</h2>
<p>Motions in Vim allow you to move your cursor horizontally (on a line) or vertically.</p>
<p>Note that you can combine motions with a count: if you want to make your motion 6 times for example, you can do 6&lt;your_motion&gt;. Replace &lt;your_motion&gt; with whatever motion you want.</p>
<p>You can use motions in NORMAL mode and VISUAL mode.</p>
<h3 id="moving-horizontally" tabindex="-1"><a class="header-anchor" href="#moving-horizontally" aria-hidden="true">#</a> Moving Horizontally</h3>
<p>Here some basic keystrokes to move quickly on a line in NORMAL mode:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>w - move forward to the next word. A word - by default - is a sequence containing letters, digits, or underscores.
b - move back your cursor to the previous word
0 - move to the beginning of the current line.
ˆ - move to the first non-blank character on the current line.
$ - move to the end of the current line.
% - move to the matching bracket when the cursor is already on a bracket.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can as well move on a specific character on your line using:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>f&lt;character> - find a character after your cursor.
F&lt;character> - find a character before your cursor.
t&lt;character> - move to a character after your cursor.
T&lt;character> - move to a character before your cursor.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After using one of the last four keystrokes, you can move on the character you’ve chosen with ; to go forward, and , to go backward. A very powerful way to move horizontally!</p>
<h3 id="moving-vertically" tabindex="-1"><a class="header-anchor" href="#moving-vertically" aria-hidden="true">#</a> Moving Vertically</h3>
<p>You can move vertically simply by searching the word you want to move on (see above to learn how to search). There are other ways to move vertically:</p>
<line_number>G - move your cursor to the beginning of an arbitrary line. For example, 10G will move the cursor on line 10.
G - move your cursor to the last line of your file.
1G or gg - move your cursor to the first line of your file.
You can as well use different keystrokes to scroll. Here are the very basics:
<p>CTRL-e - scroll the window downwards.
CTRL-u - move your cursor upward half a screen.
CTRL-d - move your cursordownward half a screen.</p>
<h2 id="the-language-of-vim" tabindex="-1"><a class="header-anchor" href="#the-language-of-vim" aria-hidden="true">#</a> The Language of Vim</h2>
<p>Vim as a very powerful keystroke-language!
In Vim, keystrokes can be seen as “sentences”, describing an action. That’s what I meant when I was saying that the keystrokes are composable. I know, it sounds weird, but it’s brilliant.</p>
<p>These “sentences” are so common that you’ll associate easily what you know already (the sentence) by what you need to learn (the keystrokes).</p>
<p>Even better: knowing that Vim has a “keystroke language” will push you to combine them instinctively to do what you need to do, and, in many cases, it will work!</p>
<h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h3>
<p>Operators are the verbs of the Vim language. They need to be combined with motions or text-objects to work. Here are some important operators:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>d for delete
c for change
y for yank (copy)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When using the yank operator, you can put what you’ve copied using the keystrokes p or P.</p>
<p>You can combine operators and motions as follows:</p>
<ul>
<li>d$ will delete from your cursor to the end of line. You can use as well the alias D.</li>
<li>dgg will delete everything from the cursor to the beginning of the file.</li>
<li>ggdG will delete everything in the file!</li>
</ul>
<h3 id="text-objects" tabindex="-1"><a class="header-anchor" href="#text-objects" aria-hidden="true">#</a> Text Objects</h3>
<p>If operators are the verbs, text objects are the nouns. Simply put, a text object is a set of character. In Vim, a word is a text object, as well as a sentence or a paragraph.</p>
<p>For example, you can use operators and text objects as follows:</p>
<ul>
<li>diw will delete inside the word. It will delete the current word under the cursor.</li>
<li>ciw will change inside the word. It will delete the current word under the cursor and switch to INSERT mode. In short, you… change the word!</li>
<li>dip will delete inside the paragraph.
You can try to change a word or delete a word, it works as well and introduce some subtleties. I let you find what could be the keystrokes for these!</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Vim help
:help operator
:help text-objects
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vim-s-options" tabindex="-1"><a class="header-anchor" href="#vim-s-options" aria-hidden="true">#</a> Vim’s Options</h3>
<p>You can modify Vim’s behavior by modifying its options.</p>
<p>You can think of an option as a variable. It can be a boolean (which can be switched on and off), a string, or a number. You can display their values or modifying them using the COMMAND-LINE mode.</p>
<p>If you want to permanently modify some options, assign their new values directly in your vimrc, as we did with the option clipboard at the beginning of this article.</p>
<p>Here are the commands you can use:</p>
<p>:set no<option> - Unset the option.
:set <option>! - Toggle the option.
:set <option>? - Return the option’s value.
:set <option>=<value> - Set a value <value> (string or number).
:set <option>+=<value> - Add the value <value> for a number option, append a string <value> for a string option.
:set <option>-=<value> - Subtract the value <value> for a number option, delete the string <value> for a string option.
:set <option>&amp; - Reset the option to its default value.
For example, if you want to display the filetype of the current file open, you can run:</p>
<p>:set filetype?
Drop the prefix : if you want to set these options in your vimrc.</p>
</template>
