<template>
  <div>
    <nav-drawer />
    <status-dialog />

    <v-progress-circular v-if="!renderMap" id="progress" width="5" size="70" />
    <GMap
      v-else
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
      @rightclick="onRightClick"
    >
      <GMapMarker
        v-for="(vehicle, i) in vehicles"
        :ref="`marker${i}`"
        :key="i"
        :position="{
          lat: vehicle.getCurrentlocation().getLat(),
          lng: vehicle.getCurrentlocation().getLong(),
        }"
        :options="{ icon: '/truckMarker.png' }"
        @mouseover="addressFromCoordinates(vehicle.getCurrentlocation(), i)"
        @click="goToVehicle(vehicle.getVehicleid())"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <code>
            lat: {{ vehicle.getCurrentlocation().getLat() }}, lng:
            {{ vehicle.getCurrentlocation().getLong() }}

            Address:
            {{ addresses[i] }}
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

import StatusDialog from '@/components/scheduleTrip/StatusDialog.vue'
import { Driver, Location, Vehicle } from '~/protos/service_pb'
import { driversStore, vehicleStore } from '~/store'
import { fetchDrivers, fetchTrips, fetchVehicles } from '~/utils/api-client'
import { EventBus } from '~/utils/event-bus'
import { geocode } from '~/utils/geocoding'

export default Vue.extend({
  components: { StatusDialog },
  layout: 'maps',
  data() {
    return {
      currentLocation: {},
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
      renderMap: false,
      addresses: [] as string[],
      geocoder: Object,
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
    setTimeout(() => {
      this.renderMap = true
      this.addresses = Array(this.vehicles.length)
      // @ts-ignore
      this.geocoder = new this.$google.maps.Geocoder()

      this.vehicles.forEach((vehicle: Vehicle, index: number) => {
        // @ts-ignore
        this.addressFromCoordinates(vehicle.getCurrentlocation(), index)
      })
    }, 5000)

    fetchVehicles(!process.browser)
    fetchDrivers(!process.browser)
    fetchTrips(!process.browser)
    // EventBus.$on('map-location', (location: Location) => {
    //   console.log(`received ${location.getLat()}`)
    // })
  },

  methods: {
    addressFromCoordinates(location: Location, index: number) {
      geocode(
        { lat: location.getLat(), lng: location.getLong() },
        this.geocoder,
        (result) => {
          this.addresses[index] = result
          // eslint-disable-next-line no-console
          console.log(result)
        }
      )
    },
    onRightClick(data: any) {
      const location: Location = new Location()
      location.setLat(data.event.latLng.lat())
      location.setLong(data.event.latLng.lng())
      EventBus.$emit('map-location', location)
    },
    goToVehicle(id: number) {
      this.$router.push(`/vehicles/${id}`)
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

#progress {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

<style lang="scss">
#gMap,
.GMap__Wrapper {
  height: 100% !important;
  width: 100% !important;
}
</style>
