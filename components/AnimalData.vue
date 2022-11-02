<template>
  <CBox>
    <CText as="h1" fontSize="8rem" fontFamily="PleaturesDemo-Regular">{{ animalInfo.name }}</CText>
    <CFlex justify="center" align="center" h="60%">
      <CImage filter="invert(1)" :src="require(`../static/assets/animalicons/${animalInfo.name}.svg`)"></CImage>
      <CBox w="50%">
        <CText fontSize="2rem" fontFamily="Fasthand">
          <CText as="u" fontFamily="Fasthand">Family:</CText>
          {{ animalInfo.taxonomy.family }}
        </CText>
        <CText fontSize="2rem" fontFamily="Fasthand">
          <CText as="u" fontFamily="Fasthand">Eats:</CText>
          {{ animalInfo.characteristics.prey || animalInfo.characteristics.main_prey }}
        </CText>
        <CText fontSize="2rem" fontFamily="Fasthand">
          <CText as="u" fontFamily="Fasthand">Located in:</CText>
          <span v-for="location in animalInfo.locations">{{ location }} </span>
        </CText>
        <CText fontSize="2rem" fontFamily="Fasthand">
          {{ animalInfo.characteristics.slogan }}
        </CText>
        <CButton bg="black" color="white" mt="40px"
        @click="updateInventory({ name: animalInfo.name, family: animalInfo.taxonomy.family, prey: animalInfo.characteristics.prey || animalInfo.characteristics.main_prey })">
          GET {{ animalInfo.name.toUpperCase() }}
        </CButton>
      </CBox>
    </CFlex>
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

export default {
  name: 'Modal',
  components: {
    CBox,
    CText,
    CImage,
    CFlex,
    CButton
  },
  props: ["animalInfo", "updateInventory"],
  mounted() {
    console.log(this.animalInfo.locations.map(item => {return item}))
  }
}
</script>
