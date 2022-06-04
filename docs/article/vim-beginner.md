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

# Vim Commands: A Beginner Guide with Examples

> [Vim Commands: A Beginner Guide with Examples](https://thevaluable.dev/vim-commands-beginner/)

## The Modes of Vim

Vim's normal mode will give you the power
After launching Vim, you will see a welcome screen displaying the very basic commands you can use. This screen will disappear as soon as you begin to type some content.

Vim is not like your standard editor where you can simply type on your keyboard and your content will magically appear on your screen. Try to type x, for example: nothing seems to happen.

This is because Vim has modes, and you can do different things depending on the mode you’re in. To spot easily the different modes I’m speaking about in this article, I’ll always write them in uppercase (i.e. NORMAL mode).

### Normal Mode

Normally, when you open an editor, you can directly type some content. Not in Vim. Its default mode is NORMAL mode, where you can edit some existing content.

You can use keystrokes to move where you want and edit what you want: inserting, changing or deleting words, sentences, or even paragraphs. Without using your mouse once!

Think of it as a system of shortcuts which allows you to target exactly what you want to edit. The difference between your default GUI editor and Vim when we speak about shortcuts (or keystrokes) is significant: they make sense in Vim, most of the time. They follow a certain logic, and they are composable. That’s why Vim is easy to learn.

For example, the shortcut CTRL+shift+n to find a file in your favorite GUI editor is difficult to remember because it’s difficult to link what you know (opening a file) and what you want to learn (the keystroke).

We will come back to the NORMAL mode later, when we will learn the main Vim’s keystrokes.

### Insert Mode

Look at your cursor in Vim: it should normally be a square. Now, let’s hit our first NORMAL mode keystroke: i, for insert.

What’s this dark magic? Your cursor became a pipe! In the bottom left corner, the indicator --INSERT-- appeared! How impressive! How marvelous! Do you think I’m exaggerating? Yes I do!

Welcome to the INSERT mode.

You can finally type your content in this mode: go ahead, type anything you want. To come back to NORMAL mode and stop inserting, simply hit ESC or CTRL-c. The cursor becomes a square again, and the --INSERT-- indicator disappears. Don’t be sad, it will come back.

That’s how you work with Vim: juggling between NORMAL mode to edit existing content and INSERT mode to insert some new content.

### Visual Mode

There is a third important mode in Vim you’ll often use: VISUAL mode. Its goal? Selecting your content. From there, you can modify, edit or copy your selection.

To enter VISUAL mode, you might have guessed it already, you need to type v in NORMAL mode. You’ll see the indicator --VISUAL-- appearing in the bottom left corner of your Vim instance. Again, to come back to our default mode, NORMAL mode, press ESC or CTRL-c.

You can as well select entire lines if you start the visual mode linewise with the keystroke **SHIFT+v**. That’s not all: you can start visual mode blockwise, using the keystroke **CTRL+v**. It’s pretty useful when you have to deal with tables or lists, for example.

### Command-Line Mode

You can compare the COMMAND LINE mode as a menu on a GUI. A big and powerful one.

If you type : in NORMAL mode, your cursor will end up automatically at the bottom of Vim. From there, you can type any command you want. These commands are also called Ex command.

Here are the most basic ones:

:help to open Vim’s help. Arguably the most useful command. This help is insanely complete. If you don’t remember how to quit Vim for example, you can type :help quit.
:q to quit the current window. If there is only one window (it’s the default), you’ll finally quit Vim.
:q! to quit without saving. Imagine that you yell at your editor you want to quit, whatever the consequences!
:w to write (save the current file open).
You can even combine some ex command: :wq to write and quit. Or just use :x.
:e <path> to edit a file. The path can be absolute or relative.
Now that you know how to access Vim’s help, I’ll put at the end of each section the help commands you can use to go deeper. For example, here’s the ones for this section:

```
Vim help
:help helphelp
:help vim-modes
:help insert.txt
:help visual.txt
:help cmdline.txt
:help write-quite
:help ex-cmd-index
```

Don’t worry if you don’t understand what’s written in the help itself, or if it’s too daunting. Bear with me in this article, and later, when you’re more comfortable with Vim, you can come back to this delightful help.

## Searching

I wrote a whole article about searching in Vim, but, for now, the keystroke / should be enough. If you use it, your cursor will end up the bottom of the screen. From there, type your search and press ENTER.

You can go to the next found occurrence by typing n. To go to the previous one, use N.

You can also use these two keystrokes in NORMAL mode to search the word under the cursor:

```
* - Search forward.
# - Search backward.
```

## Undo and Redo

What would we do without the essential undo and redo?

u will undo your last edit.
**CTRL-r** will redo. You can think of it as you being in control (CTRL) of your content.

## Vim Motion Commands

Motions in Vim allow you to move your cursor horizontally (on a line) or vertically.

Note that you can combine motions with a count: if you want to make your motion 6 times for example, you can do 6<your_motion>. Replace <your_motion> with whatever motion you want.

You can use motions in NORMAL mode and VISUAL mode.

### Moving Horizontally

Here some basic keystrokes to move quickly on a line in NORMAL mode:

```
w - move forward to the next word. A word - by default - is a sequence containing letters, digits, or underscores.
b - move back your cursor to the previous word
0 - move to the beginning of the current line.
ˆ - move to the first non-blank character on the current line.
$ - move to the end of the current line.
% - move to the matching bracket when the cursor is already on a bracket.
```

You can as well move on a specific character on your line using:

```
f<character> - find a character after your cursor.
F<character> - find a character before your cursor.
t<character> - move to a character after your cursor.
T<character> - move to a character before your cursor.
```

After using one of the last four keystrokes, you can move on the character you’ve chosen with ; to go forward, and , to go backward. A very powerful way to move horizontally!

### Moving Vertically

You can move vertically simply by searching the word you want to move on (see above to learn how to search). There are other ways to move vertically:

<line_number>G - move your cursor to the beginning of an arbitrary line. For example, 10G will move the cursor on line 10.
G - move your cursor to the last line of your file.
1G or gg - move your cursor to the first line of your file.
You can as well use different keystrokes to scroll. Here are the very basics:

CTRL-e - scroll the window downwards.
CTRL-u - move your cursor upward half a screen.
CTRL-d - move your cursordownward half a screen.

## The Language of Vim

Vim as a very powerful keystroke-language!
In Vim, keystrokes can be seen as “sentences”, describing an action. That’s what I meant when I was saying that the keystrokes are composable. I know, it sounds weird, but it’s brilliant.

These “sentences” are so common that you’ll associate easily what you know already (the sentence) by what you need to learn (the keystrokes).

Even better: knowing that Vim has a “keystroke language” will push you to combine them instinctively to do what you need to do, and, in many cases, it will work!

### Operators

Operators are the verbs of the Vim language. They need to be combined with motions or text-objects to work. Here are some important operators:

```
d for delete
c for change
y for yank (copy)
```

When using the yank operator, you can put what you’ve copied using the keystrokes p or P.

You can combine operators and motions as follows:

- d$ will delete from your cursor to the end of line. You can use as well the alias D.
- dgg will delete everything from the cursor to the beginning of the file.
- ggdG will delete everything in the file!

### Text Objects

If operators are the verbs, text objects are the nouns. Simply put, a text object is a set of character. In Vim, a word is a text object, as well as a sentence or a paragraph.

For example, you can use operators and text objects as follows:

- diw will delete inside the word. It will delete the current word under the cursor.
- ciw will change inside the word. It will delete the current word under the cursor and switch to INSERT mode. In short, you… change the word!
- dip will delete inside the paragraph.
  You can try to change a word or delete a word, it works as well and introduce some subtleties. I let you find what could be the keystrokes for these!

```
Vim help
:help operator
:help text-objects
```

### Vim’s Options

You can modify Vim’s behavior by modifying its options.

You can think of an option as a variable. It can be a boolean (which can be switched on and off), a string, or a number. You can display their values or modifying them using the COMMAND-LINE mode.

If you want to permanently modify some options, assign their new values directly in your vimrc, as we did with the option clipboard at the beginning of this article.

Here are the commands you can use:

:set no<option> - Unset the option.
:set <option>! - Toggle the option.
:set <option>? - Return the option’s value.
:set <option>=<value> - Set a value <value> (string or number).
:set <option>+=<value> - Add the value <value> for a number option, append a string <value> for a string option.
:set <option>-=<value> - Subtract the value <value> for a number option, delete the string <value> for a string option.
:set <option>& - Reset the option to its default value.
For example, if you want to display the filetype of the current file open, you can run:

:set filetype?
Drop the prefix : if you want to set these options in your vimrc.
