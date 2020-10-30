<template>
  <router-view />
</template>

<script>
import MainMenu from '@/layouts/MainMenu';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    MainMenu
  }
})
export default class App extends Vue {}
</script>
