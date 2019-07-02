#!/usr/bin/env bash

npm i && npm rb
npm run build
pm2 delete oasis
pm2 start --name oasis npm -- run start
