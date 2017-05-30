import * as types from './mutation-types'

const actions = {
  updateSearch ({ commit, state }, search) {
    commit({
      type: types.UPDATE_SEARCH,
      input: search
    })
  }
}

export default actions
