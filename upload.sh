#!/bin/bash
cd ./docs/.vuepress/dist
git init
git add .
git commit -m "upload by cmd"
git push -f https://github.com/yuechiang/yuechiang.github.io.git master
<<<<<<< HEAD
#git push -f git@github.com:yuechiang/yuechiang.github.io.git master
cd ../../..
=======
cd ../../..
echo "done"
>>>>>>> 21318d091fb17775ee2bdfb6a3dd01a2b4da1b3f
