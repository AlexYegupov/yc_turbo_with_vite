#/bin/bash

cd $(dirname "$0")/../docs

# remove old docsify sidebar
rm -rf ./_sidebar.md

# Remark: normalize markdowns and validate links
yarn remark -f --use remark-validate-links ./ -o ./

# generate docsify sidebar from *.md files
echo '<!-- Generated automatically by prepare-docsify.sh -->' > _sidebar.md
echo '* [Home](README.md)' >> _sidebar.md
ls *.md  |grep -v '^_' |grep -v 'README.md' | xargs -I % -n1 basename % .md |xargs -I % -n1 echo \* [%]\(%.md\) >> _sidebar.md


