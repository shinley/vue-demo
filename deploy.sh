#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm run gh-pages:build

# 进入生成的构建文件夹
cd ./dist

# 如果你是要部署到自定义域名
#echo 'www.shinley.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/shinley/vue-demo.git master:gh-pages

cd -