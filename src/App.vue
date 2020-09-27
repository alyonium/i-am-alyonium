<template>
  <v-app>
    <v-main>
      <about/>
    </v-main>
  </v-app>
</template>

<script>
import About from './components/About';

export default {
  name: 'App',

  components: {
    About,
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

.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}

* {
  font-family: 'Hack', sans-serif;
  font-weight: 400;
  font-size: 18px;
}

</style>
