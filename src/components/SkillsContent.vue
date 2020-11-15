<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
      cols="5"
      md="5"
      offset-md="1"
      offset="0"
    >
      <bracket-wrapper title="#front + #back" color="pink" shadow="shadow-purple" size="small">
        <p>HTML5, БЭМ<br>
          CSS3, SCSS<br>
          JavaScript (ES6)<br>
          Bootstrap, Jquery<br>
          Vue, Node<br>
          Express, Axios<br>
        </p>
      </bracket-wrapper>
    </v-col>

    <v-col
      cols="1"
      offset="0"
      class="emoji d-flex align-center justify-center"
    >
      💻
      🍫
      💼
    </v-col>

    <v-col
      cols="5"
      md="5"
      offset-md="0"
      offset="0"
    >
      <bracket-wrapper title="&.also" color="pink" shadow="shadow-purple" size="small">
        <p>Figma, Photoshop<br>
          Git, Subversion<br>
          English B1<br>
          Github, Bitbucket<br>
          Npm, Yarn<br>
          Yandex.maps<br>
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
  props: {},
};
</script>
<style lang="scss" scoped>
* {
  color: #448aff;
}

.emoji {
  font-size: 3.5rem;
}

p {
  margin-bottom: 0;
  padding-left: 40px;
  font-size: 1.8rem;
  text-shadow: -1px 1px 1px #c2185b;
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
