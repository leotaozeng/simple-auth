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
    setTimeout(() => {
      state.loading--
    }, 1000)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
