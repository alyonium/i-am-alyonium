<template>
  <v-col
    cols="12"
  >
    <h2 class="bracket">{{ title }} {</h2>
    <slot></slot>
    <p class="bracket">}</p>
  </v-col>
</template>

<script>
export default {
  name: 'BracketWrapper',
  props: {
    title: String,
  },
};
</script>
<style>

</style>
