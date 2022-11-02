<template>
<CBox position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" h="90%" w="90%" zIndex="2">
  <CBox w="100%" h="30px" bg="black" @click="website.loadPage = false" borderRadius="16px 16px 0 0"></CBox>
  <CBox w="100%" h="calc(100% - 30px)" zIndex="2" overflow="hidden">
    <slot>
    </slot>
  </CBox>
</CBox>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage
} from '@chakra-ui/vue'

export default {
  name: 'NewWindow',
  components: {
    CBox,
    CText,
    CImage
  },
  props: ["website"],
}
</script>
