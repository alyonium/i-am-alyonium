<template>
  <transition>
    <fragment>
      <background :tags="emojiList" :sizes="sizes"/>
      <main-content name="ALYONIUM"/>
      <about/>
      <portfolio/>
      <skills/>
      <contacts/>
    </fragment>
  </transition>
</template>

<script>
import { Fragment } from 'vue-fragment';
import Portfolio from '@/views/HomePage/Portfolio/Portfolio';
import Skills from '@/views/HomePage/Skills/Skills';
import MainContent from '@/components/MainContent';
import Contacts from '@/views/HomePage/Contacts/Contacts';
import About from '@/views/HomePage/About/About';
import Background from '@/components/Background';

export default {
  name: 'HomePage',
  components: {
    Contacts,
    MainContent,
    About,
    Portfolio,
    Skills,
    Background,
    Fragment,
  },
  data() {
    return {
      emojiList: [
        '🍑',
        '🍓',
        '🍒',
        '✨',
        '🔥',
        '💕',
        '🎀',
        '🌸',
        '🌙',
        '🐰',
        '🐵',
        '💋',
        '👩‍💻',
        '💄',
        '💍',
        '🦕',
        '⭐',
        '🌊',
        '💘',
        '🍌',
        '🍫',
        '🍭',
        '🍉',
        '🍕',
        '💌',
        '🔮',
      ],
      sizes: [
        12,
        16,
      ],
    };
  },
};
</script>
