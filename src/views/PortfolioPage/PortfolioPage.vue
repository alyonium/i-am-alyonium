<template>
  <fragment>
    <main-content name="PORTFOLIO"/>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import MainContent from '@/components/MainContent';

export default {
  name: 'PortfolioPage',
  components: {
    MainContent,
    Fragment,
  },
};
</script>
