import Vue from 'vue'
import Router from 'vue-router'
import Frontpage from '@/layouts/Front-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'frontpage',
      component: Frontpage
    }
  ]
})
