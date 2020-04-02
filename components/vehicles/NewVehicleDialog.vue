<template>
  <v-dialog
    id="new-vehicle-dialog"
    v-model="model"
    persistent
    transition="dialog-top-transition"
    max-width="350"
  >
    <v-card class="px-6 pt-10 pb-4" elevation="10">
      <v-card-title class="d-flex flex-column justify-center align-center">
        <h6 class="text-body-1">New Vehicle</h6>
      </v-card-title>

      <v-card-text class="d-flex flex-column justify-center align-center">
        <div class="form">
          <v-text-field
            v-model="form.brand"
            label="Brand"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.model"
            label="Model"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.modelYear"
            label="Model Year"
            outlined
            type="number"
          ></v-text-field>

          <v-text-field
            v-model="form.registrationNumber"
            label="Registration Number"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.fuelConsumption"
            label="Fuel Consumption"
            outlined
            type="number"
            suffix="litres/km"
          ></v-text-field>

          <v-text-field
            v-model="form.color"
            label="Color"
            outlined
          ></v-text-field>

          <v-menu
            v-model="datePurchasedMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="form.datePurchased"
                label="Date Purchased"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.datePurchased"
              @input="datePurchasedMenu = false"
            ></v-date-picker>
          </v-menu>

          <v-menu
            v-model="expectedEndOfServiceMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="form.expectedEndService"
                label="Expected End Of Service"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.expectedEndService"
              @input="expectedEndOfServiceMenu = false"
            ></v-date-picker>
          </v-menu>

          <v-select
            v-model="form.type"
            label="Type"
            outlined
            :items="['Pickup', 'Van', 'Small Truck', 'Big Truck']"
          ></v-select>

          <v-select
            v-model="form.condition"
            label="Condition"
            outlined
            :items="['Excellent', 'Good', 'Poor']"
          ></v-select>

          <v-text-field
            v-model="form.maxWeight"
            label="Max Weight"
            type="number"
            outlined
            suffix="tonnes"
          ></v-text-field>

          <v-text-field
            v-model="form.photo"
            label="Photo"
            outlined
          ></v-text-field>
        </div>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text color="warning" @click="model = false">CANCEL</v-btn>
        <v-btn text color="primary" @click="newVehicle">ADD</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { Vehicle } from '~/protos/service_pb'
import { vehicleStore } from '~/store'
import { ApiCallStatus, newVehicle } from '~/utils/api-client'
import { EventBus } from '~/utils/event-bus'
export default Vue.extend({
  data() {
    return {
      model: false,
      datePurchasedMenu: false,
      expectedEndOfServiceMenu: false,
      form: {
        brand: '',
        model: '',
        modelYear: '',
        registrationNumber: '',
        fuelConsumption: 0,
        color: '',
        datePurchased: '',
        expectedEndService: '',
        type: '',
        condition: '',
        maxWeight: 0,
        photo: '',
      },
    }
  },

  computed: {
    vehicle(): Vehicle {
      const vehicle = new Vehicle()
      vehicle.setBrand(this.form.brand)
      vehicle.setModelyear(this.form.modelYear)
      vehicle.setModel(this.form.model)
      vehicle.setRegistrationnumber(this.form.registrationNumber)
      vehicle.setFuelconsumption(this.form.fuelConsumption)
      vehicle.setColor(this.form.color)
      vehicle.setDatepurchased(this.form.datePurchased)
      vehicle.setExpectedendservice(this.form.expectedEndService)
      vehicle.setType(this.form.type)
      vehicle.setCondition(this.form.condition)
      vehicle.setMaxweight(this.form.maxWeight)
      vehicle.setPhoto(this.form.photo)

      return vehicle
    },
  },

  created() {
    EventBus.$on('new-vehicle', () => {
      this.model = true
    })
  },
  methods: {
    newVehicle() {
      console.log('new vehicle')

      newVehicle(!process.browser, this.vehicle, this.onEndApiCall)
      this.model = false
    },
    onEndApiCall(status: ApiCallStatus) {
      if (status === ApiCallStatus.SUCCESS) {
        vehicleStore.pushVehicle(this.vehicle)
      }

      const message =
        status === ApiCallStatus.SUCCESS
          ? `Vehicle Created Successfully`
          : 'Failed'
      EventBus.$emit('open-status-dialog', status, message)
    },
  },
})
</script>
