<template>
  <fragment>
    <v-container
      class="d-flex align-center"
      v-for="work in works"
      :key="work.id">
      <bracket-wrapper :title="work.title" size="big" :isPortfolio="true">
        <portfolio-work :work="work"/>
      </bracket-wrapper>
    </v-container>
  </fragment>
</template>

<script>
import { getWorksList } from '@/resources';
import { Fragment } from 'vue-fragment';
import BracketWrapper from '@/components/BracketWrapper';
import PortfolioWork from '@/views/PortfolioPage/PortfolioWork';

export default {
  name: 'PortfolioWorksList',
  components: {
    BracketWrapper,
    PortfolioWork,
    Fragment,
  },
  data() {
    return {
      works: [],
    };
  },
  mounted() {
    this.getWorkList();
  },
  methods: {
    async getWorkList() {
      this.works = await getWorksList();
    },
  },
};
</script>
