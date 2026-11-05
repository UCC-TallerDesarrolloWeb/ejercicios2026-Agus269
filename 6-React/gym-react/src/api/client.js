const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:4000/'

export const request = async (path, options = {}) => {
  const response = await fetch(`${baseURL.replace(/\/$/, '')}/${path}`, options)

  if (!response.ok) {
    throw new Error(`No se pudo completar la solicitud (${response.status}).`)
  }

  if (response.status === 204) return null
  return response.json()
}
