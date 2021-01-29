<template>
  <div
    class="d-flex align-center justify-center animated-border">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBorderWrapper',
};

</script>
<style scoped lang="scss">
@import '~vuetify/src/styles/styles.sass';

.animated-border {
  position: relative;
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left top, map-get($deep-purple, lighten-2),
      map-get($pink, darken-3), transparent 50%,
      map-get($pink, darken-3), map-get($deep-purple, lighten-2));
}

@media (max-width: 1264px) {
  .animated-border {
    border: unset;
    position: static;
    display: none;
    border-image: none;
  }
}
</style>
