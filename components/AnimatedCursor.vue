<template>
  <div :style="{overflow: 'hidden'}">
    <CBox
      h="50px"
      w="50px"
      ref="cursorBox"
      position="absolute"
      borderRadius="50%"
      border="3px solid white"
      pointerEvents="none"
      mixBlendMode="difference"
      id="cursorBox"
      zIndex="99"
    >
    </CBox>
    <CBox
      w="20px"
      h="20px"
      bg="white"
      opacity="0.8"
      borderRadius="50%"
      position="absolute"
      transform="translate(-50%,-50%)"
      mixBlendMode="difference"
      ref="cursorDot"
      zIndex="99"
      pointerEvents="none"
    >
      <CBox
        w="0"
        h="0"
        bg="white"
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
  </div>
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
  props: ["container"],
  data() {
    return {
      images: [],
      boolArray: [],
      i: 0,
      indexCheck: 0,
      cursorBox: '',
      cursorDot: '',
      mouseX: 0,
      mouseY: 0,
    }
  },

  mounted() {
    this.cursorBox = {
      el: this.$refs.cursorBox,
      x: 0,
      y: 0,
      update: () => {
        this.cursorBox.el.$el.style.transform = `translate3d(calc(${this.cursorBox.x}px - 50%), calc(${this.cursorBox.y}px - 50%), 0)`
      }
    }
    this.cursorDot = {
      el: this.$refs.cursorDot,
      x: 0,
      y: 0,
      update: () => {
        this.cursorDot.el.$el.style.transform = `translate3d(calc(${this.cursorDot.x}px - 50%), calc(${this.cursorDot.y}px - 50%), 0)`
      }
    }
    this.innerBox = this.$refs.innerCursorBox
    this.innerBox2 = this.$refs.innerCursorBox2
    this.$parent.$el.addEventListener('mousemove', this.followMouse, false)
    this.$parent.$el.addEventListener('mousedown', this.clickMouse, false)

    requestAnimationFrame(this.move)

  },
  methods: {
    followMouse(e) {
      this.mouseX = e.pageX
      this.mouseY = e.pageY
    },
    move() {
      this.cursorDot.x = this.lerp(this.cursorDot.x, this.mouseX, 0.7)
      this.cursorDot.y = this.lerp(this.cursorDot.y, this.mouseY, 0.7)
      this.cursorDot.update()

      this.cursorBox.x = this.lerp(this.cursorBox.x, this.mouseX, 0.1)
      this.cursorBox.y = this.lerp(this.cursorBox.y, this.mouseY, 0.1)
      this.cursorBox.update()

      requestAnimationFrame(this.move)
    },
    clickMouse() {
      this.innerBox.$el.style.animation = ''
      this.innerBox2.$el.style.animation = ''
      setTimeout(() => {this.innerBox.$el.style.animation = 'mouseClick 1s'; this.innerBox2.$el.style.animation = 'mouseClick2 1s'}, 10)
    },
    lerp(start,end,amt) {
      return (1-amt)*start+amt*end
    },
    testing() {
      console.log('ran')
    }
  }
}
</script>
