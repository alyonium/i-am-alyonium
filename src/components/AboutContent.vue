<template>
  <v-row class="no-gutters pa-5">
    <v-col
        cols="12"
        md="7"
        class="d-flex justify-center align-center"
        order-md="1"
        order-sm="2"
        order-xs="2">
      <p
        class="slide-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </v-col>

    <v-col
        cols="12"
        md="4"
        offset-md="1"
        offset="0"
        class="d-flex justify-center align-center"
        order-md="2"
        order-sm="1"
        order-xs="1">
      <animatedBorderWrapper frameColor="purple">
        <img src="../assets/img/myFace.jpeg" alt="it's me">
      </animatedBorderWrapper>
    </v-col>
  </v-row>
</template>

<script>
import AnimatedBorderWrapper from '@/components/AnimatedBorderWrapper';

export default {
  name: 'AboutContent',
  components: {
    AnimatedBorderWrapper,
  },
  props: {
  },
};
</script>
<style lang="scss">
  .slide-text {
    font-size: 1.2rem;
    color: #b388ff;
    padding-left: 60px;
  }

  img {
    width: 400px;
    height: 400px;
    border-radius: 80px 0;
    object-fit: cover;
  }

  @media (min-width: 960px) and (max-width: 1263px) {
    .slide-text {
      padding-left: 40px;
    }

    img {
      width: 300px;
      height: 300px;
      border-radius: 0;
    }
  }

  @media (min-width: 600px) and (max-width: 959px) {
    .slide-text {
      padding-left: 0;
      max-width: 500px;
      margin-top: 40px;
      margin-bottom: 0 !important;
    }
  }
</style>
