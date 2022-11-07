<template>
  <CFlex
    h="100%"
    w="100%"
    zIndex="0"
    position="absolute"
    bg="black"
    justify=""
    flexWrap="wrap"
  >
    <CList v-for="item in inventory" w="25%">
      <CListItem v-for="details in Object.entries(item)">
        <CText as="u">{{ details[0] }}:</CText>
        <CText>{{ details[1] }}</CText>
      </CListItem>
    </CList>
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
  name: 'Inventory',
  components: {
    CBox,
    CText,
    CImage,
    CList,
    CListItem,
    CFlex
  },
  props: ["inventory"],
}
</script>
