<template>
  <v-container
    class="d-flex align-center main-container">
    <v-row
      class="d-flex align-center justify-center">
      <h1>{{ name }}</h1>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'MainContent',
  components: {},
  props: {
    name: String,
  },
};
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

h1 {
  font-size: 10rem;
  color: map-get($pink, lighten-2); //pink
  letter-spacing: 5px;
  text-shadow: 0 0 2px map-get($purple, lighten-2), //light-purple
  -4px 5px 0 map-get($deep-purple, lighten-2), //purple
  -7px 11px 0 map-get($blue, darken-1), //soft-blue
  -12px 17px 0 map-get($light-blue, darken-1), //blue
  -17px 23px 0 map-get($cyan, lighten-1); //light-blue
}

@media (max-width: 1264px) {
}

@media (max-width: 959px) {
  .main-container {
    height: 100vh !important;
  }

  h1 {
    font-size: 6rem;
    color: map-get($pink, lighten-2); //pink
    letter-spacing: 5px;
    text-shadow: 0 0 1px map-get($purple, lighten-2), //light-purple
    -2px 3px 0 map-get($deep-purple, lighten-2), //purple
    -3px 8px 0 map-get($blue, darken-1), //soft-blue
    -8px 13px 0 map-get($light-blue, darken-1), //blue
    -13px 20px 0 map-get($cyan, lighten-2); //light-blue
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 4rem;
    color: map-get($pink, lighten-2); //pink
    letter-spacing: 5px;
    text-shadow: 0 0 2px map-get($purple, lighten-2),
    -2px 4px 0 map-get($deep-purple, lighten-2),
    -3px 8px 0 map-get($blue, darken-1),
    -5px 12px 0 map-get($light-blue, darken-1),
    -6px 16px 0 map-get($cyan, lighten-2);
  }
}

@media (max-width: 400px) {
  h1 {
    padding-left: 5px;
    font-size: 3.1rem;
    color: map-get($pink, lighten-2); //pink
    letter-spacing: 5px;
    text-shadow: 0 0 2px map-get($purple, lighten-2),
    -2px 4px 0 map-get($deep-purple, lighten-2),
    -3px 8px 0 map-get($blue, darken-1),
    -5px 12px 0 map-get($light-blue, darken-1),
    -6px 16px 0 map-get($cyan, lighten-2);
  }
}

</style>
