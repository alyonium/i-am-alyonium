<template>
  <div
    class="d-flex align-center justify-center"
    :class="{'animated-border': deviceScreenHeight(), [`animated-border_pink-purple`]: isAnimate}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBorderWrapper',
  props: {
    frameColor: String,
  },
  data() {
    return {
      isAnimate: !(window.innerWidth <= 1264),
    };
  },
  methods: {
    deviceScreenHeight() {
      this.isAnimate = !(window.innerWidth <= 1264);
      return !(window.innerWidth <= 1264);
    },
  },
  created() {
    window.addEventListener('resize', this.deviceScreenHeight);
  },
  destroyed() {
    window.removeEventListener('resize', this.deviceScreenHeight);
  },
};

</script>
<style scoped lang="scss">
@import '~vuetify/src/styles/styles.sass';

.animated-border {
  position: relative;
  border: 5px solid transparent;
  &_pink-purple {
    border-image: linear-gradient(to left top, map-get($pink, darken-3) 10%,
      transparent 30%, transparent 70%, map-get($deep-purple, darken-3) 90%) 1;
  }
}

</style>
