<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".Portfolio" color="blue" shadow="shadow-orange">
      <portfolio-content></portfolio-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import PortfolioContent from '@/components/PortfolioContent';

export default {
  name: 'About',
  components: {
    BracketWrapper,
    PortfolioContent,
  },
  props: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
