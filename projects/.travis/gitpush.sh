echo "git push"
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git config --global push.default current
git stash
git checkout master
git stash pop
git add package.json
git add package-lock.json

git commit -m "Auto-updating package release version ${GH_TOKEN}"
git push https://${GH_TOKEN}@github.com/rkramakrishna17/taxilla-poc-library.git