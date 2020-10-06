<template>
  <v-container
    class="d-flex align-center">
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

</style>
