<template>
  <div class="driver-details-container">
    <p>{{ driver.getFirstname() }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Driver } from '~/protos/service_pb'
import { driversStore } from '~/store'

export default Vue.extend({
  computed: {
    driver(): Driver {
      return driversStore.driver(this.driverId)
    },
    driverId(): number {
      return parseInt(this.$route.params.id)
    },
  },
})
</script>
