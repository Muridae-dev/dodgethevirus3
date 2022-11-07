<template>
  <div class="container">
    <CBox
      w="100%"
      h="100%"
      overflow="hidden"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
    >
      <!-------------------------- PROFILE RIJKS -------------------------->
      <img
        v-if="profile === 'rijks'"
        class="put-center"
        :style="{
          opacity: '0.6',
          'mix-blend-mode': 'difference',
          width: '100%',
          top: 'calc(50% - 50px)',
        }"
        :src="require('../static/assets/backgrounds/static8.gif')"
      />
      <div
        v-if="profile === 'rijks'"
        class="put-center"
        :style="{
          'mix-blend-mode': 'difference',
          height: '100%',
          width: '100%',
          background: '#0d0021',
        }"
      ></div>

      <!-------------------------- PROFILE MAIN -------------------------->
      <CImage
        v-if="profile === 'main'"
        opacity="0.1"
        w="100%"
        h="100%"
        :src="require('../static/assets/backgrounds/static15.gif')"
      ></CImage>
      <CImage
        v-if="profile === 'main'"
        opacity="0.3"
        w="100%"
        h="100%"
        :src="require('../static/assets/backgrounds/static2.gif')"
      ></CImage>

      <!-------------------------- PROFILE NASA -------------------------->
      <img
        v-if="profile === 'nasa'"
        class="full-img"
        :style="{ opacity: '0.3' }"
        :src="require('../static/assets/backgrounds/stars3.gif')"
      />
      <img
        v-if="profile === 'nasa'"
        class="put-center"
        :style="{ opacity: '0.6', width: '100%', filter: 'contrast(120%)' }"
        :src="require('../static/assets/AI-Images/nebula1.png')"
      />
      <video
        v-if="profile === 'nasa'"
        class="put-center"
        :style="{ 'mix-blend-mode': 'difference' }"
        width="100%"
        height="100%"
        muted
        autoplay
        loop
      >
        <source src="../static/assets/videos/nebula.mp4" />
      </video>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CText,
  CImage
} from '@chakra-ui/vue'

export default {
  name: 'GifBackground',
  components: {
    CBox,
    CText,
    CImage
  },
  props:["profile"],

}
</script>
