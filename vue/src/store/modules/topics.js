import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  topics: [],
  filteredTopics: [],
  loading: null,
  noResult: null,
  search: ''
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
  },
  [types.UPDATE_SEARCH] (state, search) {
    state.search = search
  }
}

const getters = {
  topics: state => state.topics
}

const actions = {
  updateSearch ({ commit, state, dispatch }, data) {
    commit(types.UPDATE_SEARCH, data.search)
    dispatch('getTopics')
  },
  getTopics ({ commit, state }) {
    commit(types.REQUESTING_DATA)
    const api = `http://localhost:8091/topics/get`
    axios.get(api, {
      params: {
        search: state.search
      }
    }).then(response => {
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
