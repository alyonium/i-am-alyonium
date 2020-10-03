<template>
  <div
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
  transition: 2s box-shadow;
  z-index: 500;
  &:hover {
    &::before,
    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 80px 0;
      z-index: -1;
      animation: 0.8s doFrame infinite;
    }
  }
  &_pink{
    &:hover {
      &::before,
      &::after {
        background: #c94f7c;
      }
    }
  }
  &_purple{
    &:hover {
      &::before,
      &::after {
        background: #b388ff;
      }
    }
  }
  &_blue{
    &:hover {
      &::before,
      &::after {
        background: #82b1ff;
      }
    }
  }
}

@keyframes doFrame {
  0% {
    top: -4px;
    left: 0;
  }
  12% {
    top: -1px;
    left: 1px;
  }
  25% {
    top: 0;
    left: 4px;
  }
  37% {
    top: 1px;
    left: 1px;
  }
  50% {
    top: 4px;
    left: 0;
  }
  62% {
    top: 1px;
    left: -1px;
  }
  75% {
    top: 0;
    left: -4px;
  }
  87% {
    top: -1px;
    left: -1px;
  }
  100% {
    top: -4px;
    left: 0;
  }
}

@media (min-width: 960px) and (max-width: 1263px) {
  .animated-border {
    &:hover {
      &::before,
      &::after {
        top: 30px;
        left: 30px;
        height: 200px;
        width: 200px;
      }
    }
  }
}
</style>
