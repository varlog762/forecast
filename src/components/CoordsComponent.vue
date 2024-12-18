<script setup>
/**
 * Props:
 * @prop {Object} coord - An object containing geographical coordinates.
 * @prop {number} coord.lon - Longitude of the location.
 * @prop {number} coord.lat - Latitude of the location.
 */
const prop = defineProps({
  coord: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <!-- Section to display geographical coordinates: longitude and latitude -->
  <section class="section-bottom">
    <div class="block-bottom">
      <div class="block-bottom-inner">
        <!-- Icon representing coordinates -->
        <div class="block-bottom-pic pic-coords"></div>

        <!-- Text block containing coordinate details -->
        <div class="block-bottom-texts">
          <!-- Longitude Section -->
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">
              Longitude: {{ coord?.lon }}
            </div>
            <div class="block-bottom-text-block-desc">
              Longitude measures distance east or west of the prime meridian.
            </div>
          </div>

          <!-- Latitude Section -->
          <div class="block-bottom-text-block">
            <div class="block-bottom-text-block-title">
              Latitude: {{ coord?.lat }}
            </div>
            <div class="block-bottom-text-block-desc">
              Latitude lines start at the equator (0 degrees latitude) and run east and west,
              parallel to the equator.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
