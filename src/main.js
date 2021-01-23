import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueKonva from 'vue-konva';
import App from './App';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(VueKonva);
Vue.use(VueI18n);
Vue.config.productionTip = false;
Vue.prototype.$httpRequest = 'http://localhost:3000';

const i18n = new VueI18n({
  locale: 'ru', // установка локализации по умолчанию
});

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
