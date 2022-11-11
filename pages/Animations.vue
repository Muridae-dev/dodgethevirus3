<template>
  <CBox
    h="100vh"
    w="100%"
    zIndex="2"
    position="relative"
    overflow="hidden"
    bg="linear-gradient(45deg, rgba(222,77,77,1) 0%, rgba(121,9,103,1) 25%, rgba(5,168,188,1) 50%, rgba(255,0,211,1) 75%, rgba(222,77,64,1) 100%);"
    backgroundSize="800% 800%"
    cursor="none"
    ref="animContainer"
    animation="backgroundGradientAnim 30s infinite ease normal, backgroundFilter 5s infinite ease alternate"
  >
    <AnimatedCursor />
    <CBox
      top="50%"
      left="50%"
      position="absolute"
      @click="testing('something')"
      ref="something"
      zIndex="0"
      >PRESS ME
    </CBox>
  </CBox>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage,
  CFlex
} from '@chakra-ui/vue'
import GifBackground from '../components/GifBackground.vue'
import AnimatedCursor from '../components/AnimatedCursor.vue'

export default {
  name: 'NewWindow',
  components: {
    CBox,
    CText,
    CImage,
    CFlex,
    GifBackground,
    AnimatedCursor
  },
  mounted() {
    console.log(this.$refs)
  },
  methods: {
    testing(test) {
      console.log(test)
    }
  }
}
</script>
<style>
.mouse__active {
  animation: mouseClick 0.5s;
}
</style>
