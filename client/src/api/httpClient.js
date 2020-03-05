import axios from 'axios'
import store from '@/store'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

const user = JSON.parse(localStorage.getItem('user'))

const authInterceptor = config => {
  if (user) {
    config.headers['Authorization'] = user.accessToken
  }

  return config
}

// Add a request interceptor
httpClient.interceptors.request.use(
  config => {
    store.commit('loader/START_LOADING')
    return authInterceptor(config)
  },
  error => {
    store.commit('loader/FINISH_LOADING')
    return Promise.reject(error)
  }
)

// Add a response interceptor
httpClient.interceptors.response.use(
  response => {
    store.commit('loader/FINISH_LOADING')
    return response
  },
  error => {
    store.commit('loader/FINISH_LOADING')
    return Promise.reject(error)
  }
)

export default httpClient
