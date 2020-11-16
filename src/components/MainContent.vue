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
  props: {},
  data() {
    return {
      name: 'ALY0NIUM',
    };
  },
  methods: {
    typeText() {
    },
  },
  created() {
    this.typeText();
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 10rem;
  color: #c94f7c; //pink
  letter-spacing: 5px;
  text-shadow: 0 0 2px #b64fc8, //light-purple
  -4px 5px 0 #805acb, //purple
  -7px 11px 0 #5870cb, //soft-blue
  -12px 17px 0 #4d82cb, //blue
  -17px 23px 0 #49a7cc; //light-blue
}

@media (max-width: 1264px) {
}

@media (max-width: 959px) {
  .main-container {
    height: 100vh !important;
  }

  h1 {
    font-size: 6rem;
    color: #c94f7c; //pink
    letter-spacing: 5px;
    text-shadow: 0 0 1px #b64fc8, //light-purple
    -2px 3px 0 #805acb, //purple
    -3px 8px 0 #5870cb, //soft-blue
    -8px 13px 0 #4d82cb, //blue
    -13px 20px 0 #49a7cc; //light-blue
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 4rem;
    color: #c94f7c; //pink
    letter-spacing: 5px;
    text-shadow: 0 0 2px #b64fc8,
    -2px 4px 0 #805acb,
    -3px 8px 0 #5870cb,
    -5px 12px 0 #4d82cb,
    -6px 16px 0 #49a7cc;
  }
}

@media (max-width: 400px) {
  h1 {
    padding-left: 5px;
    font-size: 3.5rem;
    color: #c94f7c; //pink
    letter-spacing: 5px;
    text-shadow: 0 0 2px #b64fc8,
    -2px 4px 0 #805acb,
    -3px 8px 0 #5870cb,
    -5px 12px 0 #4d82cb,
    -6px 16px 0 #49a7cc;
  }
}

</style>
