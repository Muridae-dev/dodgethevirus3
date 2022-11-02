const sharp = require('sharp')
const axios = require('axios')
const fs = require('fs')
const download = require('image-downloader')


const formattImages = async () => {

const fetchedArt = await axios.get('https://www.rijksmuseum.nl/api/nl/collection?key=0WAxbg6V&involvedMaker=Rembrandt+van+Rijn&ps=100')
  .then(res => {return res.data.artObjects})

fetchedArt.forEach(async (item, index) => {
  if(item.webImage?.url) {
    const url = item.webImage.url
    download.image({
      url,
      dest: `../../webImages/image${index}.jpeg`

    })
  }
})

// sharp('./static/assets/backgrounds/savannah.jpeg')
//     .resize({ width: 100 })
//     .toFile('savannahupdated.jpeg')    fs.createWriteStream(`./webImages/${index}.jpeg`)
}

formattImages()
