<template>
  <CFlex wrap="wrap" h="100vh" w="100%" zIndex="2" position="relative" overflow="hidden" bg="black">
    <GifBackground profile="rijks" />
    <img v-for="image, index in images" :style="{position: 'absolute', left: `${Math.floor(Math.random() * 100)}%`, top: '0', transform: 'translateY(-100%)', height: '200px', opacity: '1'}" :ref="`rijks${index}`" :src="image.src"
    @click="showcase(index)" />
  </CFlex>
  </template>

  <script lang="js">
  import {
    CBox,
    CText,
    CImage,
    CFlex
  } from '@chakra-ui/vue'
  import GifBackground from '../components/GifBackground.vue'

  export default {
    name: 'NewWindow',
    components: {
      CBox,
      CText,
      CImage,
      CFlex,
      GifBackground
    },
    props: [""],
    data() {
      return {
        images: [],
        boolArray: [],
        i: 0,
        indexCheck: 0,
      }
    },

    async mounted() {
      await this.importAll(require.context('../static/assets/rijksImages/', true, /\.(png|jpe?g|svg)$/))

      this.images = this.images.map(image => {
        const img = new Image()
        img.src = require(`../static/assets/rijksImages/${image}`)
        img.onload = () => {
          this.i++;
          console.log(this.i);
        }

        return img
      })

      setTimeout(() => this.loadImage(this.indexCheck), 1000)
    },
    methods: {
      importAll(r) {
        r.keys().forEach(key => this.images.push(key.replace('./', '')))
      },
      loadImage(index) {
        let $ref = this.$refs[`rijks${index}`];
        $ref[0].classList.add('active')
        setTimeout(() => $ref[0].classList.remove('active'), 4000)

        this.indexCheck++;
        if(this.indexCheck === this.images.length - 1) this.indexCheck = 1;
        setTimeout(() => this.loadImage(this.indexCheck), 250)
      },
      showcase(index) {
        let $ref = this.$refs[`rijks${index}`];
        $ref[0].classList.remove('active')
        $ref[0].classList.add('showcase')

      }
    }
  }
  </script>
  <style>
    .active {
      transition: transform 4s linear, opacity 1s !important;
      transform: translateY(100vh) !important;
      opacity: 1 !important;
    }

    .showcase {
      transition: transform 1s linear, top 1s, left 1s !important;
      transform: translate(-50%,-50%) !important;
      top: 50% !important;
      left: 50% !important;
      opacity: 1 !important;
    }

  </style>
