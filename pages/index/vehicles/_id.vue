<template>
  <div class="driver-details-container">
    <h1>{{ vehicle.getBrand() }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Vehicle } from '~/protos/service_pb'
import { vehicleStore } from '~/store'

export default Vue.extend({
  computed: {
    vehicle(): Vehicle {
      return vehicleStore.vehicle(this.vehicleId)
    },
    vehicleId(): number {
      return parseInt(this.$route.params.id)
    },
  },
})
</script>
