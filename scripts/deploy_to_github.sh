#!/bin/bash

#* checkout current gh-pages
rm -rf dist/

git clone git@github.com:Kaleidos-Chaos/unbeschrieben.git -b gh-pages --single-branch dist/

#* build new
npm run build || { echo -e "\033[0;31mgrunt build failed\033[0m"; exit 1; }

#* prepare page
cd dist/
cp ../scripts/gh-pages-content/CNAME ./CNAME
mkdir fonts
cp -r ../app/fonts ./
rm .htaccess
git co scripts/

#* commit and push to gh-pages
git add --all
git commit -m'update gh-pages'
git push origin gh-pages
cd ..
