import Vue from 'vue'
import Vuex from 'vuex'
import topics from './modules/topics'
import urls from './modules/urls'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  search: ''
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    topics,
    urls
  },
  strict: debug
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./mutation-types', './modules/topics', './modules/urls'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newMutations = require('./mutation-types').default
    const newModuleTopics = require('./modules/topics').default
    const newModuleUrls = require('./modules/urls').default
    // swap in the new actions and mutations
    store.hotUpdate({
      mutations: newMutations,
      modules: {
        newModuleTopics,
        newModuleUrls
      }
    })
  })
}

export default store
