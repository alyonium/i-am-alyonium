<template>
  <fragment>
    <main-content name="ALYONIUM"/>
    <about/>
    <portfolio/>
    <skills/>
    <contacts/>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Portfolio from '@/views/HomePage/Portfolio/Portfolio';
import Skills from '@/views/HomePage/Skills/Skills';
import MainContent from '@/components/MainContent';
import Contacts from '@/views/HomePage/Contacts/Contacts';
import About from '@/views/HomePage/About/About';

export default {
  name: 'HomePage',
  components: {
    Contacts,
    MainContent,
    About,
    Portfolio,
    Skills,
    Fragment,
  },
};
</script>
