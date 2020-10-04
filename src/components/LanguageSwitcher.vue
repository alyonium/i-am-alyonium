<i18n>
{
"en": {
"hello": "hello world!"
},
"ru": {
"hello": "Привет мир!"
}
}
</i18n>

<template>
    <animated-border-wrapper
      frame-color="light-purple"
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
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>

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
      border: 1px solid #4d82cb;
    }
  }
  &:checked + label {
    cursor: default;
    transition: background 0.3s;
    background: #4d82cb;
    border: 1px solid #4d82cb;
  }
}
</style>
