<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
      cols="12"
      md="3"
      offset-md="1"
      offset="0"
    >
      <bracket-wrapper title="&html" color="light-purple" shadow="shadow-light-orange">
        HTML5<br>
        БЭМ<br>
        Адаптивная верстка<br>
      </bracket-wrapper>
    </v-col>

    <v-col
      cols="12"
      md="3"
      offset-md="1"
      offset="0"
    >
      <bracket-wrapper title="&css" color="light-purple" shadow="shadow-light-orange">
        SCSS<br>
        Bootstrap<br>
        Animate.css<br>
      </bracket-wrapper>
    </v-col>

    <v-col
      cols="12"
      md="3"
      offset-md="1"
      offset="0"
    >
      <bracket-wrapper title="&js" color="light-purple" shadow="shadow-light-orange"></bracket-wrapper>
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

@media (max-width: 1264px) {
}

@media (max-width: 959px) {
}

@media (max-width: 599px) {
}

@media (max-width: 399px) {
}
</style>
