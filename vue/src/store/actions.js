import * as types from './mutation-types'

export const updateSearch = ({ commit, state, dispatch }, search) => {
  commit({
    type: types.UPDATE_SEARCH,
    input: search.input
  })
  dispatch({
    type: 'topics/updateSearch',
    input: this.search
  })
}

