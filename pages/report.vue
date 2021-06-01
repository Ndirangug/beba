<template>
  <div class="report-container"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Trip } from '~/protos/service_pb'
import { tripsStore } from '~/store'
export default Vue.extend({
  computed: {
    today(): Boolean {
      return this.$route.query.today === '1'
    },
    trips(): Trip[] {
      return this.today
        ? tripsStore.allTrips.slice().filter((trip) => {
            const tripdate = trip.getScheduleddeparturetime().toDate()
            const today = new Date()

            return (
              tripdate.getDate() === today.getDate() &&
              tripdate.getMonth() === today.getMonth() &&
              tripdate.getFullYear() === today.getFullYear()
            )
          })
        : tripsStore.allTrips
    },
  },
})
</script>
