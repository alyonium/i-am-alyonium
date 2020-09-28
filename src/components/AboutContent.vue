<template>
  <v-row
    class="no-gutters pa-md-5 pa-0">
    <v-col
        cols="12"
        md="7"
        class="d-flex justify-center align-center"
        order-md="1"
        order="2">
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
        order="1">
      <animatedBorderWrapper frameColor="purple" style="position: relative;">
        <img src="../assets/img/myFace.jpeg" alt="it's me">
        <img src="../assets/img/romb5.png" alt="romb" id="romb5">
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

  #romb3 {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 1264px) {
    img {
      width: 300px;
      height: 300px;
      border-radius: 0;
      margin-top: 20px;
    }

    .slide-text {
      margin-top: 40px;
      margin-bottom: 20px !important;
      padding-left: 40px;
    }
  }

  @media (max-width: 960px) {
    .slide-text {
      padding-left: 0;
      max-width: 500px;
    }
  }

  @media (max-width: 600px) {
    .slide-text {
      max-width: 400px;
    }
  }

  @media (max-width: 400px) {
    .slide-text {
      max-width: 300px;
    }
  }
</style>
