import c from '../constants/constants'

/**
 * Capitalizes the first letter of a given string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter capitalized. 
 * Returns an empty string if the input is falsy.
 */

export const capitalizeFirstLetter = (str) => {
  if (!str) return ''

  return str[0].toUpperCase() + str.slice(1)
}

/**
 * Converts pressure in hPa to mmHg.
 * @param {number} hPa - Pressure in hPa.
 * @returns {number} Pressure in mmHg.
 */
export const getPressureMm = (hPa) => Math.round(hPa * c.PRESSURE_UNITS)

/**
 * Returns a string with a time in 24-hour format.
 * @param {number} seconds - Time in seconds.
 * @returns {string} Time in 24-hour format.
 */
export const getTime = (seconds) => {
  if (!seconds || typeof seconds !== 'number') {
    return 0
  }

  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}
