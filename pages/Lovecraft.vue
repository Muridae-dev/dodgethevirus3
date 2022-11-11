<template>
  <CBox
    :backgroundImage="`url(${require('../static/assets/lovecraft/lovecraftbgBig.png')})`"
    height="100vh"
    width="100vw"
    backgroundSize="cover"
    overflowX="hidden"
    position="relative"
  >
    <CBox
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
    </CBox>
  </CBox>
</template>

<script>
import { CBox, CText, CImage } from '@chakra-ui/vue'

export default {
  name: 'Lovecraft',
  components: {
    CBox,
    CText,
    CImage,
  },
}
</script>
