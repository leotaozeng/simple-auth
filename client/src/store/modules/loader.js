// initial state
const state = {
  loading: 0
}

// getters
const getters = {
  loading: state => state.loading
}

// actions
const actions = {}

// mutations
const mutations = {
  START_LOADING(state) {
    state.loading++
  },

  FINISH_LOADING(state) {
    state.loading--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
