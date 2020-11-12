<template>
  <b-dropdown
    text="Sign up"
    right
    variant="outline-light"
    style="padding-left:5px;"
  >
    <b-dropdown-item v-if="user.loggedIn">
      {{ user.username }}
    </b-dropdown-item>
    <b-dropdown-item
      v-if="user.loggedIn"
      @click="logout"
    >
      Logout
    </b-dropdown-item>
    <b-dropdown-item
      v-if="!user.loggedIn"
      @click="signup"
    >
      Sign up
    </b-dropdown-item>
    <b-dropdown-item
      v-if="!user.loggedIn"
      @click="login"
    >
      Login
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { AuthenticationParameters } from 'msal';
import { userStore } from '../store/UserStore';
import { defineComponent, inject } from 'vue';
import Auth from '@/utils/Auth';

export default defineComponent({
  name: 'LoginButton',
  setup() {
    const user = userStore;
    const auth = inject('auth') as Auth;
    let login = async () => {
      await user.login(auth);
    };
    let logout = async () => {
      await user.logout(auth);
    };
    let signup = async () => {
      await user.signup(auth);
    };
    return {
      login,
      logout,
      signup,
      user
    };
  }
});
</script>

<style scoped></style>
