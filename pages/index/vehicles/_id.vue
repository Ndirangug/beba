<template>
  <div class="driver-details-container">
    <title-row :title="title" :subtitle="vehicle.getRegistrationnumber()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleRow from '~/components/itemDetails/TitleRow.vue'
import { Vehicle } from '~/protos/service_pb'
import { vehicleStore } from '~/store'

export default Vue.extend({
  components: { TitleRow },
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
