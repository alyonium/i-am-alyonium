<template>
  <div
    class="d-flex align-center justify-center"
    :class="{'animated-border': deviceScreenHeight(), [`animated-border_${frameColor}`]: isAnimate}">
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

.animated-border {
  position: relative;
  border: 5px solid transparent;
  &_pink-purple {
    border-image: linear-gradient(to left top, #a00037 10%,  transparent 30%, transparent 70%, #651fff 90%) 1;
  }
  &_orange-blue {
    border-image: linear-gradient(to left top, #ff5722 10%,  transparent 30%, transparent 70%, #448aff 90%) 1;
  }
}

</style>
