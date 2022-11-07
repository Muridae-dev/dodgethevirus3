<template>
  <CBox
    position="absolute"
    top="0"
    left="0"
    w="100%"
    h="100%"
    pointerEvents="none"
  >
    <CBox
      v-for="(photo, index) in marsData"
      :style="{
        'mix-blend-mode': 'difference',
        position: 'absolute',
        top: `${imgPos[index].top}`,
        left: `${imgPos[index].left}`,
      }"
    >
      <img
        :src="photo.img_src"
        :ref="index"
        @load="loadImage(index)"
        :style="{
          'max-width': '200px',
          'max-height': '200px',
          opacity: '0',
          transition: 'opacity 1s',
        }"
      />
    </CBox>
  </CBox>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage,
  CList,
  CListItem,
  CFlex
} from '@chakra-ui/vue'


export default {
  name: 'Inventory',
  components: {
    CBox,
    CText,
    CImage,
    CList,
    CListItem,
    CFlex,

  },
  props: ["inventory", "marsData"],
  data() {
    return {
      imgPos: [
        {
          top: '2%',
          left: '2%',
        },
        {
          top: '5%',
          left: 'calc(2% + 220px)',
        },
        {
          top: '39%',
          left: '7%',
        },
        {
          top: '70%',
          left: 'calc(2% + 220px)',
        },
        {
          top: '72%',
          left: '2%',
        },


        {
          top: '2%',
          left: 'calc(98% - 200px)',
        },
        {
          top: '5%',
          left: 'calc(98% - 420px)',
        },
        {
          top: '39%',
          left: '72%',
        },
        {
          top: '70%',
          left: 'calc(95% - 200px)',
        },
        {
          top: '72%',
          left: 'calc(95% - 420px)',
        },
      ]
    }
  },
  methods: {
    loadImage(index) {
      let $ref = this.$refs[index]
      $ref[0].style.opacity = '1'
    }
  }
}
</script>
