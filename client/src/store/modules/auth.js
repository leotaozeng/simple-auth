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
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      auth
        .register(user)
        .then(res => {
          const { status, data } = res
          const newUser = {
            role: data.role,
            username: data.username,
            email: data.email,
            accessToken: data.accessToken
          }

          // 状态码是否等于 200
          if (status === SUCCESS_OK) {
            commit('AUTH_SUCCESS', newUser)

            // 存储用户信息
            localStorage.setItem('user', JSON.stringify(newUser))
            httpClient.defaults.headers.common['Authorization'] =
              data.accessToken

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
          const newUser = {
            role: data.role,
            username: data.username,
            email: data.email,
            accessToken: data.accessToken
          }

          // 状态码是否等于 200
          if (status === SUCCESS_OK) {
            commit('AUTH_SUCCESS', newUser)

            // 存储用户信息
            localStorage.setItem('user', JSON.stringify(newUser))
            httpClient.defaults.headers.common['Authorization'] =
              data.accessToken

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
      delete httpClient.defaults.headers.common['Authorization']

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
