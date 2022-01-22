#!/bin/bash

npm run build;

echo "=> Frontend build process completed";
cp -r dist/ ../server/build;

echo "";
echo "=> Moved {dist} folder to 'server/build' ";

rm -r dist/;
echo "";
echo "=> Deleted {dist} folder from 'client/'";

cd ../server/build/ || exit

#git add .
#git commit -am "DEPLOY"
#git push heroku master
#
#heroku open;

echo "=> DEPLOY COMPLETED";