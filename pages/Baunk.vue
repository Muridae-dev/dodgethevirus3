<template>
  <CFlex w="100%" h="100%" overflow="hidden" position="relative" bg="black" justify="center">
    <CBox position="relative" zIndex="1">
      <CBox v-for="letter, index in splitLetters(textCircle)" h="500px" w="6rem" position="absolute" transformOrigin="bottom" :transform="`rotate(${((index-(splitLetters(textCircle).length/2)) * 10) + 5}deg)`" display="inline-block" >
        <CText h="1rem" w="6rem" fontFamily="PleaturesDemo-Regular" fontSize="8rem" textAlign="center" margin="auto">
          {{ letter }}
        </CText>
      </CBox>
    </CBox>
    <GrainImage/>
  </CFlex>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage,
  CFlex
} from '@chakra-ui/vue'
import GrainImage from '../components/GrainImage.vue'

export default {
  name: 'NewWindow',
  components: {
    CBox,
    CText,
    CImage,
    CFlex,
    GrainImage
  },
  props: ["website"],
  data () {
    return {
      textCircle: "WELCOME",
      websites: {

      }
    }
  },
  mounted() {
    this.showIntro = true;
    setTimeout(() => this.showIntro = false, 2000)
  },
  methods: {
    splitLetters(word) {
      const letters = word.split("");
      console.log(letters)
      return letters
    }
  }
}
</script>
