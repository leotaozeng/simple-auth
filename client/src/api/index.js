import httpClient from './httpClient'

const getPublicContent = () => {
  return httpClient.get()
}

export { getPublicContent }
