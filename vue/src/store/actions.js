import * as types from './mutation-types'

export const updateSearch = ({ commit, state, dispatch }, data) => {
  commit({
    type: types.UPDATE_SEARCH,
    input: data.search
  })
  let type = 'topics/updateSearch'
  if (data.pathName === 'urlSearch') {
    type = 'urls/updateSearch'
  }
  dispatch({
    type: type,
    input: this.search
  })
}

