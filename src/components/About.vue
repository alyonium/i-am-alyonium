<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".About" color="pink" shadow="shadow-purple" size="big">
      <about-content></about-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import AboutContent from '@/components/AboutContent';

export default {
  name: 'About',
  components: {
    BracketWrapper,
    AboutContent,
  },
  props: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
