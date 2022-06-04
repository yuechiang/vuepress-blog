---
date: 2022-05-29
tag:
  - shell
  - bash
  - linux
  - centos
category:
  - linux
  - programming
---

# Shell 脚本

> Shell 是一种程序，用 C 语言编写， 用户通过 Shell 可以访问操作系统内核。
> sh 是 Unix Shell，Windows Explorer 是图形界面 Shell 。
> Shell 脚本是运行在 Shell 环境内的脚本程序。我们通常说的 Shell 指的是 Shell 脚本。

## Shell 环境

Shell 编程跟 JavaScript、php 编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了。

Linux 的 Shell 种类众多，常见的有：

- Bourne Shell（/usr/bin/sh 或/bin/sh）
- Bourne Again Shell（/bin/bash）
- C Shell（/usr/bin/csh）
- K Shell（/usr/bin/ksh）
- Shell for Root（/sbin/sh）

> #! 告诉系统其后路径所指定的程序即是解释此脚本文件的 Shell 程序。

## 运行 Shell 脚本有两种方法：

1、作为可执行程序

```perl
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本
```

注意，一定要写成 ./test.sh，而不是 test.sh，运行其它二进制的程序也一样，直接写 test.sh，linux 系统会去 PATH 里寻找有没有叫 test.sh 的，而只有 /bin, /sbin, /usr/bin，/usr/sbin 等在 PATH 里，你的当前目录通常不在 PATH 里，所以写成 test.sh 是会找不到命令的，要用 ./test.sh 告诉系统说，就在当前目录找。

2、作为解释器参数

这种运行方式是，直接运行解释器，其参数就是 shell 脚本的文件名，如：

```bash
/bin/sh test.sh
/bin/php test.php
```

这种方式运行的脚本，不需要在第一行指定解释器信息，写了也没用。

## Shell 变量

定义变量时，变量名不加美元符号（$，PHP 语言中变量需要），如：

```perl
your_name="runoob.com"
```

**注意，变量名和等号之间不能有空格**，这可能和你熟悉的所有编程语言都不一样。同时，变量名的命名须遵循如下规则：

命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
中间不能有空格，可以使用下划线 \_。
不能使用标点符号。
不能使用 bash 里的关键字（可用 help 命令查看保留关键字）。

### 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号即可，如：

```bash
your_name="qinjx"
echo $your_name
echo ${your_name}
```

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界。

### 只读变量

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。

下面的例子尝试更改只读变量，结果报错：

实例

```bash
#!/bin/bash
myUrl="https://www.google.com"
readonly myUrl
myUrl="https://www.runoob.com"
```

运行脚本，结果如下：

```bash
/bin/sh: NAME: This variable is read only.
```

### 删除变量

使用 unset 命令可以删除变量。语法：

```bash
unset variable_name
```

变量被删除后不能再次使用。unset 命令不能删除只读变量。

实例

```bash
#!/bin/sh

myUrl="https://www.runoob.com"
unset myUrl
echo $myUrl
```

以上实例执行将没有任何输出。

### 变量类型

运行 shell 时，会同时存在三种变量：

1. 局部变量 局部变量在脚本或命令中定义，仅在当前 shell 实例中有效，其他 shell 启动的程序不能访问局部变量。
2. 环境变量 所有的程序，包括 shell 启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候 shell 脚本也可以定义环境变量。
3. shell 变量 shell 变量是由 shell 程序设置的特殊变量。shell 变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了 shell 的正常运行

## Shell 字符串

字符串是 shell 编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号，也可以不用引号。

### 单引号

```bash
str='this is a string'
```

单引号字符串的限制：

单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的；
单引号字串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。

### 双引号

实例

```bash
your_name="runoob"
str="Hello, I know you are \"$your_name\"! \n"
echo -e $str
```

输出结果为：

```bash
Hello, I know you are "runoob"!
```

> **双引号的优点：**  
> 双引号里可以有变量
> 双引号里可以出现转义字符  
> 拼接字符串  
> 实例
> your_name="runoob"

#### 使用双引号拼接

```bash
greeting="hello, "$your_name" !"
greeting_1="hello, ${your_name} !"
echo $greeting  $greeting_1
```

#### 使用单引号拼接

```bash
greeting_2='hello, '$your_name' !'
greeting_3='hello, ${your_name} !'
echo $greeting_2  $greeting_3
```

输出结果为：

```bash
hello, runoob ! hello, runoob !
hello, runoob ! hello, ${your_name} !
```

### 获取字符串长度

实例

```bash
string="abcd"
echo ${#string}   # 输出 4
变量为数组时，${#string} 等价于 ${#string[0]}:
```

实例

```bash
string="abcd"
echo ${#string[0]}   # 输出 4
```

### 提取子字符串

以下实例从字符串第 2 个字符开始截取 4 个字符：

实例

```bash
string="runoob is a great site"
echo ${string:1:4} # 输出 unoo
```

