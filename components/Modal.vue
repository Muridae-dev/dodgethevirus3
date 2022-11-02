<template>
  <CBox z-i h="100%" w="100%" bg="rgb(0,0,0,0.8)" zIndex="2" position="absolute" top="50%" left="50%" textAlign="center" transform="translate(-50%,-50%)">
    <CBox @click="hideModal" position="absolute" top="10px" right="20px" fontFamily="GOVER" fontSize="2.5rem">X</CBox>
    <AnimalData :animalInfo="animalInfo" :updateInventory="updateInventory" v-if="profile === 'animals'" />

    <CBox v-if="profile === 'nasa'">

    </CBox>
  </CBox>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage,
  CFlex,
  CButton
} from '@chakra-ui/vue'

import AnimalData from './AnimalData.vue'

export default {
  name: 'Modal',
  components: {
    CBox,
    CText,
    CImage,
    CFlex,
    CButton,
    AnimalData
  },
  props: ["animalInfo", "hideModal", "updateInventory", "profile", "sentData"],
  mounted() {
    console.log(this.animalInfo.locations.map(item => {return item}))
  }
}
</script>
