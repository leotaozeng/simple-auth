import httpClient from './httpClient'

const END_POINT = '/roles'

const getUserContent = () => {
  return httpClient.post(`${END_POINT}/user`)
}

const getModeratorContent = () => {
  return httpClient.post(`${END_POINT}/mod`)
}

const getAdminContent = () => {
  return httpClient.post(`${END_POINT}/admin`)
}

export default { getUserContent, getModeratorContent, getAdminContent }
