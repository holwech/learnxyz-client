import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/layouts/Main'
import resourceResults from '@/containers/Resource-results'
import urlPage from '@/containers/Url-page'
import add from '@/containers/Add'
import topicSearch from '@/containers/Topic-search'

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
        component: topicSearch
      },
      {
        path: 'add',
        name: 'add',
        component: add
      },
      {
        path: '/:topicId',
        name: 'resourceResults',
        component: resourceResults
      },
      {
        path: '/:topicId/:urlId',
        name: 'urlPage',
        component: urlPage
      }]
    }
  ]
})
