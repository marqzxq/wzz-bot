#!bin/bash

pkg update -y
pkg upgrade -y
pkg install ruby
gem install lolcat
pkg install nodejs -y
pkg install libwebp -y
pkg install ffmpeg -y
pkg install wget -y
pkg install tesseract -y
pkg install graphicsmagick -y
pkg install imagemagick -y
npm install
npm install pm2 -g

echo "opaa, tudo certo pode dar npm start e escanear o código para se divertir com o bot :)"

