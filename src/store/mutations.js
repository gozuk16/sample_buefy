import MUTATION_TYPES from './mutation-types'

export const mutations = {
  [MUTATION_TYPES.GET_POSTS_REQUEST] (state) {
    state.isFetching = true
  },
  [MUTATION_TYPES.GET_POSTS_SUCCESS] (state, posts) {
    state.isFetching = false
    state.posts = posts
  },
  [MUTATION_TYPES.GET_POSTS_FAILURE] (state, err) {
    state.isFetching = false
    state.posts = null
    state.error = err
  },
  [MUTATION_TYPES.GET_DATA_REQUEST] (state) {
    state.isFetching = true
  },
  [MUTATION_TYPES.GET_DATA_SUCCESS] (state, data) {
    state.isFetching = false
    state.data = data
  },
  [MUTATION_TYPES.GET_DATA_FAILURE] (state, err) {
    state.isFetching = false
    state.posts = null
    state.data = err
  },
  [MUTATION_TYPES.GET_COLUMNS_REQUEST] (state) {
    state.isFetching = true
  },
  [MUTATION_TYPES.GET_COLUMNS_SUCCESS] (state, columns) {
    state.isFetching = false
    state.columns = columns
  },
  [MUTATION_TYPES.GET_COLUMNS_FAILURE] (state, err) {
    state.isFetching = false
    state.posts = null
    state.columns = err
  }
}
