@echo off

echo Building npm Modules
npm rebuild

node_modules\.bin\jake %*
