import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store/store';
import VueRouter from 'vue-router';
import './registerServiceWorker';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@/assets/style/main.scss';
import VueCompositionAPI, { createApp } from '@vue/composition-api';
import Auth from './utils/Auth';

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth;
  }
}

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false;


Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
