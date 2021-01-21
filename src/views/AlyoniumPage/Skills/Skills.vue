<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".Skills" size="big">
      <skills-content></skills-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import SkillsContent from '@/views/AlyoniumPage/Skills/SkillsContent';

export default {
  name: 'Skills',
  components: {
    SkillsContent,
    BracketWrapper,
  },
};
</script>
