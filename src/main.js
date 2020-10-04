import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import vuetify from './plugins/vuetify';

Vue.use(VueI18n);
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: 'ru', // установка локализации по умолчанию
})

new Vue({
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
