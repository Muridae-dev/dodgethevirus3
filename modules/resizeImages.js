const sharp = require('sharp')
const axios = require('axios')
const fs = require('fs')
const download = require('image-downloader')


const formattImages = async () => {
  let i = 0;
  while(i <= 99) {
    sharp(`./webImages/image${i}.jpeg`)
      .resize({ width: 500 })
      .toFile(`./webImages/aimage${i}.jpeg`)
    i++;
  }


}

formattImages()
