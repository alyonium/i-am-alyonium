<template>
  <v-row>
    <p>{{ title }} {</p>
    <slot></slot>
    <p>}</p>
  </v-row>
</template>

<script>
export default {
  name: 'BracketWrapper',
  props: {
    title: String
  }
}
</script>
<style>
</style>
