<template>
  <div class="trips-list">
    <v-timeline class="timeline-container" align-top>
      <v-timeline-item
        v-for="(tripGroup, key) in groupedTrips"
        :key="key"
        right
        small
      >
        <h6 class="text-body-2">
          {{
            new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(
              new Date(key * 1000)
            )
          }}
          <!-- {{ key }} -->
        </h6>

        <trip-card
          v-for="(trip, i) in tripGroup"
          :key="trip.getTripid()"
          class="my-2"
          :trip="trip"
          :color="randomColor()"
          :multiplier="i"
        />
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import TripCard from '~/components/trips/TripCard.vue'
import { Trip } from '~/protos/service_pb'

type GroupedTrips = { [key: number]: Trip[] }

export default Vue.extend({
  components: { TripCard },
  props: {
    trips: {
      type: Object as PropType<Array<Trip>>,
      required: true,
      default: null,
    },
  },
  computed: {
    groupedTrips(): GroupedTrips {
      const trips = this.trips.slice()
      // console.log(trips)

      trips.sort(
        (a, b) => a.getScheduleddeparturetime() - b.getScheduleddeparturetime()
      )
      // console.log(trips)

      const groupedTrips: GroupedTrips = {}

      trips.forEach((trip) => {
        let time = trip.getScheduleddeparturetime().array[0]
        if (time === undefined) {
          console.log('time was undefined')

          time = 1421518761
        }

        if (!(time in groupedTrips)) {
          groupedTrips[time] = []
          console.log('key')

          console.log(time)
        }

        groupedTrips[time].push(trip)
      })

      // console.log(groupedTrips);

      return groupedTrips
    },
  },

  methods: {
    randomColor(): string {
      const colors = [
        'red',
        'green',
        'purple',
        'pink',
        'indigo',
        'blue',
        'teal',
        'cyan',
        'green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'brown',
        'grey',
      ]
      return colors[Math.floor(Math.random() * 14 + 1)]
    },
  },
})
</script>

<style lang="scss" scoped>
.timeline-container {
  margin-left: -20em;
}
</style>
