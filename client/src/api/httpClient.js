import axios from 'axios'
import store from '@/store'

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
    // anything you want to add to the headers
  }
})

// Add a request interceptor
httpClient.interceptors.request.use(
  config => {
    store.commit('loader/START_LOADING')
    return config
  },
  error => {
    // Do something with request error
    store.commit('loader/FINISH_LOADING')
    return Promise.reject(error)
  }
)

// Add a response interceptor
httpClient.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.commit('loader/FINISH_LOADING')
    return response
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.commit('loader/FINISH_LOADING')
    return Promise.reject(error)
  }
)

export default httpClient
