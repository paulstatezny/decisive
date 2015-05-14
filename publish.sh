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
printf "\nBUNDLING FILES\n";
zip -r build build;

# Move built files to root directory
printf "\nMOVING FILES TO gh-pages BRANCH\n";
git checkout gh-pages
rm -rf build/
unzip build
rm build.zip

# Move built files to root directory
ls | grep -v build | grep -v node_modules | grep -v .gitignore | xargs rm -rf;
mv build/*.* ./
rm -rf build/
