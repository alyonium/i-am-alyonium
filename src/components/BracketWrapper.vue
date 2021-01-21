<template>
  <v-col
    cols="12"
  >
    <div>
      <h2 class="bracket bracket_pink bracket_shadow-purple"
          :class="{[`${size}`]: true}">{{ title }} {</h2>
      <slot></slot>
      <p class="bracket bracket_pink bracket_shadow-purple"
         :class="{[`${size}`]: true}">}</p>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'BracketWrapper',
  props: {
    title: String,
    size: String,
  },
};
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.bracket {
  &.big {
    font-size: 3.5rem;
  }

  &.small {
    font-size: 2.7rem;
  }

  &_pink {
    color: map-get($pink, darken-3);
  }

  &_shadow-purple {
    text-shadow: -2px 2px 1px #651fff;
  }
}

@media (max-width: 1264px) {
  .bracket {
    &.small {
      font-size: 2.1rem;
    }
  }
}

@media (max-width: 600px) {
  .bracket {
    &.big {
      font-size: 3rem;
    }
  }
}

@media (max-width: 400px) {
  .bracket {
    &.big {
      font-size: 2.3rem;
    }
    &_shadow-pink.small {
      text-shadow: -1px 1px 1px #a00037;
      font-size: 1.6rem;
    }
  }
}
</style>
