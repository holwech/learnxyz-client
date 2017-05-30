import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  urls: [],
  filteredUrls: [],
  loading: null,
  noResult: null
}

const mutations = {
  [types.REQUESTING_DATA] (state) {
    state.loading = true
  },
  [types.REQUEST_SUCCESS] (state, urls) {
    state.noResult = urls.length < 1
    state.urls = urls
    state.loading = false
  }
}

const getters = {
  urls: state => state.urls
}

const actions = {
  loadUrls ({ commit, state }) {
    commit(types.REQUESTING_DATA)
    const api = `http://localhost:3000/urls/`
    axios.get(api).then(response => {
      commit(types.REQUEST_SUCCESS, response.data)
    }).catch(error => {
      console.log('AJAX FAILED: ' + error)
    })
  },
  updateSearch ({ commit, state }, search) {
    commit(types.REQUESTING_DATA)
    // Get new topics based on the search input
    const api = `http://localhost:3000/urls/`
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
