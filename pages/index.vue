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
      <!-- <Intro /> -->
      <GifBackground profile="main" />
      <CGrid
        templateColumns="repeat(10, 10%)"
        templateRows="repeat(10, 1fr)"
        position="absolute"
        top="0"
        left="0"
        h="100vh"
        w="100vw"
        zIndex="1"
        :opacity="showTitle ? '1' : '0'"
      >
        <CGridItem rowStart="6">
          <CText
            fontFamily="Baunk"
            fontSize="6rem"
            lineHeight="4rem"
            transition="opacity 0.1s"
            >DODGETHEVIRUS3</CText
          >
        </CGridItem>
        <CGridItem
          v-for="website in websites"
          :rowStart="website.row"
          :colStart="website.col"
          :colSpan="website.colSpan && website.colSpan"
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
            fontSize="6rem"
            lineHeight="4rem"
            transition="opacity 0.1s"
            :opacity="showTitle ? '1' : '0'"
            >{{ website.title }}</CBox
          >
        </CGridItem>
      </CGrid>

      <NewWindow
        v-for="website in websites"
        :website="website"
        v-if="website.loadPage"
      >
        <component
          :is="website.component && website.component"
          :updateInventory="updateInventory"
          :inventory="inventory"
        ></component> </NewWindow
      >>
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
import Animals from './Animals.vue'
import Inventory from './Inventory.vue'
import Nasa from './Nasa.vue'
import Rijks from './Rijks.vue'

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
    Animals,
    Inventory,
    Nasa,
    Rijks
  },
  data () {
    return {
      showTitle: true,
      inventory: [],
      websites: [
        {
          title: 'NASA',
          component: 'Nasa',
          fontFamily: 'Baunk',
          row: '4',
          col: '3',
          color: 'red',
          loadPage: false,
        },
        {
          title: 'Rijks',
          component: 'Rijks',
          fontFamily: 'Canobis-Regular',
          row: '5',
          col: '2',
          color: 'gold',
          loadPage: false,
          sideText: false
        },
        {
          title: 'Animals',
          component: 'Animals',
          fontFamily: 'PleaturesDemo-Regular',
          row: '7',
          col: '2',
          color: 'green',
          loadPage: false,
          sideText: false
        },
        {
          title: 'Inventory',
          component: 'Inventory',
          fontFamily: 'CRENZO',
          row: '5',
          col: '4',
          color: 'blue',
          loadPage: false,
        },

      ]
      }

  },
  mounted() {
    setTimeout(() => this.showTitle = true, 3200)
    this.formatInventory()
    console.log(this.inventory)
  },
  methods: {
    logSomething() {
      console.log('something')
    },
    updateInventory(item) {
      this.inventory.push(item)
      localStorage.setItem('inventory', JSON.stringify(this.inventory))
      console.log('inventory', JSON.parse(localStorage.getItem('inventory')))
    },
    formatInventory() {
      JSON.parse(localStorage.getItem('inventory')).map(item => {
        if(Array.isArray(item)) {
          item.map(ite => {
            this.inventory.push(ite)
          })
        } else {
          this.inventory.push(item)
        }
      })
    }
  }
}
</script>
