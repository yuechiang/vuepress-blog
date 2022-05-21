#!/bin/bash
cd ./docs/.vuepress/dist
git init
git add .
git commit -m "upload by cmd"
git push -f https://github.com/yuechiang/yuechiang.github.io.git master
#git push -f git@github.com:yuechiang/yuechiang.github.io.git master
cd ../../..
