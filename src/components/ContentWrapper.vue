<template>
  <v-container
    class="d-flex align-center">
    <bracket-wrapper :title="title" :size="size">
      <slot></slot>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';

export default {
  name: 'ContentWrapper',
  components: {
    BracketWrapper,
  },
  props: {
    title: String,
    size: String,
  },
};
</script>

<style scoped>

</style>
