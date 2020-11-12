import { createApp, provide } from 'vue';
import router from './router';
import App from './App.vue';
import store from './store/store';
import Auth, { IUserFlows } from './utils/Auth';
import { Configuration } from 'msal';
import './registerServiceWorker';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@/assets/style/main.scss';


const config: Configuration = {
  auth: {
    clientId: 'f8b8ed45-8ac1-442d-961d-c6efb6f2413b',
    authority:
      'https://incrementally.b2clogin.com/incrementally.onmicrosoft.com/B2C_1_signin_or_signup',
    validateAuthority: false
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
};
const userFlows: IUserFlows = {
  signin:
    'https://incrementally.b2clogin.com/incrementally.onmicrosoft.com/B2C_1_signin_or_signup',
  signup:
    'https://incrementally.b2clogin.com/incrementally.onmicrosoft.com/B2C_1_signup'
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $auth: Auth;
  }
}

provide('auth', new Auth(config, userFlows));

let app = createApp(App)
    .use(router)
    .use(store)
    .use(BootstrapVue)
    .use(IconsPlugin);

//app.config.globalProperties.$auth = new Auth(config, userFlows);


app.mount('#app');