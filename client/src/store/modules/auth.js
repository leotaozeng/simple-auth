// import the API endpoints
import auth from '@/api/auth'
import httpClient from '@/api/httpClient'

const SUCCESS_OK = 200
const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

// initial state
const state = initialState

// getters
const getters = {
  user: state => state.user,
  loggedIn: state => state.status.loggedIn
}

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
        localStorage.setItem('user', JSON.stringify(data.user))
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
