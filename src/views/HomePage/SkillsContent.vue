<i18n>
{
  "ru": {
    "yandex-maps": "Яндекс.карты",
    "bem": "БЭМ"
  },
  "en": {
    "yandex-maps": "Yandex.maps",
    "bem": "BEM"
  }
}
</i18n>
<template>
  <v-row
    class="no-gutters pt-md-8 pt-sm-4 pt-2 pb-5 pa-0 d-sm-flex justify-sm-center col-content">
    <v-col
      cols="12"
      md="5"
      offset-md="1"
      offset="0"
    >
      <bracket-wrapper title="#front + #back" size="small">
        <p>HTML5, {{ $t('bem') }}<br>
          CSS3, SCSS<br>
          JavaScript (ES6)<br>
          Bootstrap, Jquery<br>
          Vue, Node<br>
          Express, Axios<br>
        </p>
      </bracket-wrapper>
    </v-col>

    <v-col
      cols="12"
      md="1"
      offset-md="0"
      offset="0"
      class="emoji d-flex align-md-center justify-center"
    >
      💻
      🍫
      💼
    </v-col>

    <v-col
      cols="12"
      md="5"
      offset-md="0"
      offset="0"
    >
      <bracket-wrapper title="&.also" size="small">
        <p>Figma, Photoshop<br>
          Git, Subversion<br>
          English B1<br>
          Github, Bitbucket<br>
          Npm, Yarn<br>
          {{ $t('yandex-maps') }}<br>
        </p>
      </bracket-wrapper>
    </v-col>

  </v-row>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';

export default {
  name: 'SkillsContent',
  components: {
    BracketWrapper,
  },
};
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

* {
  color: map-get($deep-purple, accent-1);
}

.emoji {
  transition: 0.2s;
  font-size: 3.5rem;
  margin-bottom: 20px;
  cursor: default;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
}

p {
  margin-bottom: 0 !important;
  padding-left: 40px;
  font-size: 1.8rem;
  text-shadow: -1px 1px 1px map-get($pink, darken-3);
}

.col-content > div > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1264px) {
  .emoji:hover {
    transform: unset;
  }
}

@media (max-width: 399px) {
  p {
    font-size: 1.4rem;
    padding-left: 20px;
  }
  .emoji {
    font-size: 2.7rem;
  }
}
</style>
