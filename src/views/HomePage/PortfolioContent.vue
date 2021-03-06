<i18n>
{
  "ru": {
    "portfolio": "Больше моих работ можно найти",
    "portfolio-link": "здесь"
  },
  "en": {
    "portfolio": "You can find more my works",
    "portfolio-link": "here"
  }
}
</i18n>
<template>
  <v-row
    class="no-gutters pt-8 pb-5 pa-0">
    <v-col
        cols="12"
        md="3"
        class="d-flex justify-center align-center"
        offset-md="1"
        offset="0"
        v-for="work in works"
        :key="work.id"
    >

      <animated-border-wrapper>
        <a :href="work.online"
           target="_blank"
           class="picture-link d-flex">
          <v-img
            :src="`${$backendUrl}${work.preview}`"
            :lazy-src="`${$backendUrl}${work.preview}`"
            aspect-ratio="1"
            alt="screenshot"
            class="portfolio-photo">
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="deep-purple accent-2"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </a>
      </animated-border-wrapper>

    </v-col>

    <v-col
      md="11"
      sm="12"
      xs="12"
      offset-md="1"
      offset-sm="0"
      offset-xs="0"
      class="d-flex justify-center align-center">
      <p class="portfolio-link">{{ $t('portfolio') }} <nobr>
        <router-link to="/portfolio">
          <a>{{ $t('portfolio-link') }}</a>
        </router-link>
        🍓</nobr> </p>
    </v-col>
  </v-row>
</template>

<script>
import { getWorksPreviews } from '@/resources';
import AnimatedBorderWrapper from '@/components/AnimatedBorderWrapper';

export default {
  name: 'PortfolioContent',
  components: {
    AnimatedBorderWrapper,
  },
  data() {
    return {
      works: [],
    };
  },
  mounted() {
    this.getWorkList();
  },
  methods: {
    async getWorkList() {
      this.works = await getWorksPreviews();
    },
  },
};
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

  .portfolio-link {
    font-size: 1.5rem;
    color: map-get($deep-purple, accent-1);
    margin-top: 30px;
    text-align: center;
    text-shadow: -1px 1px 1px map-get($pink, darken-3);
  }

  .portfolio-link a {
    color: map-get($pink, lighten-3) !important;
    transition: 0.2s;
    text-decoration: none;
  }

  .portfolio-link a:hover,
  .portfolio-link a:active {
    transition: 0.5s;
    color: map-get($pink, darken-3) !important;
    text-decoration: none;
  }

  .portfolio-photo {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border: 5px solid transparent;
    transition: 0.3s;
  }

  .portfolio-photo:hover {
    transition: 0.3s;
    transform: rotate(-10deg);
    border: 8px solid transparent;
  }

  @media (max-width: 1264px) {
    .portfolio-photo {
      width: 250px;
      height: 250px;
      border: 2px solid map-get($deep-purple, accent-2);
      box-shadow: 0 0 10px 2px map-get($deep-purple, accent-1);
      margin-top: 20px;
      &:hover {
        transform: none;
        border: 2px solid map-get($deep-purple, accent-1);
        transition: none;
      }
    }

    .slide-text {
      font-size: 1.8rem;
      margin-top: 40px;
      margin-bottom: 20px !important;
      padding-left: 20px;
    }
  }

  @media (max-width: 959px) {
    .slide-text {
      padding-left: 0;
      max-width: 500px;
      margin-top: 50px;
    }

    .portfolio-photo {
      width: 440px;
      height: 440px;
    }
  }

  @media (max-width: 599px) {
    .slide-text {
      max-width: 300px;
    }

    .portfolio-photo {
      width: 300px;
      height: 300px;
    }

    .portfolio-link {
      max-width: 350px;
    }
  }

  @media (max-width: 399px) {
    .slide-text {
      max-width: 300px;
      font-size: 25px;
      padding-left: 10px;
    }

    .portfolio-photo {
      width: 290px;
      height: 290px;
    }
  }
</style>
