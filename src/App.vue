<template>
  <v-app>
    <v-main>
      <language-switcher/>
      <main-content name="ALYONIUM"/>
      <about/>
      <portfolio/>
      <skills/>
      <contacts/>
    </v-main>
  </v-app>
</template>

<script>
import Portfolio from '@/views/AlyoniumPage/Portfolio/Portfolio';
import Skills from '@/views/AlyoniumPage/Skills/Skills';
import MainContent from '@/components/MainContent';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Contacts from '@/views/AlyoniumPage/Contacts/Contacts';
import About from './views/AlyoniumPage/About/About';

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
