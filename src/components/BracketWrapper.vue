<template>
  <v-col
    cols="12"
  >
    <div>
      <h2 class="bracket bracket_pink bracket_shadow-purple"
          :class="{[size]: true, 'portfolio': !!isPortfolio}">{{ title }} {</h2>
      <slot></slot>
      <p class="bracket bracket_pink bracket_shadow-purple"
         :class="{[size]: true, 'portfolio': !!isPortfolio}">}</p>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'BracketWrapper',
  props: {
    title: String,
    size: String,
    isPortfolio: Boolean,
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
    text-shadow: -2px 2px 1px map-get($deep-purple, accent-3);
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

  .portfolio {
    &.big {
      font-size: 2.44rem;
    }
    &.small {
      font-size: 1.8rem;
    }
  }
}

@media (max-width: 400px) {
  .bracket {
    &.big {
      font-size: 2.3rem;
    }
    &.small {
      font-size: 1.6rem;
    }
  }
  .portfolio {
    &.big {
      font-size: 1.88rem;
    }
    &.small {
      font-size: 1.43rem;
    }
  }
  .bracket_shadow-purple.small {
    text-shadow: -1px 1px 1px map-get($deep-purple, accent-3);
  }
}
</style>
