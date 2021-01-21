<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".About" size="big">
      <about-content></about-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import AboutContent from '@/views/AlyoniumPage/About/AboutContent';

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
