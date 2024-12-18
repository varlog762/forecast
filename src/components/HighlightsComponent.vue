<script setup>
/**
 * Component: WeatherHighlights
 * 
 * This component displays key weather-related highlights, such as:
 * - Wind speed, wind direction, and wind gusts.
 * - Atmospheric pressure and "feels like" temperature.
 * - Sunrise and sunset times.
 * - Cloudiness percentage.
 * 
 * Props:
 * @prop {Object|null} weatherInfo - Weather data object containing details such as wind, pressure, cloudiness, and system (e.g., sunrise/sunset).
 * @prop {Object} weatherInfo.wind - Wind-related information.
 * @prop {number} weatherInfo.wind.speed - Wind speed in meters per second.
 * @prop {number} weatherInfo.wind.deg - Wind direction in degrees.
 * @prop {number} weatherInfo.wind.gusts - Wind gust speed.
 * @prop {Object} weatherInfo.main - Main weather conditions.
 * @prop {number} weatherInfo.main.pressure - Atmospheric pressure in hPa.
 * @prop {number} weatherInfo.main.feels_like - Temperature that "feels like" in °C.
 * @prop {Object} weatherInfo.clouds - Cloudiness data.
 * @prop {number} weatherInfo.clouds.all - Cloudiness percentage.
 * @prop {Object} weatherInfo.sys - System information for sunrise and sunset times.
 * @prop {number} weatherInfo.sys.sunrise - Unix timestamp for sunrise.
 * @prop {number} weatherInfo.sys.sunset - Unix timestamp for sunset.
 * @prop {number} weatherInfo.timezone - Timezone offset in seconds.
 * 
 * Dependencies:
 * - getTime: Utility function to convert a Unix timestamp into a readable time format.
 * - getPressureMm: Utility function to convert pressure from hPa to mmHg.
 */

import { computed } from 'vue'
import { getPressureMm, getTime } from '@/utils/utils'

// Props definition
const prop = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true
  }
})

// Computed properties for timezone, sunrise, and sunset times
const timezone = computed(() => prop.weatherInfo?.timezone)
const sunriseTime = computed(() => {
  return getTime(prop.weatherInfo?.sys?.sunrise + timezone.value)
})
const sunsetTime = computed(() => {
  return getTime(prop.weatherInfo?.sys?.sunset + timezone.value)
})
</script>

<template>
  <!-- Section displaying weather highlights -->
  <section class="section section-right">
    <div class="section highlights">
      <div class="title">Today's Highlights</div>
      <div class="highlights-wrapper">
        <!-- Wind Information -->
        <div class="highlight">
          <div class="card">
            <div class="card-title">Wind</div>
            <div class="card-pic card-pic--wind"></div>
            <div class="card-info">
              <div class="card-justify">
                <div class="info-main">
                  <div class="info-main-num">{{ weatherInfo?.wind?.speed }}</div>
                  <div class="info-main-text">m/s</div>
                </div>
                <div class="info-main">
                  <div class="info-main-num">{{ weatherInfo?.wind?.deg }}</div>
                  <div class="info-main-text">deg</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Wind Gusts Information -->
          <div class="card-small">
            <div class="card-small-title">Wind gusts</div>
            <div class="card-small-info">
              <div class="card-small-data" v-if="weatherInfo?.wind?.gusts">
                <div class="info-main-num">{{ Math.round(weatherInfo?.wind?.gusts) }}</div>
                <div class="info-main-text">m/s</div>
              </div>
              <div class="card-small-hint">
                <div class="card-small-pic card-small-pic--wind"></div>
                <div class="card-small-text">
                  Learn
                  <a
                    href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5"
                    target="_blank"
                    >more</a
                  >
                  about gusts
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pressure and Feels Like Information -->
        <div class="highlight">
          <div class="card">
            <div class="card-title">Pressure</div>
            <div class="card-pic card-pic--pressure"></div>
            <div class="card-info">
              <div class="card-centered">
                <div class="info-main">
                  <div class="info-main-num">{{ getPressureMm(weatherInfo?.main?.pressure) }}</div>
                  <div class="info-main-text">mm</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-small">
            <div class="card-small-title">Feels like</div>
            <div class="card-small-info">
              <div class="card-small-data">
                <div class="info-main-num">{{ Math.round(weatherInfo?.main?.feels_like) }}</div>
                <div class="info-main-text">°C</div>
              </div>
              <div class="card-small-hint">
                <div class="card-small-pic card-small-pic--margin card-small-pic--pressure"></div>
                <div class="card-small-text">How hot or cold it really feels</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sunrise, Sunset, and Cloudiness Information -->
        <div class="highlight">
          <div class="card">
            <div class="card-title">Sunrise and sunset</div>
            <div class="card-pic card-pic--sun"></div>
            <div class="card-info">
              <div class="states">
                <div class="state">
                  <div class="state-pic"></div>
                  <div class="state-title">Sunrise</div>
                  <div class="state-time">{{ sunriseTime }}</div>
                </div>
                <div class="state">
                  <div class="state-pic state-pic--flipped"></div>
                  <div class="state-title">Sunset</div>
                  <div class="state-time">{{ sunsetTime }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-small">
            <div class="card-small-title">Cloudiness</div>
            <div class="card-small-info">
              <div class="card-small-data">
                <div class="info-main-num">{{ weatherInfo?.clouds?.all }}</div>
                <div class="info-main-text">%</div>
              </div>
              <div class="card-small-hint">
                <div class="card-small-pic card-small-pic--sun"></div>
                <div class="card-small-text">The sky fraction obscured by clouds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>