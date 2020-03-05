import httpClient from './httpClient'

const END_POINT = '/roles'

const getUserContent = () => {
  return httpClient.get(`${END_POINT}/user`)
}

const getModeratorContent = () => {
  return httpClient.get(`${END_POINT}/mod`)
}

const getAdminContent = () => {
  return httpClient.get(`${END_POINT}/admin`)
}

export default { getUserContent, getModeratorContent, getAdminContent }
