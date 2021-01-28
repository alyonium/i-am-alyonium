<template>
  <transition>
    <fragment>
      <moving-background :tags="emojiList" :sizes="sizes"/>
      <main-header name="ALYONIUM"/>
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
import MainHeader from '@/components/MainHeader';
import Contacts from '@/views/HomePage/Contacts/Contacts';
import About from '@/views/HomePage/About/About';
import MovingBackground from '@/components/MovingBackground';

export default {
  name: 'HomePage',
  components: {
    Contacts,
    MainHeader,
    About,
    Portfolio,
    Skills,
    MovingBackground,
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
