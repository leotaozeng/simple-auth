// import the API endpoints
import auth from '@/api/auth'
import httpClient from '@/api/httpClient'

const SUCCESS_OK = 200

// initial state
const state = {
  user: null,
  status: { loggedIn: false },
  token: localStorage.getItem('token') || ''
}

// getters
const getters = {}

// actions
const actions = {
  async login({ commit }, user) {
    try {
      const res = await auth.login(user)
      const { status, data } = res

      // 状态码是否等于 200
      if (status === SUCCESS_OK) {
        commit('AUTH_SUCCESS', {
          user: data.user,
          token: data.token
        })

        // 设置 token
        localStorage.setItem('token', data.token)
        httpClient.defaults.headers.common['Authorization'] = data.token

        return res
      }
    } catch (err) {
      const { response: res } = err

      return res
    }
  },

  register() {}
}

// mutations
const mutations = {
  AUTH_SUCCESS(state, payload) {
    state.status.loggedIn = true
    state.user = payload.user
    state.token = payload.token
  },

  AUTH_ERROR(state) {
    state.status.loggedIn = false
  },

  logout(state) {
    state.status.loggedIn = false
    state.token = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
