import Vue from 'vue';
import Editor from '@/layouts/Editor.vue';
import MainMenu from '@/layouts/MainMenu.vue';
import Explorer from '@/layouts/Explorer.vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainMenu,
      name: 'MainMenu'
    },
    {
      path: '/explore',
      component: Explorer,
      name: 'Explorer'
    }
  ]
});
