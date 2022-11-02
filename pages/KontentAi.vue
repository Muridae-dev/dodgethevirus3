<template>
  <CFlex wrap="wrap" h="100vh" w="100%" zIndex="2" position="relative" overflow="hidden">
    <CBox v-if="content.home">
      {{ content.home.elements.title.value }}
      <CBox v-for="element in content.home.elements.content.value">
        {{ Object.entries(content[element].elements) }}
      </CBox>
    </CBox>

  </CFlex>
  </template>

  <script lang="js">
  import {
    CBox,
    CText,
    CImage,
    CFlex
  } from '@chakra-ui/vue'

  export default {
    name: 'NewWindow',
    components: {
      CBox,
      CText,
      CImage,
      CFlex
    },
    props: [""],
    data() {
      return {
        content: {}
      }
    },

    async mounted() {
      this.content = await this.$kontentApi.get().then(res => {return res.data.modular_content});
      console.log(this.content)
    },
    methods: {

    }
  }
  </script>
