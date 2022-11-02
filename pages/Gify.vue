<template>
  <CFlex h="100%" w="100%" zIndex="0" position="absolute" bg="black" justify="" flexWrap="wrap">
    <img :style="{width:'100px', height:'100px'}" :src="gifData && gifData" />

  </CFlex>
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

export default {
  name: 'Gify',
  components: {
    CBox,
    CText,
    CImage,
    CList,
    CListItem,
    CFlex
  },
  data() {
    return {
      gifData: false,
    }
  },
  async mounted() {
    let dataFetch;
    await this.$gifyApi.get().then(res => {
      dataFetch = res.data.data
    })
    this.gifData = dataFetch.images.original.url
    console.log(this.gifData)
  },
  methods: {

  }
}
</script>
