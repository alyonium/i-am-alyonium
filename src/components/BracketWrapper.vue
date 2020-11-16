<template>
  <v-col
    cols="12"
  >
    <div>
      <h2 class="bracket"
          :class="{[`bracket_${color}`]: true, [`bracket_${shadow}`]: true, [`${size}`]: true}">{{ title }} {</h2>
      <slot></slot>
      <p class="bracket"
         :class="{[`bracket_${color}`]: true, [`bracket_${shadow}`]: true, [`${size}`]: true}">}</p>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'BracketWrapper',
  props: {
    title: String,
    color: String,
    shadow: String,
    size: String,
  },
};
</script>
<style lang="scss">
.bracket {
  &.big {
    font-size: 3.5rem;
  }

  &.small {
    font-size: 2.7rem;
  }

  &_blue {
    color: #448aff;
  }

  &_pink {
    color: #a00037;
  }

  &_purple {
    color: #651fff;
  }

  &_light-pink {
    color: #ec407a;
  }

  &_shadow-light-pink {
    text-shadow: -2px 2px 1px #ec407a;
  }

  &_shadow-purple {
    text-shadow: -2px 2px 1px #651fff;
  }

  &_shadow-blue {
    text-shadow: -2px 2px 1px #448aff;
  }

  &_shadow-pink {
    text-shadow: -2px 2px 1px #a00037;
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

    &.small {
      font-size: 1.6rem;
    }
  }
}
</style>
