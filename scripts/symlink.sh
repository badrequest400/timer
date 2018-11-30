#!/bin/bash

directory=$1

for d in `find ${directory} -type d -depth 1`
do
  echo " >>>> node_modules/$(basename $d)"
  ln -sf "$d" "node_modules/$(basename $d)"
done
