<template>
  <v-row
    class="no-gutters pa-md-5 pa-0">
    <v-col
        cols="12"
        md="3"
        class="d-flex justify-center align-center"
        offset="1">

      <div style="position: relative;">
        <img src="../assets/img/temp1.png" alt="" style="border: 2px solid #448aff;">
      </div>

    </v-col>

    <v-col
      cols="12"
      md="3"
      class="d-flex justify-center align-center"
      offset="1">

      <div style="position: relative;">
        <img src="../assets/img/temp2.png" alt="" style="border: 2px solid #448aff;">
      </div>

    </v-col>

    <v-col
      cols="12"
      md="3"
      class="d-flex justify-center align-center"
      offset="1">

      <div style="position: relative;">
        <img src="../assets/img/temp3.png" alt="" style="border: 2px solid #448aff;">
      </div>

    </v-col>

    <v-col
      cols="11"
      offset="1"
      class="d-flex justify-center align-center">
      <p class="portfolio-link">Больше моих работ можно найти <a href="#">здесь</a> 🍓</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutContent',
  components: {
  },
  props: {
  },
};
</script>
<style lang="scss">

  .portfolio-link {
    color: #448aff;
    margin-top: 30px;
  }

  .portfolio-link a {
    color: #ffb2ff !important;
    transition: 0.5s;
    text-decoration: none;
  }

  .portfolio-link a:hover,
  .portfolio-link a:active {
    transition: 0.5s;
    color: #c62828 !important;
    text-decoration: none;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
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
    img {
      width: 300px;
      height: 300px;
      border-radius: 0;
      margin-top: 20px;
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

  @media (max-width: 960px) {
    .slide-text {
      padding-left: 0;
      max-width: 500px;
      margin-top: 50px;
    }

    img {
      width: 440px;
      height: 440px;
    }
  }

  @media (max-width: 599px) {
    .slide-text {
      max-width: 300px;
    }

    img {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 399px) {
    .slide-text {
      max-width: 300px;
      font-size: 25px;
      padding-left: 10px;
    }

    img {
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
