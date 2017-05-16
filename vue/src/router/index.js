import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/layouts/Main'
import urlSearchMain from '@/containers/Url-search-main'
import urlPage from '@/containers/Url-page'
import addUrl from '@/containers/Add-url'
import wordSearchMain from '@/containers/Word-search-main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [{
        path: '',
        name: 'main',
        component: wordSearchMain
      },
      {
        path: '/:topic',
        name: 'urlSearch',
        component: urlSearchMain
      },
      {
        path: 'add',
        name: 'add',
        component: addUrl
      },
      {
        path: '/:topic/:url',
        name: 'urlPage',
        component: urlPage
      }]
    }
  ]
})
