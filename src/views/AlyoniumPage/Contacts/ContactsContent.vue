<i18n>
{
  "ru": {
    "text-me": "Напиши мне"
  },
  "en": {
    "text-me": "Get in touch"
  }
}
</i18n>

<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">

    <v-col
      sm="8"
      offset-sm="2"
      cols="12"
      offset="0"
      class="d-flex justify-center flex-column align-center mt-md-0 mt-sm-0 mt-xs-8 mt-8 "
    >
      <h3>{{ $t('text-me') }}! 💌</h3>
      <write-me></write-me>
    </v-col>
  </v-row>
</template>

<script>
import WriteMe from '@/components/WriteMe';

export default {
  name: 'ContactsContent',
  components: {
    WriteMe,
  },
};
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

h3 {
  padding-left: 0 !important;
  font-size: 1.8rem;
  text-shadow: -1px 1px 1px map-get($pink, darken-3);
  color: map-get($deep-purple, accent-1);
}
</style>
