<template>
  <CBox
    height="100%"
    width="100%"
    backgroundSize="cover"
    overflowX="hidden"
    position="relative"
    bg="black"
  >
  <CBox v-if="deathActive" fontFamily="Lovecraft1" fontSize="20rem" color="red" animation="shakeText 0.0001s infinite alternate" position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" zIndex="2">
    N'GHA
  </CBox>
  <CBox fontFamily="Lovecraft1" fontSize="5rem" color="white" textAlign="center" zIndex="1" position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
    <span v-for="letter in printText">{{letter}}</span>
  </CBox>
  <GifBackground profile="lovecraft"/>
    <!-- <CBox
      position="absolute"
      bottom="0"
      width="100%"
      height="30%"
      bg="rgb(0,0,0,0.8)"
      backdropFilter="blur(10px)"
    >
      <CBox
        position="absolute"
        top="0"
        left="0"
        transform="translateY(-100%)"
        height="400px"
        width="400px"
        overflow="hidden"
        backdropFilter="blur(10px)"
      >
        <CBox
          height="150%"
          width="150%"
          transformOrigin="center"
          transform="rotate(45deg) translate(-25%, 50%)"
          bg="rgb(0,0,0,0.8)"
          backdropFilter="blur(10px)"
          position="absolute"
        >
        </CBox>
      </CBox>
    </CBox> -->
  </CBox>
</template>

<script>
import { CBox, CText, CImage } from '@chakra-ui/vue'
import GifBackground from '../components/GifBackground.vue';

export default {
  name: 'Lovecraft',
  components: {
    CBox,
    CText,
    CImage,
    GifBackground
  },
  data() {
    return {
      text: "Cahf ah nafl mglw'nafh hh' ahor syha'h ah'legeth, ng llll or'azath syha'hnahh n'ghftephai n'gha ahornah ah'mglw'nafh",
      printText: [],
      i: 0,
      theInterval: '',
      deathActive: false,
    }
  },
  mounted() {
    this.theInterval = setInterval(() => {
      this.printText.push(this.text[this.i]);
      this.i++;
      if(this.i >= this.text.length) {
        clearInterval(this.theInterval)
        setTimeout(() => this.deathActive = true, 500)
      }
  }, 50);

  }

}
</script>
