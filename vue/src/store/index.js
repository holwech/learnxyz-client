import Vue from 'vue'
import Vuex from 'vuex'
import topics from './modules/topics'
import resources from './modules/resources'
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
    resources
  },
  strict: debug
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./mutation-types', './modules/topics', './modules/resources'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newMutations = require('./mutation-types').default
    const newModuleTopics = require('./modules/topics').default
    const newModuleResources = require('./modules/resources').default
    // swap in the new actions and mutations
    store.hotUpdate({
      mutations: newMutations,
      modules: {
        newModuleTopics,
        newModuleResources
      }
    })
  })
}

export default store
