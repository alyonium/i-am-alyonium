<template>
  <v-app>
    <v-main>
      <language-switcher/>
      <main-content/>
      <about/>
      <portfolio/>
      <skills/>
      <contacts/>
    </v-main>
  </v-app>
</template>

<script>
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import MainContent from '@/components/MainContent';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Contacts from '@/components/Contacts';
import About from './components/About';

export default {
  name: 'App',

  components: {
    Contacts,
    LanguageSwitcher,
    MainContent,
    About,
    Portfolio,
    Skills,
  },

  data: () => ({
    //
  }),
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

@media (max-width: 960px) {
  .container {
    height: auto;
  }
}
</style>
