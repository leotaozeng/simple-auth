import httpClient from './httpClient'

const END_POINT = '/auth'

const register = data => {
  return httpClient.post(`${END_POINT}/register`, data)
}

const login = data => {
  return httpClient.post(`${END_POINT}/login`, data)
}

export default { register, login }
