import axios from 'axios'

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
    return authInterceptor(config)
  },
  error => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
httpClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default httpClient
