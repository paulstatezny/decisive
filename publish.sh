#!/bin/bash

if [ "$(git branch)" != "develop" ]
	then
		echo "Not on develop. Exiting..."
		exit 1
fi

npm run build;
rm !(build);
