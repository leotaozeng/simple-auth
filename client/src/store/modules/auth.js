// import the API endpoints
import auth from '@/api/auth'

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
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      auth
        .register(user)
        .then(res => {
          const { status, data } = res

          // 状态码是否等于 200
          if (status === SUCCESS_OK) {
            commit('AUTH_SUCCESS', data)

            // 存储用户信息
            localStorage.setItem('user', JSON.stringify(data))

            resolve(res)
          }
        })
        .catch(err => reject(err))
    })
  },

  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      auth
        .login(user)
        .then(res => {
          const { status, data } = res

          // 状态码是否等于 200
          if (status === SUCCESS_OK) {
            commit('AUTH_SUCCESS', data)

            // 存储用户信息
            localStorage.setItem('user', JSON.stringify(data))

            resolve(res)
          }
        })
        .catch(err => reject(err))
    })
  },

  logout({ commit }) {
    return new Promise(resolve => {
      commit('LOGOUT')

      localStorage.removeItem('user')

      resolve()
    })
  }
}

// mutations
const mutations = {
  AUTH_SUCCESS(state, user) {
    state.status.loggedIn = true
    state.user = user
  },

  AUTH_ERROR(state) {
    state.status.loggedIn = false
  },

  LOGOUT(state) {
    state.status.loggedIn = false
    state.user = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
