<template>
  <CBox h="100%" w="100%" zIndex="0" position="absolute" bg="black" justify="" flexWrap="wrap" overflow="hidden">
    <GifBackground profile="nasa" />

    <!-- FIRST 2 RINGS -->
    <CBox :style="{'mix-blend-mode' : 'overlay'}" class="put-center" h="200px" w="200px" border="2px dashed rgb(256,256,256, 1)" borderRadius="50%" animation="spinText 70s linear 0s infinite">
    </CBox>

    <CBox :style="{'mix-blend-mode' : 'overlay'}" class="put-center" h="400px" w="400px" bg="transparent" border="2px dashed rgb(256,256,256, 1)" borderRadius="50%" animation="spinText 50s linear 0s infinite">
    </CBox>
    <!-- FIRST 2 RINGS END -->

    <!-- PEOPLE IN SPACE -->
    <CBox :style="[{transition: 'opacity 1s'}, showPeople ? {opacity: '0.5'} : {opacity: '0'}]">
      <CBox>
        <CBox :style="{'mix-blend-mode' : 'overlay'}" class="put-center" h="600px" w="600px" bg="transparent" border="2px dashed red" borderRadius="50%" animation="spinText 50s linear 0s infinite">
        </CBox>
        <CBox v-for="person, index in peopleInSpace" display="inline-block" :pointerEvents="showPeople ? 'auto' : 'none'">
          <NasaPlanet :sentFunc="() => null" :text="person.name" hVar="320px" :timeForward="40 * index" color="yellow" :hoverData="person" :hoverFunc="hoverFunc" />
        </CBox>
      </CBox>
    </CBox>
    <!-- PEOPLE IN SPACE END -->

    <!-- PEOPLE IN SPACE SHOW INFO -->
    <CFlex class="put-center" :opacity="hoverPerson ? '1' : '0'" flexDirection="column" justify="center" pointerEvents="none" transition="opacity 0.2s" w="100%" h="100%" bg="rgb(0, 0, 0, 0.3)">
      <CBox v-if="hoverData" v-for="info in Object.entries(hoverData)" textAlign="center" p="20px">
        <CText fontFamily="Baunk" color="gold" fontSize="1rem">
          {{ info[0] }}
        </CText>

        <CText fontFamily="Baunk" color="yellow" fontSize="4rem" lineHeight="3rem">
          {{ info[1] }}
        </CText>
      </CBox>
    </CFlex>
    <!-- PEOPLE IN SPACE SHOW INFO END -->

    <!-- INITIAL PLANETS -->

    <NasaPlanet text="mars" hVar="220px" :timeForward="225" :sentFunc="() => showPhotos = !showPhotos"  />
    <NasaPlanet text="mars" hVar="120px" :timeForward="30" :sentFunc="() => showPhotos = !showPhotos"  />
    <NasaPlanet text="mars" hVar="120px" :timeForward="205" :sentFunc="() => showPhotos = !showPhotos"  />
    <NasaPlanet text="mars" hVar="220px" :timeForward="105" :sentFunc="() => showPhotos = !showPhotos"  />

    <NasaPlanet text="people" color="yellow" hVar="120px" :timeForward="370" :sentFunc="() => showPeople = !showPeople" />

    <NasaPlanet text="mars" color="yellow" hVar="220px" :timeForward="225" :sentFunc="() => showPhotos = !showPhotos"  />
    <!-- INITIAL PLANETS END -->

    <MarsPhotos v-if="marsData && showPhotos" :marsData="marsData" />

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
import GifBackground from '../components/GifBackground.vue'
import NasaPlanet from '../components/NasaPlanet.vue'
import Modal from '../components/Modal.vue'
import MarsPhotos from '../components/MarsPhotos.vue'

export default {
  name: 'Inventory',
  components: {
    CBox,
    CText,
    CImage,
    CList,
    CListItem,
    CFlex,
    GifBackground,
    NasaPlanet,
    Modal,
    MarsPhotos
},
  props: ["inventory"],
  data() {
    return {
      showPhotos: false,
      showPeople: false,
      peopleInSpace: [],
      marsData: false,
      marsPhotos: [],
      dataRes: [],
      hoverPerson: false,
      hoverData: false,
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
  async mounted() {
    this.marsData = await this.fetchDailyVideo()
    await this.fetchPeopleInSpace()
    await this.fetchSatPhoto()
  },
  methods: {
    async fetchSatPhoto() {
      const fetchedData = await this.$nasaApi.get('planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=3gXErdvbYNqPy5MzT3UJOwmpIRtwJf22vIzPTfYh').then(res => {
        return res.data
      })

      console.log(fetchedData)
    },

    async fetchPeopleInSpace() {
      const fetchedData = await this.$astrosApi.get().then(res => {
        return res.data.people
      })

      this.peopleInSpace = fetchedData
    },

    async fetchDailyVideo() {
      this.dataRes= await this.$nasaApi.get('mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=3gXErdvbYNqPy5MzT3UJOwmpIRtwJf22vIzPTfYh').then(res => {
      return res.data
    })

    const photoArray = []
    for(var i = 0; i < 10; i++) {
      let randomNr = Math.round(Math.random()*856)

      photoArray.push(this.dataRes.photos[randomNr])
    }

    return photoArray
    },

    loadImage(index) {
      let $ref = this.$refs[index]
      $ref[0].style.opacity = '1'
    },

    hoverFunc(data, boolVar) {
      if(boolVar) {
        this.hoverData = data;
        this.hoverPerson = true;
      }
      else {
        this.hoverPerson = false;
      }
    },



  },


}
</script>
