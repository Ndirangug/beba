<template>
  <div>
    <nav-drawer />
    <GMap
      id="gMap"
      ref="gMap"
      language="en"
      :center="{
        lat: center.getLat(),
        lng: center.getLong(),
      }"
      :options="{ fullscreenControl: true, styles: mapStyle }"
      :zoom="8"
      map-ids="46cd1a2032db6b3a"
      @click="onClick"
      @dblclick="onDoubleClick"
      @rightclick="onRightClick"
    >
      <GMapMarker
        v-for="vehicle in vehicles"
        :key="vehicle.getVehicleid()"
        :position="{
          lat: vehicle.getCurrentlocation().getLat,
          lng: vehicle.getCurrentlocation().getLang,
        }"
        @click="currentLocation = vehicle.getCurrentlocation()"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <code>
            lat: {{ vehicle.getCurrentlocation().getLat() }}, lng:
            {{ vehicle.getCurrentlocation().getLong() }}

            Address:
            {{ addressFromCoordinates(vehicle.getCurrentlocation()) }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>

    <v-sheet id="sheet" class="elevation-20" :style="sheetWidth" height="100%">
      <n-child />
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Driver, Location, Vehicle } from '~/protos/service_pb'
import { driversStore, vehicleStore } from '~/store'
import { fetchDrivers, fetchTrips, fetchVehicles } from '~/utils/api-client'

export default Vue.extend({
  layout: 'maps',
  data() {
    return {
      currentLocation: {},
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
    }
  },

  computed: {
    sheetWidth(): String {
      return this.$route.path === '/' ? 'width:0' : 'width:30em'
    },
    drivers(): Driver[] {
      return driversStore.allDrivers
    },
    vehicles(): Vehicle[] {
      return vehicleStore.allVehicles
    },
    center(): Location {
      const location: Location = new Location()
      let lat: number
      let long: number

        // @ts-ignore
        // eslint-disable-next-line prefer-const
      ;({ lat, long } =
        this.vehicles.length > 0
          ? {
              lat: this.vehicles[0].getCurrentlocation()?.getLat(),
              long: this.vehicles[0].getCurrentlocation()?.getLong(),
            }
          : { lat: -1.2042133565653255, long: 36.825933702022446 })

      location.setLat(lat)
      location.setLong(long)
      return location
    },
  },

  mounted() {
    fetchVehicles(!process.browser)
    fetchDrivers(!process.browser)
    fetchTrips(!process.browser)
  },

  methods: {
    addressFromCoordinates(location: Location): String {
      return 'Address Address'
    },
    onRightClick(data: any) {
      console.log('right click')
      const location: Location = new Location()
      location.setLat(data.event.latLng.lat())
      location.setLong(data.event.latLng.lng())
      console.log(location)
    },
    onClick(data: any) {
      const location: Location = new Location()
      location.setLat(data.event.latLng.lat())
      location.setLong(data.event.latLng.lng())
      console.log(location)
    },
    onDoubleClick(data: any) {
      console.log('double click')
      console.log(data)
    },
  },
})
</script>

<style lang="scss" scoped>
#sheet {
  position: fixed;
  padding-left: 5em;
  transition: width 0.5s;
  overflow: scroll;
}

#gMap {
  position: fixed;
}
</style>

<style lang="scss">
#gMap,
.GMap__Wrapper {
  height: 100% !important;
  width: 100% !important;
}
</style>
