import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/layouts/Main'
import frontPage from '@/containers/Front-page'
import urlPage from '@/containers/Url-page'
import addUrl from '@/containers/Add-url'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [{
        path: '',
        name: 'main',
        component: frontPage
      },
      {
        path: 'url/:url',
        name: 'urlPage',
        component: urlPage
      },
      {
        path: 'add',
        name: 'add',
        component: addUrl
      }]
    }
  ]
})
