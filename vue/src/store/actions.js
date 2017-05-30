import * as types from './mutation-types'

export const updateSearch = ({ commit, state }, search) => {
  commit({
    type: types.UPDATE_SEARCH,
    input: search.input
  })
}

