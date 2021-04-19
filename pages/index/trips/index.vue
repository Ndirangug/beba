<template>
  <div id="all-trips-container">
    <div class="trips-list">
      <v-timeline class="timeline-container" align-top>
        <v-timeline-item
          v-for="(tripGroup, key) in trips"
          :key="key"
          right
          small
        >
          <h6>{{ new Intl.DateTimeFormat().format(key) }}</h6>
          
          <trip-card
            v-for="trip in tripGroup"
            :key="trip.getTripid()"
            class="my-2"
            :trip="trip"
          />
        </v-timeline-item>
      </v-timeline>

      <!-- <trip-card
        v-for="trip in trips"
        :key="trip.getTripid()"
        class="my-2"
        :trip="trip"
      /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TripCard from '~/components/trips/TripCard.vue'
import { Trip } from '~/protos/service_pb'
import { tripsStore } from '~/store'

type GroupedTrips = { [key: number]: Trip[] }

export default Vue.extend({
  components: { TripCard },
  computed: {
    trips(): GroupedTrips {
      const trips = tripsStore.allTrips.slice()
      // console.log(trips)

      trips.sort((a, b) => a.getActualarrivaltime() - b.getActualarrivaltime())
      // console.log(trips)

      const groupedTrips: GroupedTrips = {}

      trips.forEach((trip) => {
        const time = trip.getActualarrivaltime()
        if (!(time in groupedTrips)) {
          groupedTrips[time] = []
        }

        groupedTrips[time].push(trip)
      })

      // console.log(groupedTrips);

      return groupedTrips
    },
  },
})
</script>

<style lang="scss" scoped>
.timeline-container {
  margin-left: -20em;
}
</style>
