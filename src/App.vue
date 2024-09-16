<script setup>
import { ref, onMounted, computed } from 'vue'

import c from './constants/constants.js'
import WeatherSummary from './components/WeatherSummary.vue'
import HighlightsComponent from './components/HighlightsComponent.vue'
import CoordsComponent from './components/CoordsComponent.vue'
import HumidityComponent from './components/HumidityComponent.vue'
import { getWeatherInfo } from './services/weatherApiService.js'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = c.BASE_URL
const city = ref('Belgrade')
const url = computed(() => {
  return `${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`
})

const weatherInfo = ref(null)

onMounted(async () => {
  weatherInfo.value = await getWeatherInfo(url.value)
  console.log(weatherInfo.value)
})

const updateWeather = async () => {
  weatherInfo.value = await getWeatherInfo(url.value)
  city.value = ''
}
</script>
<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input @keyup.enter="updateWeather" v-model="city" type="text" class="search" />
                </div>
                <weather-summary :weatherInfo="weatherInfo"></weather-summary>
              </div>
            </section>
            <highlights-component></highlights-component>
          </div>
          <div class="sections">
            <coords-component :weatherInfo="weatherInfo"></coords-component>
            <humidity-component :weatherInfo="weatherInfo"></humidity-component>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/styles/main.scss';

.page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0;
  background-color: #59585d;
}

.laptop {
  width: 100%;
  padding: 20px;
  background-color: #0e100f;
  border-radius: 25px;
}

.sections {
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.section-left {
  width: 30%;
  padding-right: 10px;

  @media (max-width: 767px) {
    width: 100%;
    padding-right: 0;
  }
}

.section-right {
  width: 70%;
  padding-left: 10px;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 16px;
    padding-left: 0;
  }
}

.city-inner {
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 10px;
    width: 25px;
    height: 25px;
    background: url('./assets/img/search.svg') no-repeat 50% 50%;
    background-size: contain;
    transform: translateY(50%);
    cursor: pointer;
  }
}

.info {
  height: 100%;
  padding: 16px;
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%;
  background-size: cover;
  border-radius: 25px;
}

.search {
  width: 100%;
  padding: 16px;
  font-family: 'Inter', Arial, sans-serif;
  color: $white-color;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}

.section-bottom {
  width: 50%;
  margin-top: 16px;

  @media (max-width: 767px) {
    width: 100%;
  }
}
</style>
