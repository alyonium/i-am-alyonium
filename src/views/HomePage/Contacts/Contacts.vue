<template>
  <v-container
      class="d-flex align-center">
    <bracket-wrapper title=".Contacts" size="big">
      <contacts-content></contacts-content>
    </bracket-wrapper>
  </v-container>
</template>

<script>
import BracketWrapper from '@/components/BracketWrapper';
import ContactsContent from '@/views/HomePage/Contacts/ContactsContent';

export default {
  name: 'Contacts',
  components: {
    ContactsContent,
    BracketWrapper,
  },
};
</script>
