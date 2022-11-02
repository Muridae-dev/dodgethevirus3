<template>
  <div class="container">
    <CBox
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
      bg="black"
      color="white"
      margin="auto"
      overflow="hidden"
      position="relative"
    >
    <CBox fontSize="5rem"  v-for="n in 20" lineHeight="4rem">
      <CText fontFamily="Baunk" transition="opacity 0.1s" :transitionDelay="`${n/15}s`" :opacity="showIntro ? '1' : '0' ">DODGETHEVIRUS3</CText>
    </CBox>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CText
} from '@chakra-ui/vue'

export default {
  name: 'Intro',
  components: {
    CBox,
    CText
  },
  data () {
    return {
      showIntro: false,
      websites: {

      }
    }
  },
  mounted() {
    this.showIntro = true;
    setTimeout(() => this.showIntro = false, 2000)
  },
  methods: {
  }
}
</script>
