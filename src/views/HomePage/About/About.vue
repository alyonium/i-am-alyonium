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
import AboutContent from '@/views/HomePage/About/AboutContent';

export default {
  name: 'About',
  components: {
    BracketWrapper,
    AboutContent,
  },
};
</script>
