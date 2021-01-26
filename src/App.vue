<template>
  <v-app>
    <v-main>
      <language-switcher/>
      <home-page-button v-if="isPortfolio"/>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HomePageButton from '@/components/HomePageButton';

export default {
  name: 'App',
  components: {
    LanguageSwitcher,
    HomePageButton,
  },
  computed: {
    isPortfolio() { return this.$route.path === '/portfolio'; },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Hack';
  src: url('~@/assets/fonts/Hack-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

* {
  font-family: 'Hack', sans-serif;
  font-weight: 400;
}

.row,
.col {
  z-index: 100;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}

.container {
  height: 100vh;
}

#app {
  background: #000;
}

.v-textarea textarea {
  resize: none !important;
}

.v-snack__wrapper {
  width: 285px !important;
  min-width: unset !important;
}

@media (max-width: 960px) {
  .container {
    height: auto;
  }
}
</style>
