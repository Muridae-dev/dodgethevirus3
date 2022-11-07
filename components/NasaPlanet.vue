<template>
  <CBox
    class="put-center"
    :style="{ 'mix-blend-mode': 'overlay' }"
    @click="sentFunc"
    cursor="pointer"
  >
    <CBox
      :h="hVar"
      w="40px"
      position="absolute"
      :top="`-${hVar}`"
      left="-20px"
      transformOrigin="bottom"
      :animation="`spinPlanet 500s linear -${timeForward}s infinite`"
    >
      <CBox
        :animation="`spinPlanet 500s linear -${timeForward}s infinite reverse`"
      >
      </CBox>
      <CText
        pointerEvents="none"
        position="absolute"
        top="20px"
        left="20px"
        transformOrigin="center"
        transform="translate(-50%, -50%)"
        :animation="`spinText 500s linear -${timeForward}s infinite reverse`"
        textAlign="center"
        zIndex="2"
        fontSize="1rem"
        fontFamily="Baunk"
        :color="color ? color : 'white'"
        >{{ text && text.toUpperCase() }}</CText
      >
      <CBox
        h="40px"
        w="40px"
        position="absolute"
        top="0"
        left="0"
        :border="`2px dashed ${color ? color : 'white'}`"
        :animation="`spinPlanet 50s linear -${timeForward}s infinite`"
        borderRadius="50%"
        v-on="{
          mouseover: hoverFunc ? () => hoverFunc(hoverData, true) : () => {},
          mouseleave: hoverFunc ? () => hoverFunc(hoverData, false) : () => {},
        }"
      ></CBox>
    </CBox>
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

export default {
  name: 'NasaPlanet',
  props: ["text", "hVar", "timeForward", "sentData", "sentFunc", "color", "hoverFunc", "hoverData"],
  components: {
    CBox,
    CText,
    CImage,
    CList,
    CListItem,
    CFlex,
    GifBackground
  },
  data() {
    return {
      isHovering: false,
    }
  },
}
</script>
