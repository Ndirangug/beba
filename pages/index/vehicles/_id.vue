<template>
  <div class="driver-details-container">
    <title-row :title="title" :subtitle="vehicle.getRegistrationnumber()" />

    <v-row class="d-flex justify-center align-center">
      <img width="250" :src="vehicle.getPhoto()" />
    </v-row>

    <tabs-view :items="['overview', 'history', 'scheduled trips']" />
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
  },
})
</script>
