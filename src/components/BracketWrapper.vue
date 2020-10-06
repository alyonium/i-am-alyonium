<template>
  <v-col
    cols="12"
  >
    <h2 class="bracket"
        :class="{[`bracket_${color}`]: true, [`bracket_${shadow}`]: true}">{{ title }} {</h2>
    <slot></slot>
    <p class="bracket"
       :class="{[`bracket_${color}`]: true, [`bracket_${shadow}`]: true}">}</p>
  </v-col>
</template>

<script>
export default {
  name: 'BracketWrapper',
  props: {
    title: String,
    color: String,
    shadow: String,
  },
};
</script>
<style lang="scss">
.bracket {
  font-size: 3.5rem;

  &_blue {
    color: #448aff;
  }

  &_pink {
    color: #a00037;
  }

  &_light-pink {
    color: #c2185b;
  }

  &_purple {
    color: #7e57c2;
  }

  &_light-purple {
    color: #883997;
  }

  &_shadow-light-pink {
    text-shadow: -2px 2px 1px #ec407a;
  }

  &_shadow-purple {
    text-shadow: -2px 2px 1px #651fff;
  }

  &_shadow-light-orange {
    text-shadow: -2px 2px 1px #ff80ab;
  }

  &_shadow-light-blue {
    text-shadow: -2px 2px 1px #ce93d8;
  }
}
@media (max-width: 600px) {
  .bracket {
    font-size: 3rem;
  }
}

@media (max-width: 400px) {
  .bracket {
    font-size: 2.3rem;
  }
}
</style>
