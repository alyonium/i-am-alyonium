<i18n>
{
  "ru": {
    "text-me": "Напиши мне"
  },
  "en": {
    "text-me": "Text me"
  }
}
</i18n>

<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
      cols="12"
      md="3"
      sm="5"
      offset-md="1"
      offset="0"
      class="d-flex
      justify-center
      flex-sm-column
      flex-sm-nowrap
       align-sm-start
        pl-sm-5
        align-center
         pl-0
         flex-row
         flex-wrap
          social-media"
    >
      <span id="github"><a href="https://github.com/alyonium">github</a></span>
      <span id="telegram"><a href="https://teleg.run/alyonium">telegram</a></span>
      <span id="gmail"><a href="mailto:alyonium2.0@gmail.com">gmail</a></span>
      <span id="linkedin"><a href="https://www.linkedin.com/in/alyona-ivanova-7a048a1b8/">linkedin</a></span>
      <span id="skype"><a href="skype:live:.cid.b960b98b18686c1">skype</a></span>
      <span id="vk"><a href="https://vk.com/alyonium">vk</a></span>
    </v-col>

    <v-col
      md="6"
      offset-md="2"
      sm="7"
      offset-sm="0"
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
  props: {},
};
</script>
<style lang="scss" scoped>
h3 {
  padding-left: 0 !important;
  font-size: 1.8rem;
  text-shadow: -1px 1px 1px #448aff;
}

* {
  color: #ec407a;
}

a {
  font-size: 1.4rem;
  text-decoration: none;
  color: #ec407a !important;
  text-shadow: -1px 1px 1px #448aff;
}

span {
  position: relative;
  padding-left: 40px;
  margin: 10px 0;
  width: 100px;
}

#github::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: 2px;
  background: url(../assets/img/icons/github.png) center 0 no-repeat;
}

#telegram:before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: 3px;
  background: url(../assets/img/icons/telegram.png) center 0 no-repeat;
}

#gmail:before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: 7px;
  background: url(../assets/img/icons/google-plus.png) center 0 no-repeat;
}

#linkedin:before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -2px;
  background: url(../assets/img/icons/linkedin.png) center 0 no-repeat;
}

#vk:before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: 8px;
  background: url(../assets/img/icons/vk.png) center 0 no-repeat;
}

#skype:before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: 2px;
  background: url(../assets/img/icons/skype.png) center 0 no-repeat;
}

#telegram,
#gmail,
#linkedin,
#vk,
#skype,
#github {
  -webkit-transition: 0.3s ease; /* Safari and Chrome */
  -moz-transition: 0.3s ease; /* Firefox 4 */
  -o-transition: 0.3s ease;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
}

@media (max-width: 1264px) {
  #telegram,
  #gmail,
  #linkedin,
  #vk,
  #skype,
  #github {
    &:hover {
      transform: unset;
      transition: unset;
    }
  }
}

@media (max-width: 959px) {
}

@media (max-width: 599px) {
  .social-media {
    & span {
      margin: 10px 90px 20px 0;
    }
  }
}

@media (max-width: 467px) {
  .social-media {
    & span {
      margin: 10px 50px 10px 0;
    }
  }
}

@media (max-width: 399px) {
  .social-media {
    & span {
      margin: 10px 30px 10px 0;
    }
  }
  a {
    font-size: 20px;
  }
}
</style>
