import C from '../constants/constants'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = C.BASE_URL

/**
 * Fetches weather information for a given city using OpenWeatherMap API.
 *
 * @param {string} city - The name of the city for which weather data is requested.
 * @returns {Promise<Object>} - A promise that resolves to the weather data object.
 * 
 * Example response includes:
 * - temperature (metric units)
 * - weather conditions
 * - wind speed
 * - humidity, and more
 */
export const getWeatherInfo = async (city) => {
  try {
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    const response = await fetch(url)

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
