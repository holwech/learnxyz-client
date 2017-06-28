import * as types from '../mutation-types'
import axios from 'axios'
import URI from 'urijs'

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
    console.log('Loading: ' + state.loading)
  },
  [types.UPDATE_SEARCH] (state, search) {
    state.search = search
  },
  [types.CLEAR_DATA] (state) {
    state.urls = []
    state.noResult = null
  }
}

const getters = {
  urls: state => state.urls
}

const actions = {
  loadUrls ({ commit, state }, id) {
    commit(types.REQUESTING_DATA)
    // Get new topics based on the search input
    let uri = new URI('http://localhost:8091/resources/get')
    uri.search({ id })
    const api = uri.toString()
    axios.get(api).then(response => {
      commit(types.REQUEST_SUCCESS, response.data)
    }).catch(error => {
      console.log('AJAX FAILED: ' + error)
    })
  },
  updateSearch ({ commit, state }, search) {
    console.log('updateSearch called!')
  },
  clearData ({ commit, state }) {
    commit(types.CLEAR_DATA)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
