import MainMenu from '@/layouts/MainMenu.vue';
import Explorer from '@/layouts/Explorer.vue';
import VueRouter from 'vue-router';


export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
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
