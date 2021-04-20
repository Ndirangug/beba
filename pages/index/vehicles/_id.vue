<template>
  <div class="driver-details-container">
    <title-row :title="title" :subtitle="vehicle.getRegistrationnumber()" />

    <v-row class="d-flex justify-center align-center mt-n7">
      <img width="250" :src="vehicle.getPhoto()" />
    </v-row>

    <tabs-view
      :table-data="tableData"
      :items="['overview', 'history', 'scheduled trips']"
    />

    <v-row class="d-flex justify-center align-center">
      <v-btn color="primary">SCHEDULE TRIP</v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleRow from '~/components/itemDetails/TitleRow.vue'
import TabsView from '~/components/itemDetails/TabsView.vue'
import { Vehicle } from '~/protos/service_pb'
import { vehicleStore } from '~/store'

export default Vue.extend({
  components: { TitleRow, TabsView },

  computed: {
    vehicle(): Vehicle {
      return vehicleStore.vehicle(this.vehicleId)
    },
    vehicleId(): number {
      return parseInt(this.$route.params.id)
    },
    title(): String {
      return `${this.vehicle.getBrand()} ${this.vehicle.getModel()} ${this.vehicle.getModelyear()}`
    },
    tableData(): { [key: string]: string } {
      return {
        fuel_consumption: `${new Intl.NumberFormat('en-US', {
          maximumSignificantDigits: 3,
        }).format(this.vehicle.getFuelconsumption())} Km/h`,
        type: this.vehicle.getType(),
        color: this.vehicle.getColor(),
        model_year: this.vehicle.getModelyear(),
        date_purchased: new Intl.DateTimeFormat().format(
          new Date(this.vehicle.getDatepurchased() * 1000)
        ),
        expected_end_of_service: new Intl.DateTimeFormat().format(
          new Date(this.vehicle.getExpectedendservice() * 1000)
        ),
        condition: this.vehicle.getCondition(),
        maxWeight: `${new Intl.NumberFormat('en-US', {
          maximumSignificantDigits: 3,
        }).format(this.vehicle.getMaxweight())} t`,
      }
    },
  },
})
</script>
