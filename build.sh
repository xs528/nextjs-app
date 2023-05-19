#!/bin/sh

cd $(dirname $0)
git fetch --all
git reset --hard origin/main

npm ci
npm run build
