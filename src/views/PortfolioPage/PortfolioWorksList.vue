<template>
  <fragment>
    <v-container
      class="d-flex align-center"
      v-for="work in works"
      :key="work.id">
      <bracket-wrapper :title="work.title" size="big" :isPortfolio="true">
        <loader v-if="isLoading"/>
        <portfolio-work v-else :work="work"/>
      </bracket-wrapper>
    </v-container>
  </fragment>
</template>

<script>
import { getWorksList } from '@/resources';
import { Fragment } from 'vue-fragment';
import BracketWrapper from '@/components/BracketWrapper';
import PortfolioWork from '@/views/PortfolioPage/PortfolioWork';
import Loader from '@/components/Loader';

export default {
  name: 'PortfolioWorksList',
  components: {
    BracketWrapper,
    PortfolioWork,
    Loader,
    Fragment,
  },
  data() {
    return {
      works: [],
      isLoading: true,
    };
  },
  created() {
    this.getWorkList();
  },
  methods: {
    async getWorkList() {
      this.works = await getWorksList();
      this.isLoading = false;
    },
  },
};
</script>
