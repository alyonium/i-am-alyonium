<template>
  <v-container
      class="d-flex align-center"
      style="height: 100vh; border: 1px solid red;">
    <bracket-wrapper title=".About">
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

<style>

</style>
