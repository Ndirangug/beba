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
              @mouseover="fetchAddrresses"
            ></v-text-field>

            <v-text-field
              v-model="form.destination"
              label="To"
              outlined
              readonly
              @mouseover="fetchAddrresses"
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

            <v-menu
              v-model="datePicker"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-text-field
                  v-model="form.scheduledStartTime"
                  outlined
                  label="Date"
                  :prepend-icon="icons.calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="form.scheduledStartTime"
                @input="datePicker = false"
              ></v-date-picker>
            </v-menu>
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
import { mdiCalendar, mdiMapMarker } from '@mdi/js'
import Vue from 'vue'
import emailjs, { init } from 'emailjs-com'
import { Driver, Trip, Vehicle } from '~/protos/service_pb'
import { driversStore, scheduleTripStore, vehicleStore } from '~/store'
import { EventBus } from '~/utils/event-bus'
import { geocode, LatLng } from '~/utils/geocoding'
import {
  ApiCallStatus,
  scheduleTrip as scheduleTripApi,
} from '~/utils/api-client'

export default Vue.extend({
  data() {
    return {
      icons: {
        mapMarker: mdiMapMarker,
        calendar: mdiCalendar,
      },
      form: {
        origin: '',
        destination: '',
        driver: driversStore.allDrivers[0],
        vehicle: vehicleStore.allVehicles[0],
        disburseFunds: true,
        scheduledStartTime: '',
      },
      model: scheduleTripStore.dialog,
      apiCallStatus: ApiCallStatus.WAITING,
      estimatedDistance: 5,
      estimatedDuration: 1,
      datePicker: false,
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
    init('user_7yP9yP1S2q2Z46bRzUXtO')
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
      // TODO:SCHEDULE TIME HERE SERCH VUETIFY DATE TIME PICKER
      scheduleTripApi(!process.browser, trip, this.onEndApiCall)

      this.disburseFunds()
      this.sendEmail()
      this.model = false
    },
    disburseFunds() {
      if (this.form.disburseFunds) {
        window.open(
          `http://localhost:7000/completeTransaction.php?email=${this.form.driver.getEmail()}&phone=${this.form.driver.getPhone()}&amount=${
            this.totalFuelCost
          }`
        )
      }
    },
    sendEmail() {
      const templateParams = {
        name: this.form.driver.getFirstname(),
        origin: this.form.origin,
        destination: this.form.destination,
        date: this.form.scheduledStartTime,
        money: this.totalFuelCost,
        email: this.form.driver.getEmail(),
        distance: this.estimatedDistance,
        duration: Math.ceil(this.estimatedDuration / 3600),
      }

      emailjs.send('service_9nijfkb', 'template_hitgxhm', templateParams).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
        },
        function (error) {
          console.log('FAILED...', error)
        }
      )
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
        console.log(result)

        this.form.origin = result
      })
      geocode(destinationLocation, geocoder, (result) => {
        console.log(result)

        this.form.destination = result
      })

      this.calculateDistance(originLocation, destinationLocation)
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

    calculateDistance(origin: LatLng, destination: LatLng) {
      const service = new this.$google.maps.DistanceMatrixService()

      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: 'DRIVING',
        },
        (response, status) => {
          console.log(response)

          const distance = response.rows[0].elements[0].distance.value
          const duration = response.rows[0].elements[0].distance.value
          console.log(distance)
          console.log(duration)
          this.estimatedDistance = distance / 1000
          this.estimatedDuration = duration
        }
      )
    },
  },
})
</script>
