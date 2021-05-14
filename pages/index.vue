<template>
  <div>
    <nav-drawer />
    <status-dialog />

    <v-progress-circular v-if="!renderMap" id="progress" width="5" size="70" />
    <GmapMap
      id="gMap"
      ref="gMap"
      :center="{
        lat: center.getLat(),
        lng: center.getLong(),
      }"
      :zoom="8"
      @rightclick="onRightClick"
    >
      <GmapMarker
        v-for="(vehicle, i) in vehicles"
        :ref="`marker${i}`"
        :key="i"
        :position="locations[0]"
        :clickable="true"
        :draggable="false"
        icon="/truckMarker.png"
        @click="goToVehicle(vehicle.getVehicleid())"
      />
    </GmapMap>

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
import { geocode, LatLng } from '~/utils/geocoding'

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
      locations: [] as LatLng[],
      locationsMovement: [] as LatLng[],
      renderMap: false,
      addresses: [] as string[],
      geocoder: Object,
      showRoute: false,
      route: [] as LatLng[],
      map: {},
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
    console.log(this)

    setTimeout(() => {
      this.initializeLocations()
      this.renderMap = true
      this.addresses = Array(this.vehicles.length)
      // @ts-ignore
      this.geocoder = new this.$google.maps.Geocoder()

      this.vehicles.forEach((vehicle: Vehicle, index: number) => {
        // @ts-ignore
        this.addressFromCoordinates(vehicle.getCurrentlocation(), index)
      })

      this.$refs.gMap.$mapPromise.then((map) => {
        console.log('mapp')
        console.log(map)
        this.map = map

        this.initializeMarkerMoveMock()
      })
    }, 5000)
    this.fetchData()
    this.setEventListeners()
  },

  methods: {
    initializeLocations() {
      this.vehicles.forEach((vehicle) => {
        this.locations.push({
          lat: vehicle.getCurrentlocation()?.getLat(),
          lng: vehicle.getCurrentlocation()?.getLong(),
        })

        const posneg = [-1, 1]
        this.locationsMovement.push({
          lat: posneg[Math.floor(Math.random() * posneg.length)],
          lng: posneg[Math.floor(Math.random() * posneg.length)],
        })
      })
    },
    initializeMarkerMoveMock() {
      const posneg = [-1, 1]
      setInterval(() => {
        this.locations.forEach((location) => {
          location.lat += 0.01 * this.locationsMovement[0].lat
          location.lng += 0.01 * this.locationsMovement[0].lng
        })
      }, 2000)
    },
    fetchData() {
      fetchVehicles(!process.browser)
      fetchDrivers(!process.browser)
      fetchTrips(!process.browser)
    },
    setEventListeners() {
      EventBus.$on('route:marker', (location: LatLng, index: number) => {
        this.setRouteMarker(location, index)
        this.$forceUpdate()
      })

      EventBus.$on('clear:route', () => {
        this.route.pop()
        this.route.pop()
      })
    },
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
    updateRouteMarkers() {},
    setRouteMarker(location: LatLng, index: number) {
      console.log(`setting route marker ${location}  ${index}`)
      this.$set(this.route, index, location)
      console.log(this.route)

      if (index === 1) {
        // if array index 0(origin) and 1(destination) are both filled
        this.drawRoute()
      }
    },
    drawRoute() {
      // @ts-ignore
      const directionsService = new this.$google.maps.DirectionsService()
      // @ts-ignore
      const directionsRenderer = new this.$google.maps.DirectionsRenderer()
      directionsRenderer.setMap(this.map)

      const request = {
        origin: this.route[0],
        destination: this.route[1],
        travelMode: 'DRIVING',
      }
      directionsService.route(request, (result: any, status: string) => {
        if (status === 'OK') {
          console.log(result)
          directionsRenderer.setDirections(result)
        } else {
          console.log(status)
        }
      })
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
