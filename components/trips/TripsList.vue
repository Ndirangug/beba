<template>
  <div class="trips-container">
    <date-range-input class="mb-2" :dates.sync="dates" />
    <trips-timeline :trips="filteredTrips" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import TripsTimeline from '@/components/trips/TripsTimeline.vue'
import DateRangeInput from '@/components/trips/DateRangeInput.vue'
import { Trip } from '~/protos/service_pb'

export default Vue.extend({
  components: { TripsTimeline, DateRangeInput },
  props: {
    trips: {
      type: Object as PropType<Array<Trip>>,
      required: true,
      default() {
        return []
      },
    },
  },

  data() {
    return {
      dates: ['', ''],
    }
  },
  computed: {
    filteredTrips(): Trip[] {
      return this.dates[0] === '' || this.dates[1] === ''
        ? this.trips
        : this.trips
            .slice()
            .filter(
              (trip: Trip) =>
                trip.getScheduleddeparturetime() >
                  Date.parse(this.dates[0]) / 1000 &&
                trip.getScheduleddeparturetime() <
                  Date.parse(this.dates[1]) / 1000
            )
    },
  },
})
</script>
