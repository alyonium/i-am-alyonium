<template>
  <div>
    <v-stage
      ref="stage"
      :config="configKonva"
    >
      <v-layer ref="layer">
        <v-text
          v-for="item in list"
          :key="item.id"
          :config="{
            x: item.x,
            y: item.y,
            id: item.id,
            text: item.name,
            fill: item.color,
            opacity: 0.4,
            fontFamily:  'Hack',
            fontSize: item.size,
          }"
        ></v-text>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const colors = [
  '#f06292',
  '#ba68c8',
  '#1e88e5',
];

export default {
  props: {
    tags: Array,
    sizes: Array,
  },
  data() {
    return {
      list: [],
      configKonva: {
        width: windowWidth,
        height: windowHeight,
        zIndex: 1,
      },
    };
  },
  created() {
    window.setInterval(() => {
      this.updateList();
    }, 50);
    for (let n = 0; n < (windowWidth / 50); n += 1) {
      this.list.push({
        id: n.toString(),
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        name: this.tags[Math.floor(Math.random() * this.tags.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: this.sizes[Math.floor(Math.random() * this.sizes.length)],
      });
    }
  },
  methods: {
    updateList() {
      this.list = this.list.map(({ x, ...rest }) => ({
        ...rest,
        x: x <= windowWidth ? x + 1 : -80,
      }));
    },
  },
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'Hack';
  src: url('~@/assets/fonts/Hack-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

div {
  position: fixed;
  * {
    font-family: 'Hack', sans-serif;
  }
}
</style>
