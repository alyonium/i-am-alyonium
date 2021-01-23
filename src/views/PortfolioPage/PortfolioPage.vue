<template>
  <fragment>
    <background :tags="wordsList" :sizes="sizes"/>
    <main-content name="PORTFOLIO"/>
    <portfolio-works-list/>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import MainContent from '@/components/MainContent';
import Background from '@/components/Background';
import PortfolioWorksList from '@/views/PortfolioPage/PortfolioWorksList';

export default {
  name: 'PortfolioPage',
  components: {
    MainContent,
    Background,
    PortfolioWorksList,
    Fragment,
  },
  data() {
    return {
      wordsList: [
        '<body>',
        '<nav>',
        '<div>',
        '<header>',
        '<footer>',
        '<html>',
        '</body>',
        '</nav>',
        '</div>',
        '</header>',
        '</footer>',
        '</html>',
      ],
      sizes: [
        8,
        12,
        16,
        18,
      ],
    };
  },
};
</script>
