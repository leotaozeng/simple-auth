import httpClient from './httpClient'
import authHeader from './auth-header'

const END_POINT = '/roles'

const getUserContent = () => {
  return httpClient.get(`${END_POINT}/user`, { headers: authHeader() })
}

const getModeratorContent = () => {
  return httpClient.get(`${END_POINT}/mod`, { headers: authHeader() })
}

const getAdminContent = () => {
  return httpClient.get(`${END_POINT}/admin`, { headers: authHeader() })
}

export default { getUserContent, getModeratorContent, getAdminContent }
