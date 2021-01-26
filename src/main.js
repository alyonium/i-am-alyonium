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

let userLang = window.navigator.language || window.navigator.userLanguage;

if (localStorage.getItem('locale')) {
  userLang = localStorage.getItem('locale');
} else if (userLang.includes('ru')) {
  localStorage.setItem('locale', 'ru');
} else {
  localStorage.setItem('locale', 'en');
}

const i18n = new VueI18n({
  locale: localStorage.getItem('locale'), // установка локализации по умолчанию
});

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
