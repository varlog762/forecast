import c from '../constants/constants'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = c.BASE_URL

export const getWeatherInfo = async (city) => {
  try {
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    const response = await fetch(url)

    if (!response.ok) {
      return getWeatherInfo('Istanbul')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
