#!/bin/bash

echo  "Kia Ora. What is the name of the component you want to remove?"  

read COMPONENT_NAME

echo Removing component: $COMPONENT_NAME

rm -rf ./src/components/$COMPONENT_NAME
sed -i '' '/$COMPONENT_NAME/d' ./src/index.js
