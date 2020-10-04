<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
        cols="12"
        md="7"
        class="d-flex justify-center align-center"
        order-md="1"
        order="2">
      <p
        class="slide-text">
        💅🏼 Алёна<br>
        🎂 19 лет<br>
        🌏 Россия, <nobr>Санкт-Петербург</nobr><br>
        👩‍🏫 БГТУ "Военмех"<br>
        ❤️ frontend<br>
        👩‍💻 1 год<br>
        👄 🇷🇺 🇺🇸<br>
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
      <animated-border-wrapper frame-color="pink-purple" style="position: relative">
        <img src="../assets/img/myFace.jpeg" alt="it's me" class="photo">
        <img src="../assets/img/romb6.png" alt="romb" id="romb6">
      </animated-border-wrapper>
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
    font-size: 2.4rem;
    color: #b388ff;
    padding-left: 40px;
    margin-bottom: 0 !important;
  }

  .photo {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: 5px solid transparent;
    transition: 0.3s;
  }

  .photo:hover {
    transition: 0.3s;
    transform: rotate(-10deg);
    border: 8px solid transparent;
  }

  #romb6 {
    position: absolute;
    right: -45px;
    width: 40%;
    bottom: -45px;
    height: 40%;
    display: none;
  }

  @media (max-width: 1264px) {
    .photo {
      width: 300px;
      height: 300px;
      margin-top: 20px;
      border: 2px solid #651fff;
      box-shadow: 0 0 10px 2px #651fff;
      &:hover {
        transform: none;
        border: 1px solid #651fff;
      }
    }
    .slide-text {
      font-size: 1.8rem;
      margin-top: 40px;
      margin-bottom: 20px !important;
      padding-left: 20px;
    }

    #romb6 {
      display: block;
    }
  }

  @media (max-width: 959px) {
    .slide-text {
      padding-left: 0;
      max-width: 500px;
      margin-top: 50px;
    }

    .photo {
      width: 440px;
      height: 440px;
    }
  }

  @media (max-width: 600px) {
    .slide-text {
      max-width: 300px;
    }

    .photo {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 400px) {
    .slide-text {
      max-width: 300px;
      font-size: 25px;
      padding-left: 10px;
    }

    .photo {
      width: 290px;
      height: 290px;
    }

    #romb6 {
      width: 35%;
      height: 35%;
      right: -20px;
      bottom: -35px;
    }
  }
</style>
