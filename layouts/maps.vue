<template>
  <v-app class="maps-layout">
    <GMap
      id="gMap"
      ref="gMap"
      language="en"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :options="{ fullscreenControl: true, styles: mapStyle }"
      :zoom="8"
      map-ids="46cd1a2032db6b3a"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>

    <v-sheet id="sheet">
      <n-child />
    </v-sheet>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      currentLocation: {},
      locations: [
        {
          // ,
          lat: -1.2847464503136028,
          lng: 36.825933702022446,
        },
        {
          //,
          lat: -1.2042133565653255,
          lng: 36.769081599779184,
        },
        {
          lat: -0.45036063301313567,
          lng: 36.64582873931924,
        },
      ],
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
    }
  },
})
</script>

<style lang="scss" scoped>
#sheet {
  position: absolute;
}
</style>

<style lang="scss">
#gMap,
.GMap__Wrapper {
  height: 100% !important;
  width: 100% !important;
}
</style>
