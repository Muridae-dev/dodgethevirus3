<template>
  <CBox
    h="100vh"
    w="100%"
    zIndex="2"
    position="relative"
    overflow="hidden"
    bg="black"
    @mousemove.self="followMouse($event)"
    @click="clickMouse()"
  >
    <CBox
      h="100px"
      w="100px"
      ref="cursorBox"
      position="absolute"
      borderRadius="50%"
      border="3px solid red"
      transform="translate(-50%,-50%)"
      pointerEvents="none"
      transition="top 0.05s, left 0.05s"
    >
      <CBox
        w="0"
        h="0"
        bg="red"
        opacity="0.6"
        borderRadius="50%"
        position="absolute"
        transform="translate(-50%,-50%)"
        top="50%"
        left="50%"
        ref="innerCursorBox"
      >
      </CBox>
      <CBox
        w="0"
        h="0"
        bg="red"
        opacity="0.8"
        borderRadius="50%"
        position="absolute"
        transform="translate(-50%,-50%)"
        top="50%"
        left="50%"
        ref="innerCursorBox2"
      >
      </CBox>
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
      cursorBox: ''
    }
  },

  mounted() {
    this.cursorBox = this.$refs.cursorBox
    this.innerBox = this.$refs.innerCursorBox

    console.log(this.cursorBox)

  },
  methods: {
    followMouse(e) {
      this.cursorBox.$el.style.top = e.pageY + 'px'
      this.cursorBox.$el.style.left = e.pageX + 'px'
    },
    // clickMouse() {
    //   // this.innerBox.classList.add('mouse__active')
    // }
    clickMouse() {
      this.innerBox.$el.style.animation = ''
      setTimeout(() => this.innerBox.$el.style.animation = 'mouseClick 1s', 10)


    },
    resetClickMouse() {
    }
  }
}
</script>
<style>
.mouse__active {
  animation: mouseClick 0.5s;
}
</style>