注意：第一个字符的索引值为 0。

### 查找子字符串

查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：

实例

```bash
string="runoob is a great site"
echo `expr index "$string" io`  # 输出 4
```

注意： 以上脚本中 ` 是反引号，而不是单引号 '，不要看错了哦。

## 数组

### 定义数组

```bash
array=(item1 item2 item3)
```

### 读取数组

```bash
echo ${array[0]} ${array[1]} ${array[2]}
# 使用数组内全部元素
echo ${array[@]}
```

### 获取数组长度

```bash
length=${#array[@]}
length=${#array[*]}
```

## 重定向

### 输出重定向

```bash
ll > newfile
```

### 输入重定向

```bash
wc < file1 # 输入重定向的目标是一个命令
```

### err 重定向

```bash
ll > file1 2>&1 # 2>表示标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。
```

### here document

Here Document 是 Shell 中的一种特殊的重定向方式，用来将输入重定向到一个交互式 Shell 脚本或程序。

它的基本的形式如下：

```bash
command << delimiter
    document
delimiter
```

它的作用是将两个 delimiter 之间的内容(document) 作为输入传递给 command。

**注意：**

> 结尾的 delimiter 一定要顶格写，前面不能有任何字符，后面也不能有任何字符，包括空格和 tab 缩进。
> 开始的 delimiter 前后的空格会被忽略掉。

实例  
在命令行中通过 wc -l 命令计算 Here Document 的行数：

```bash
$ wc -l << EOF
    欢迎来到
    菜鸟教程
    www.runoob.com
EOF
3          # 输出结果为 3 行
$
```

### /dev/null 文件

如果希望执行某个命令，但又不希望在屏幕上显示输出结果，那么可以将输出重定向到 /dev/null：

```bash
$ command > /dev/null
```

## Shell 文件包含

和其他语言一样，Shell 也可以包含外部脚本。这样可以很方便的封装一些公用的代码作为一个独立的文件。

```bash
Shell 文件包含的语法格式如下：

. filename   # 注意点号(.)和文件名中间有一空格

或

source filename
```

实例  
创建两个 shell 脚本文件。

test1.sh 代码如下：

```bash
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

url="http://www.runoob.com"
```

test2.sh 代码如下：

```bash
#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

#使用 . 号来引用test1.sh 文件
. ./test1.sh

# 或者使用以下包含文件代码
# source ./test1.sh

echo "菜鸟教程官网地址：$url"
```

接下来，我们为 test2.sh 添加可执行权限并执行：

```bash
$ chmod +x test2.sh
$ ./test2.sh
菜鸟教程官网地址：http://www.runoob.com
```

> 注：被包含的文件 test1.sh 不需要可执行权限。

## 历史命令

```bash
history #查看 bash 历史命令
!! #执行上一次 bash 命令
!10 #执行历史记录中第10条记录的命令
echo $HISTSIZE #查看 bash 记录的历史命令最大数
echo $HISTFILE #查看记录 bash 历史命令文件路径
```

## 快捷键

```bash
CTRL+l #clear
```

## 变量

```bash
name='jiangyue'  #定义变量, 注意变量和=之间不能有空格, 区分大小写.
echo $name #输出变量
echo ${name} #完整形式
```

> 单引号不识别特殊语法

变量的作用域只在当前 shell 进程有效.

反引号``的作用
执行反引号内的语句，例如：

```bash
var1=`echo jiangyue`
echo ${var1} # output:jiangyue
```

### 全局变量定义文件

- /etc/bash_profile
- /etc/bashrc

### 局部变量定义文件

- ~/.bash_profile
- ~/.bashrc

### 只读变量

```bash
readonly name="这是只读变量"
```

### 环境变量加载顺序

- 登录式 shell
  > 执行顺序：/etc/profile --> /etc/profile.d/\*.sh --> ~/.bash_profile --> ~/.bashrc --> /etc/bashrc
- 非登录式 shell
  > 执行顺序：~/.bashrc --> /etc/bashrc --> /etc/profile.d/\*.sh

### 特殊变量

在 linux 下配置 shell 参数说明

例如，$ 表示当前 Shell 进程的 ID，即 pid，看下面的代码：

```bash
echo$
运行结果

29949
```

特殊变量列表

```bash
$0
当前脚本的文件名

n传递给脚本或函数的参数。n是一个数字，表示第几个参数。例如，第一个参数是1，第二个参数是$2。

$#
传递给脚本或函数的参数个数。

$*
传递给脚本或函数的所有参数。

@传递给脚本或函数的所有参数。被双引号("")包含时，与* 稍有不同，下面将会讲到。

$?
上个命令的退出状态，或函数的返回值。

$$
当前Shell进程ID。对于 Shell 脚本，就是这些脚本所在的进程ID。

$?
返回0:表示成功,返回1-255:表示错误代码.
```

## source 命令

在当前实例中执行脚本
