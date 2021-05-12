<template>
  <div id="map"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: {
  },
  mounted() {
    this.initMap()
    console.log(this.$google)
    
  },
  methods: {
    // Initialize and add the map
    initMap() {
      // The location of Uluru
      const uluru = { lat: -25.344, lng: 131.036 }
      // The map, centered at Uluru
      const map = new this.$google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru,
      })
      // The marker, positioned at Uluru
      const marker = new this.$google.maps.Marker({
        position: uluru,
        map,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
