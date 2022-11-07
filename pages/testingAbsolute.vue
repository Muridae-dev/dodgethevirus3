<template>
  <div class="container">
    <CBox
      w="100vw"
      h="100vh"
      bg="black"
      color="white"
      margin="auto"
      overflow="hidden"
      position="relative"
    >
      <CBox position="absolute" top="50%" transform="translateY(-50%)">
        <CText
          fontFamily="Baunk"
          fontSize="4rem"
          lineHeight="4rem"
          transition="opacity 0.1s"
          >DODGETHEVIRUS3</CText
        >
      </CBox>
      <CBox
        v-for="website in websites"
        position="absolute"
        :top="website.yPos"
        :left="website.xPos"
        transform="translateY(-50%)"
      >
        <CBox
          @click="website.loadPage = true"
          :fontFamily="website.fontFamily"
          :transform="
            website.sideText &&
            (website.row <= 5
              ? 'rotate(-90deg) translateX(30%)'
              : 'rotate(90deg) translateX(30%)')
          "
          fontSize="4rem"
          transition="opacity 0.1s"
          :opacity="showTitle ? '1' : '0'"
          >{{ website.title }}</CBox
        >
      </CBox>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CGrid,
  CGridItem,
  CButton,
} from '@chakra-ui/vue'
import Intro from '../components/Intro.vue'
import GifBackground from '../components/GifBackground.vue'
import NewWindow from '../components/NewWindow.vue'
import Canobis from './Animals.vue'

export default {
  name: 'IndexPage',
  components: {
    CBox,
    CText,
    CGrid,
    CButton,
    Intro,
    CGridItem,
    GifBackground,
    NewWindow,
    Canobis
  },
  data () {
    return {
      showTitle: true,
      websites: [
        {
          title: 'Baunk',
          fontFamily: 'Baunk',
          yPos: 'calc(51vh - 4rem)',
          xPos: '5rem',
          color: 'red',
          loadPage: false,
        },
        {
          title: 'Bogam',
          fontFamily: 'Bogam',
          yPos: 'calc(47vh + 8rem)',
          xPos: '7rem',
          color: 'gold',
          loadPage: false,

        },
        {
          title: 'Canobis',

          fontFamily: 'Canobis-Regular',
          yPos: 'calc(48vh + 4rem)',
          xPos: '3rem',
          color: 'green',
          loadPage: false,
        },
        {
          title: 'Crenzo',
          fontFamily: 'CRENZO',
          yPos: 'calc(49vh + 4rem)',
          xPos: '15rem',
          color: 'blue',
          loadPage: false,
        },
      ]
      }

  },
  computed: {
  },
  mounted() {
    setTimeout(() => this.showTitle = true, 3200)
  },
  methods: {
    logSomething() {
      console.log('something')
    }
  }
}
</script>
