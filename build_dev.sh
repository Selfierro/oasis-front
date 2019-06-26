#!/usr/bin/env bash

npm i && npm rb
pm2 delete oasis
pm2 start --name oasis npm -- run dev
