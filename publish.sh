#!/bin/bash

if [ "$(git rev-parse --abbrev-ref HEAD)" != "develop" ]
    then
        echo "Not on develop. Exiting..."
        exit 1
fi

# Build the JavaScript app
printf "\nBUILDING APP\n";
npm run build;

# Zip the built files
printf "\nBUNDLING FILES\n\n";
zip -r build build;

# Move built files to root directory
printf "\nCOMMITTING FILES TO gh-pages BRANCH\n\n";
git checkout gh-pages
rm -rf build/
unzip build
rm build.zip

# Move built files to root directory
ls | grep -v build | grep -v node_modules | grep -v .gitignore | xargs rm -rf;
mv build/*.* ./
rm -rf build/

# Push files to GitHub
git add -A
git commit --amend --no-edit

printf "\nSENDING TO GITHUB\n\n";

git push --force origin

printf "\nHEADED BACK TO DEVELOP\n\n";

git checkout develop

printf "\nDONE\n\n";
