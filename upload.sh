cd ./docs/.vuepress/dist
git init
git add .
git commit -m "upload by cmd"
git config http.sslVerify "false"
git push -f https://github.com/yuechiang/yuechiang.github.io.git master
cd ../../..