import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  topics: [],
  filteredTopics: [],
  loading: null,
  noResult: null
}

const mutations = {
  [types.REQUESTING_DATA] (state) {
    state.loading = true
  },
  [types.REQUEST_SUCCESS] (state, topics) {
    state.noResult = topics.length < 1
    state.topics = topics
    state.loading = false
  },
  [types.UPDATE_FILTERED_TOPICS] (state, filteredTopics) {
    state.filteredTopics = filteredTopics
  }
}

const getters = {
  topics: state => state.topics
}

const actions = {
  loadTopics ({ commit, state }) {
    commit(types.REQUESTING_DATA)
    const api = `http://localhost:8091/topics/`
    axios.get(api).then(response => {
      commit(types.REQUEST_SUCCESS, response.data)
    }).catch(error => {
      console.log('AJAX FAILED: ' + error)
    })
  },
  updateSearch ({ commit, state }, search) {
    commit(types.REQUESTING_DATA)
    // Get new topics based on the search input
    const api = `http://localhost:8091/topics/`
    axios.get(api).then(response => {
      commit(types.REQUEST_SUCCESS, response.data)
    }).catch(error => {
      console.log('AJAX FAILED: ' + error)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
