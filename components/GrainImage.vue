<template>
  <CBox h="100%" w="100%" zIndex="0" position="absolute">
    <CImage
      position="absolute"
      w="100%"
      h="100%"
      opacity="0.05"
      zIndex="2"
      :src="require('../static/assets/backgrounds/static2.gif')"
    ></CImage>
    <CBox
      position="absolute"
      h="100%"
      w="100%"
      opacity="0.9"
      zIndex="1"
      :backgroundImage="`url(${require('../static/assets/backgrounds/savannah.jpeg')})`"
      backgroundSize="cover"
    ></CBox>
  </CBox>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage
} from '@chakra-ui/vue'

export default {
  name: 'GrainImage',
  components: {
    CBox,
    CText,
    CImage
  },
}
</script>
