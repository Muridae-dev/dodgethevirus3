<template>
  <CFlex w="100%" h="100%" overflow="hidden" position="relative" bg="black" justify="center">
    <Modal :animalInfo="animalInfo" :hideModal="() => showModal = false" v-if="showModal" :updateInventory="updateInventory" profile="animals" />
    <CBox position="relative" zIndex="1">
      <CText fontFamily="PleaturesDemo-Regular" fontSize="4rem" w="300px" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        ANIMALS
      </CText>
      <CBox v-for="image, index in images" h="300px" w="80px" position="absolute" top="calc(50% - 300px)" left="calc(50% - 40px)"  :transform="`rotate(${index * 30}deg)`" transformOrigin="bottom" display="inline-block" >
        <CBox @click="fetchAnimal(getAnimalName(image.src));">
          <CImage :src="image.src" filter="invert(100)">
          </CImage>
        </CBox>
      </CBox>
    </CBox>
    <GrainImage bgSrc="backgrounds/savannah.jpeg"/>
  </CFlex>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage,
  CFlex
} from '@chakra-ui/vue'
import GrainImage from '../components/GrainImage.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'NewWindow',
  components: {
    CBox,
    CText,
    CImage,
    CFlex,
    GrainImage,
    Modal
  },
  props: ["website", 'updateInventory'],
  data () {
    return {
      images: [],
      animalInfo: [],
      showModal: false,
    }
  },
  async created() {
    this.images = await this.importAll(require.context('../static/assets/animalicons', false, /\.(png|jpe?g|svg)$/))
  },
  mounted() {
    this.showIntro = true;
    setTimeout(() => this.showIntro = false, 2000)
    //console.log(this.fetchAnimal('sea lion'))
  },
  methods: {
    importAll(r) {
      let imagesTemp = {}
      r.keys().forEach((item, index) => {
        imagesTemp[item.replace('./', '')] = r(item);
      })
      let imagesArray = Object.keys(imagesTemp).map(image => {let img = new Image(); img.src = require('../static/assets/animalicons/' + image); return img})

      return imagesArray
    },
    getAnimalName(src) {
      const imgName = src.split('/')
      const imgArrayLength = imgName.length
      const animalName = imgName[imgArrayLength - 1].split('.')[0]
      return animalName
    },
    async fetchAnimal(name) {
      try {
        const formattedName = name.replace(' ', '%20')
        console.log(formattedName)
        const fetchedData = await this.$axios.get(`animals?name=${formattedName}`, { headers: {'X-Api-Key': 'vNyBNzq+ez0yDWTCK8jc5w==l5GpCAI0OAXi6y9w'}})
        this.animalInfo = this.findRightAnimal(fetchedData.data, name)
        console.log(fetchedData)
        this.showModal = true;
      } catch (error) {
        console.log(error)
      }
    },
    findRightAnimal(animalArray, name) {
      let rightAnimal;
      animalArray.forEach(animal => {
        console.log(animal.name, name)
        if(animal.name.replace(' ', '%20') === name) {
          rightAnimal = animal
        }
      })
      console.log(rightAnimal)
      return rightAnimal
    }
  }
}
</script>
