<template>
  <transition>
    <fragment>
      <moving-background :tags="emojiList" :sizes="sizes"/>
      <main-header name="ALYONIUM"/>
      <content-wrapper title=".About" size="big">
        <about-content/>
      </content-wrapper>
      <content-wrapper title=".Portfolio" size="big">
        <portfolio-content/>
      </content-wrapper>
      <content-wrapper title=".Skills" size="big">
        <skills-content/>
      </content-wrapper>
      <content-wrapper title=".Contacts" size="big">
        <contacts-content/>
      </content-wrapper>
    </fragment>
  </transition>
</template>

<script>
import { Fragment } from 'vue-fragment';
import MainHeader from '@/components/MainHeader';
import MovingBackground from '@/components/MovingBackground';
import ContentWrapper from '@/components/ContentWrapper';
import AboutContent from '@/views/HomePage/AboutContent';
import PortfolioContent from '@/views/HomePage/PortfolioContent';
import SkillsContent from '@/views/HomePage/SkillsContent';
import ContactsContent from '@/views/HomePage/ContactsContent';

export default {
  name: 'HomePage',
  components: {
    MainHeader,
    MovingBackground,
    ContentWrapper,
    AboutContent,
    PortfolioContent,
    SkillsContent,
    ContactsContent,
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
