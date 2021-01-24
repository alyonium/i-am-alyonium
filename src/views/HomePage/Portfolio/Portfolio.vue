<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".Portfolio" size="big">
      <portfolio-content></portfolio-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import PortfolioContent from '@/views/HomePage/Portfolio/PortfolioContent';

export default {
  name: 'About',
  components: {
    BracketWrapper,
    PortfolioContent,
  },
};
</script>
