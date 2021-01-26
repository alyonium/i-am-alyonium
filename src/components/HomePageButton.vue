<i18n>
{
  "ru": {
    "button": "Главная"
  },
  "en": {
    "button": "Home Page"
  }
}
</i18n>
<template>
  <router-link to="/" class="home-button">
    <v-btn
      color="blue darken-1"
      elevation="2"
      small
    >
      {{ $t('button')}}
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: 'HomePageButton',
};
</script>

<style scoped lang="scss">
.home-button {
  position: absolute;
  right: 10px;
  top: calc(90vh - 50px);
  z-index: 200;
  outline: none;
  text-decoration: none;
}

@media (max-width: 1264px) {
  .home-button {
    right: 0;
  }
}
</style>
