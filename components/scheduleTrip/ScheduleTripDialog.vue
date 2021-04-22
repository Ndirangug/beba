<template>
  <v-dialog
    v-model="model"
    persistent
    transition="dialog-top-transition"
    max-width="600"
  >
    <template #default="dialog">
      <v-card elevation="10">
        <v-card-title>
          <v-icon>{{ icons.mapMarker }}</v-icon>
          <h6 class="text-h6">Schedule Trip</h6>
        </v-card-title>

        <v-card-text>
          <div class="form">
            <v-text-field
              label="From"
              outlined
              :value="form.origin"
            ></v-text-field>

            <v-text-field
              label="To"
              outlined
              :value="form.destination"
            ></v-text-field>

            <v-autocomplete
              v-model="form.driver"
              :items="allDrivers"
              :filter="driversFilter"
              color="white"
              label="Driver"
              cache-items
              return-object
            >
              <template #selection="data">
                <v-list-item-content>
                  {{ driverSummry(data.item) }}
                </v-list-item-content>
              </template>

              <template #item="data">
                <v-list-item-content>
                  {{ driverSummry(data.item) }}
                </v-list-item-content>
              </template>
            </v-autocomplete>

            <v-autocomplete
              v-model="form.vehicle"
              :items="allVehicles"
              :filter="vehiclesFilter"
              color="white"
              label="Vehicle"
              cache-items
              return-object
            >
              <template #selection="data">
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize">{{
                    vehicleSummary(data.item)
                  }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <template #item="data">
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize">
                    {{ vehicleSummary(data.item) }}</v-list-item-title
                  >
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </div>

          <div class="trip-info">
            <p>Estimated Distance: {{ estimatedDistance }} km</p>
            <p>Fuel Consumptin: {{ form.vehicle.getFuelconsumption() }} l/km</p>
            <p>
              Total Fuel Consumptin:
              {{
                Math.ceil(form.vehicle.getFuelconsumption() * estimatedDistance)
              }}
              lires
            </p>

            <v-simple-checkbox></v-simple-checkbox>
          </div>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn text color="warning" @click="dialog.value = false"
            >CANCEL</v-btn
          >
          <v-btn text color="blue" @click="scheduleTrip">CONFIRM</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { mdiMapMarker } from '@mdi/js'
import Vue from 'vue'
import { Driver, Vehicle } from '~/protos/service_pb'
import { driversStore, scheduleTripStore, vehicleStore } from '~/store'
import { EventBus } from '~/utils/event-bus'

export default Vue.extend({
  data() {
    return {
      icons: {
        mapMarker: mdiMapMarker,
      },
      form: {
        origin: '',
        destination: '',
        driver: scheduleTripStore.driver,
        vehicle: scheduleTripStore.vehicle,
      },
      model: scheduleTripStore.dialog,
    }
  },

  computed: {
    allDrivers(): Driver[] {
      return driversStore.allDrivers
    },
    allVehicles(): Vehicle[] {
      return vehicleStore.allVehicles
    },
    estimatedDistance(): number {
      return 0
    },
  },

  watch: {
    model(value: boolean) {
      scheduleTripStore.updateDialog(value)
      this.model = scheduleTripStore.dialog
    },
  },

  mounted() {
    this.fetchAddrresses()
  },

  created() {
    EventBus.$on('open:dialog', () => {
      this.model = true
    })
  },

  methods: {
    scheduleTrip() {
      console.log('scheduling')
      this.model = false
    },
    fetchAddrresses() {
      // @ts-ignore
      const geocoder = new this.$google.maps.Geocoder()

      geocoder.geocode(
        {
          location: {
            lat: 0, // mapStore.selectedOrigin.getLat(),
            lng: 0, // mapStore.selectedOrigin.getLong(),
          },
        },
        (results, status) => {
          if (status === 'OK') {
            this.form.origin = results[0].formatted_address
          } else {
            // eslint-disable-next-line no-console
            console.log(
              'Geocode was not successful for the following reason: ' + status
            )
            // setTimeout(() => {
            //   this.fetchAddresses()
            // }, 1000 * this.multiplier)
          }
        }
      )

      geocoder.geocode(
        {
          location: {
            lat: 0, // mapStore.selectedDestination.getLat(),
            lng: 0, // mapStore.selectedDestination.getLong(),
          },
        },
        (results, status) => {
          if (status === 'OK') {
            this.form.destination = results[0].formatted_address
          } else {
            // eslint-disable-next-line no-console
            console.log(
              'Geocode was not successful for the following reason: ' + status
            )
          }
        }
      )
    },

    driversFilter(drier: Driver, queryText: String, _itemText: String) {
      const firstname = drier.getFirstname().toLowerCase()
      const lastname = drier.getLastname().toLowerCase()
      const searchText = queryText.toLowerCase()
      console.log('searching')

      return firstname.includes(searchText) || lastname.includes(searchText)
    },

    vehiclesFilter(vehicle: Vehicle, queryText: String, _itemText: String) {
      const regNumber = vehicle.getRegistrationnumber().toLowerCase()
      const model = vehicle.getModel().toLowerCase()
      const brand = vehicle.getBrand().toLowerCase()
      const searchText = queryText.toLowerCase()

      return (
        regNumber.includes(searchText) ||
        model.includes(searchText) ||
        brand.includes(searchText)
      )
    },

    driverSummry(driver: Driver): String {
      return `${driver.getFirstname()} ${driver.getLastname()}`
    },
    vehicleSummary(vehicle: Vehicle): String {
      return `${vehicle.getBrand()} ${vehicle.getModel()}   -   ${vehicle.getRegistrationnumber()}`
    },
  },
})
</script>
