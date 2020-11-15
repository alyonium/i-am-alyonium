<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".Contacts" color="light-pink" shadow="shadow-blue" size="big">
      <contacts-content></contacts-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import ContactsContent from '@/components/ContactsContent';

export default {
  name: 'Contacts',
  components: {
    ContactsContent,
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
