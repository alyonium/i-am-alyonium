<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
      cols="12"
      md="3"
      offset-md="1"
      offset="0"
      class="d-flex justify-center flex-column"
    >
      <p id="github"><a href="https://github.com/alyonium">github</a></p>
      <p id="telegram"><a href="https://teleg.run/alyonium">telegram</a></p>
      <p id="instagram"><a href="https://www.instagram.com/alyonium/">instagram</a></p>
      <p id="fiddle"><a href="https://jsfiddle.net/user/alyonium">fiddle</a></p>
      <p id="gmail"><a href="mailto:alyonium2.0@gmail.com">gmail</a></p>
      <p id="linkedin"><a href="https://www.linkedin.com/in/alyona-ivanova-7a048a1b8/">linkedin</a></p>
      <p id="vk"><a href="https://vk.com/alyonium">vk</a></p>
      <p id="twitter"><a href="https://twitter.com/muinoyla">twitter</a></p>
      <p id="stackoverflow"><a href="https://ru.stackoverflow.com/users/371029/alyona-ivanova">stackoverflow</a></p>
      <p id="skype"><a href="skype:live:.cid.b960b98b18686c1">skype</a></p>
    </v-col>

    <v-col
      cols="6"
      offset="2"
      class="d-flex justify-center flex-column"
    >
      <h3>Напиши мне! 💌</h3>
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
  font-size: 1.6rem;
}
* {
  color: #ce93d8;
}

a {
  text-decoration: none;
  color: #ce93d8 !important;
}

p {
  position: relative;
  padding-left: 40px;
}

#github::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/github.png) center 0 no-repeat;
}

#github:hover:before {
  animation: spinAround 1s linear infinite;
}

#telegram:before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/telegram-logo.png) center 0 no-repeat;
  }

#telegram:hover:before {
    animation: spinAround 1s linear infinite;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg);
  }
}

#instagram::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/instagram-logo.png) center 0 no-repeat;
}

#instagram:hover:before {
  animation: spinAround 1s linear infinite;
}

#fiddle::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/jsfiddle-logo.png) center 0 no-repeat;
}

#fiddle:hover:before {
  animation: spinAround 1s linear infinite;
}

#gmail::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/google-plus-logo.png) center 0 no-repeat;
}

#gmail:hover:before {
  animation: spinAround 1s linear infinite;
}

#linkedin::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -8px;
  background: url(../assets/img/icons/linkedin.png) center 0 no-repeat;
}

#linkedin:hover:before {
  animation: spinAround 1s linear infinite;
}

#vk::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: 3px;
  background: url(../assets/img/icons/vk.png) center 0 no-repeat;
}

#vk:hover:before {
  animation: spinAround 1s linear infinite;
}

#twitter::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/twitter-logo.png) center 0 no-repeat;
}

#twitter:hover:before {
  animation: spinAround 1s linear infinite;
}

#stackoverflow::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/stack-overflow.png) center 0 no-repeat;
}

#stackoverflow:hover:before {
  animation: spinAround 1s linear infinite;
}

#skype::before {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  left: 0;
  top: -3px;
  background: url(../assets/img/icons/skype.png) center 0 no-repeat;
}

#skype:hover:before {
  animation: spinAround 1s linear infinite;
}

@media (max-width: 1264px) {
}

@media (max-width: 959px) {
}

@media (max-width: 599px) {
}

@media (max-width: 399px) {
}
</style>
