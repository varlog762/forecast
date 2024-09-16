import c from '../constants/constants'

export const capitalizeFirstLetter = (str) => {
  if (!str) return ''

  return str[0].toUpperCase() + str.slice(1)
}

export const getPressureMm = (hPa) => Math.round(hPa * c.PRESSURE_UNITS)

export const getTime = (seconds) => {
  if (!seconds || typeof seconds !== 'number') {
    return 0
  }

  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}
