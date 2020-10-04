<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".Skills" color="light-blue" shadow="shadow-purple">
      <skills-content></skills-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import SkillsContent from '@/components/SkillsContent';

export default {
  name: 'Skills',
  components: {
    SkillsContent,
    BracketWrapper,
  },
  props: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
