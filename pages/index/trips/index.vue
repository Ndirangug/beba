<template>
  <div class="all-trips-container pt-8">
    <trips-list :trips="allTrips" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TripsList from '@/components/trips/TripsList.vue'
import { Trip } from '~/protos/service_pb'
import { tripsStore } from '~/store'

export default Vue.extend({
  components: { TripsList },
  computed: {
    allTrips(): Trip[] {
      return tripsStore.allTrips
    },
  },
})
</script>
