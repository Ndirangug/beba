<template>
  <div class="report-container">
    <div class="print-button">
      <v-btn color="primary" large elevation="10" icon @click="print">
        <v-icon>{{ icons.print }}</v-icon>
      </v-btn>
    </div>
    <v-simple-table>
      <thead>
        <tr>
          <th>Trip Id</th>
          <th>Scheduled Begin</th>
          <th>Actual Begin</th>
          <th>End</th>
          <th>Status</th>
          <th>Driver</th>
          <th>Vehicle</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(trip, i) in trips" :key="i">
          <td>{{ trip.getTripid() }}</td>
          <td>
            {{
              new Intl.DateTimeFormat()
                .format(trip.getScheduleddeparturetime().toDate())
                .includes('1970') ||
              new Intl.DateTimeFormat().format(
                trip.getScheduleddeparturetime().toDate()
              ) == '1/1/1'
                ? ''
                : new Intl.DateTimeFormat().format(
                    trip.getScheduleddeparturetime().toDate()
                  )
            }}
          </td>
          <td>
            {{
              new Intl.DateTimeFormat()
                .format(trip.getActualdeparturetime().toDate())
                .includes('1970') ||
              new Intl.DateTimeFormat().format(
                trip.getActualdeparturetime().toDate()
              ) == '1/1/1'
                ? ''
                : new Intl.DateTimeFormat().format(
                    trip.getActualdeparturetime().toDate()
                  )
            }}
          </td>
          <td>
             {{
              new Intl.DateTimeFormat()
                .format(trip.getActualarrivaltime().toDate())
                .includes('1970') ||
              new Intl.DateTimeFormat().format(
                trip.getActualarrivaltime().toDate()
              ) == '1/1/1'
                ? ''
                : new Intl.DateTimeFormat().format(
                    trip.getActualarrivaltime().toDate()
                  )
            }}
          </td>
          <td>{{ trip.getStatus() }}</td>
          <td>
            {{ trip.getDriver().getFirstname() }}
            {{ trip.getDriver().getLastname() }}
          </td>
          <td>{{ trip.getVehicle().getRegistrationnumber() }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { mdiPrinter } from '@mdi/js'
import Vue from 'vue'
import { Trip } from '~/protos/service_pb'
import { tripsStore } from '~/store'

export default Vue.extend({
  data() {
    return { icons: { print: mdiPrinter } }
  },
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
  methods: {
    print() {
      window.print()
    },
  },
})
</script>
