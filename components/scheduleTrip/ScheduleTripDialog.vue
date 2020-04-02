<template>
  <v-dialog
    v-model="model"
    persistent
    transition="dialog-top-transition"
    max-width="600"
    @mouseenter="fetchAddrresses"
  >
    <template #default="dialog">
      <v-card elevation="10 px-12 pt-8 pb-4">
        <v-card-title class="d-flex flex-column mb-3">
          <v-icon large color="black" class="mb-4">
            {{ icons.mapMarker }}
          </v-icon>
          <p class="text-h6">Schedule Trip</p>
        </v-card-title>

        <v-card-text>
          <div class="form">
            <v-text-field
              v-model="form.origin"
              label="From"
              outlined
              readonly
            ></v-text-field>

            <v-text-field
              v-model="form.destination"
              label="To"
              outlined
              readonly
            ></v-text-field>

            <v-autocomplete
              v-model="form.driver"
              outlined
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
              outlined
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
            <p>
              Fuel Consumptin:
              {{
                new Intl.NumberFormat('en-US', {
                  maximumSignificantDigits: 3,
                }).format(form.vehicle.getFuelconsumption())
              }}
              l/km
            </p>
            <p>
              Total Fuel Consumption:
              {{ Math.ceil(totalFuelConsumption) }}
              lires

              <span class="mr-1">( Kshs {{ Math.ceil(totalFuelCost) }} )</span>
            </p>

            <div class="d-flex">
              <v-simple-checkbox v-model="form.disburseFunds" color="primary" />
              <span>Disburse Funds To Driver</span>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn text color="warning" @click="dialog.value = false"
            >CANCEL</v-btn
          >
          <v-btn text color="primary" @click="scheduleTrip">CONFIRM</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { mdiMapMarker } from '@mdi/js'
import Vue from 'vue'
import { Driver, Trip, Vehicle } from '~/protos/service_pb'
import { driversStore, scheduleTripStore, vehicleStore } from '~/store'
import { EventBus } from '~/utils/event-bus'
import { geocode } from '~/utils/geocoding'
import {
  ApiCallStatus,
  scheduleTrip as scheduleTripApi,
} from '~/utils/api-client'

export default Vue.extend({
  data() {
    return {
      icons: {
        mapMarker: mdiMapMarker,
      },
      form: {
        origin: '',
        destination: '',
        driver: driversStore.allDrivers[0],
        vehicle: vehicleStore.allVehicles[0],
        disburseFunds: false,
        scheduledStartTime: '',
      },
      model: scheduleTripStore.dialog,
      apiCallStatus: ApiCallStatus.WAITING,
    }
  },
  // TODO: add start date time field
  computed: {
    allDrivers(): Driver[] {
      return driversStore.allDrivers
    },
    allVehicles(): Vehicle[] {
      return vehicleStore.allVehicles
    },
    estimatedDistance(): number {
      return 5 // TODO:USE DISTANCE VECTOR  API
    },
    totalFuelConsumption(): number {
      return this.form.vehicle.getFuelconsumption() * this.estimatedDistance
    },
    fuelCostPerUnit(): number {
      return 113
    },
    totalFuelCost(): number {
      return this.fuelCostPerUnit * this.totalFuelConsumption
    },
  },

  watch: {
    model(value: boolean) {
      scheduleTripStore.updateDialog(value)
      this.model = scheduleTripStore.dialog
    },
  },

  mounted() {
    this.form.driver = driversStore.allDrivers[0]
    this.form.vehicle = vehicleStore.allVehicles[0]
  },

  updated() {
    // this.fetchAddrresses()
  },

  created() {
    EventBus.$on('open:dialog', () => {
      this.model = true
      this.fetchAddrresses()
    })
  },

  methods: {
    scheduleTrip() {
      console.log('scheduling')
      const trip = new Trip()
      trip.setDriver(this.form.driver)
      trip.setVehicle(this.form.vehicle)
      trip.setOrigin(scheduleTripStore.selectedOrigin)
      trip.setDestination(scheduleTripStore.selectedDestination)
      trip.setStatus('scheduled')
      //TODO:SCHEDULE TIME HERE SERCH VUETIFY DATE TIME PICKER
      scheduleTripApi(!process.browser, trip, this.onEndApiCall)
      this.model = false
    },
    onEndApiCall(status: ApiCallStatus) {
      this.apiCallStatus = status
      const message =
        status === ApiCallStatus.SUCCESS
          ? 'Transaction Successful'
          : 'Transaction Failed'
      EventBus.$emit('open-status-dialog', status, message)
    },
    fetchAddrresses() {
      console.log('fetching')

      // @ts-ignore
      const geocoder = new this.$google.maps.Geocoder()
      const originLocation = {
        lat: scheduleTripStore.selectedOrigin.getLat(), // mapStore.selectedOrigin.getLat(),
        lng: scheduleTripStore.selectedOrigin.getLong(), // mapStore.selectedOrigin.getLong(),
      }
      const destinationLocation = {
        lat: scheduleTripStore.selectedDestination.getLat(), // mapStore.selectedOrigin.getLat(),
        lng: scheduleTripStore.selectedDestination.getLong(), // mapStore.selectedOrigin.getLong(),
      }

      geocode(originLocation, geocoder, (result) => {
        this.form.origin = result
      })
      geocode(destinationLocation, geocoder, (result) => {
        this.form.destination = result
      })
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
