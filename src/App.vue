<template>
  <router-view />
</template>

<script lang="ts">
import MainMenu from "@/layouts/MainMenu.vue";
import { defineComponent, provide } from '@vue/composition-api';
import Vue from 'vue';
import Component from 'vue-class-component';
import Auth, { IUserFlows } from './utils/Auth';
import { Configuration } from 'msal';

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
const auth = new Auth(config, userFlows);
Vue.prototype.$auth = auth;

export default defineComponent({
  name: "App",
  components: {
    MainMenu
  },
  setup() {
    provide('auth', auth);
  }
})
</script>
