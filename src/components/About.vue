<template>
  <v-container
      class="d-flex align-center">
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
.bracket {
  font-size: 3.5rem;
  color: #a00037;
  text-shadow: -2px 2px 1px #651fff;
}
</style>
