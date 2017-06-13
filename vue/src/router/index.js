import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/layouts/Main'
import urlSearchMain from '@/containers/Url-search-main'
import urlPage from '@/containers/Url-page'
import addUrl from '@/containers/Add-url'
import wordSearchMain from '@/containers/Word-search-main'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
        path: 'add',
        name: 'add',
        component: addUrl
      },
      {
        path: '/:topicId',
        name: 'urlSearch',
        component: urlSearchMain
      },
      {
        path: '/:topicId/:urlId',
        name: 'urlPage',
        component: urlPage
      }]
    }
  ]
})
