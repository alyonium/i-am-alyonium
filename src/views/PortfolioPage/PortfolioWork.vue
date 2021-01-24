<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
      cols="12"
      md="5"
      offset-md="1"
      offset="0"
      class="d-flex justify-center align-center"
    >
      <div class="images-container">
        <img
          src="../../assets/img/laptopEmpty.png"
          alt="laptop"
          class="laptopEmpty"
        >
        <img
          src="../../assets/img/phoneEmpty.png"
          alt="phone"
          class="phoneEmpty"
        >
        <img
          :src="work.images.laptop"
          alt="laptop"
          class="laptop"
        >
        <img
          :src="work.images.phone"
          alt="laptop"
          class="phone"
        >
      </div>
    </v-col>

    <v-col
      cols="12"
      md="6"
      class="d-flex flex-column justify-center">
      <bracket-wrapper title=".technical-sheet" size="small">
        <p
          v-for="technology in technologies"
        >
          {{ technology }},
        </p>
      </bracket-wrapper>
        <a :href="work.source" target="_blank">source code</a>
        <a :href="work.online" target="_blank">see project</a>
        <p>{{ work.year }}</p>
    </v-col>
  </v-row>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';

export default {
  name: 'PortfolioWork',
  components: {
    BracketWrapper,
  },
  props: {
    work: Object,
  },
  data() {
    return {
      technologies: this.work.description,
    };
  },
};
</script>
<style scoped lang="scss">
@import '~vuetify/src/styles/styles.sass';
img {
  object-fit: contain;
}

.images-container {
  position: relative;
}

.laptopEmpty {
  width: 400px;
  height: 400px;
  position: absolute;
  top: -180px;
  left: -300px;
}

.laptop {
  width: 300px;
  height: 300px;
  position: absolute;
  top: -210px;
  left: -253px;
  z-index: 1;
}

.phoneEmpty {
  width: 250px;
  height: 250px;
  position: absolute;
  bottom: -140px;
  right: -300px;
  transform: rotate(15deg);
}

.phone {
  width: 180px;
  height: 180px;
  position: absolute;
  bottom: -110px;
  right: -264px;
  z-index: 1;
  transform: rotate(-1deg);
}

a {
  color: map-get($pink, lighten-3) !important;
  transition: 0.2s;
  text-decoration: none;
  font-size: 1.8rem;
  padding-left: 40px;
}

a:hover,
a:active {
  transition: 0.5s;
  color: map-get($pink, darken-3) !important;
  text-decoration: none;
}

p {
  color: map-get($deep-purple, accent-1);
  margin-bottom: 0 !important;
  padding-left: 40px;
  font-size: 1.8rem;
  text-shadow: -1px 1px 1px map-get($pink, darken-3);
}

@media (max-width: 1264px) {
  .laptopEmpty {
    width: 300px;
    height: 300px;
    position: absolute;
    top: -180px;
    left: -250px;
  }

  .laptop {
    width: 225px;
    height: 225px;
    position: absolute;
    top: -200px;
    left: -215px;
    z-index: 1;
  }

  .phoneEmpty {
    width: 250px;
    height: 250px;
    position: absolute;
    bottom: -140px;
    right: -300px;
    transform: rotate(15deg);
  }

  .phone {
    width: 180px;
    height: 180px;
    position: absolute;
    bottom: -110px;
    right: -264px;
    z-index: 1;
    transform: rotate(-1deg);
  }
}
</style>
