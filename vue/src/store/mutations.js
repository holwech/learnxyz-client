import * as types from './mutation-types'

const mutations = {
  [types.UPDATE_SEARCH] (state, search) {
    state.search = search.input
  }
}

export default mutations
