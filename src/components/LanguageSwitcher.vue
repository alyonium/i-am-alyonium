<template>
    <animated-border-wrapper
      class="switcher d-flex align-start justify-start">
    <input type="radio" id="en" value="en" v-model="locale" class="toggle toggle-left">
    <label for="en" class="btn">🇺🇸</label>
        <input type="radio" id="ru" value="ru" v-model="locale" class="toggle toggle-right">
        <label for="ru" class="btn">🇷🇺</label>
    </animated-border-wrapper>
</template>

<script>
import AnimatedBorderWrapper from '@/components/AnimatedBorderWrapper';

export default {
  name: 'LanguageSwitcher',
  components: {
    AnimatedBorderWrapper,
  },
  props: {
  },
  data() {
    this.$i18n.locale = 'ru';
    return {
      locale: 'ru',
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.switcher {
  position: absolute;
  font-size: 25px;
  top: 90vh;
  right: 0;
}

input[type="radio"].toggle {
  display: none;
  & + label {
    text-align: center;
    cursor: pointer;
    min-width: 50px;
    border: 1px solid #000;
    &:hover {
      transition: 0.3s;
      border: 1px solid map-get($blue, darken-1);
    }
  }
  &:checked + label {
    cursor: default;
    transition: background 0.3s;
    background: map-get($blue, darken-1);
    border: 1px solid map-get($blue, darken-1);
  }
}
</style>
