<template>
  <div class="driver-details-container">
    <title-row :title="title">
      <template #subtitle>
        <p text-body-2 pl-n1>
          <v-icon size="10" :color="driver.getOntrip() ? 'red' : 'green'">
            {{ icons.cirlce }}
          </v-icon>
          <span>{{ driver.getOntrip() ? 'On Trip' : 'On Break' }}</span>
        </p>
      </template>
    </title-row>

    <v-row class="d-flex justify-center align-center mt-n4">
      <v-avatar height="150" width="150">
        <v-img :src="driver.getPhoto()"></v-img>
      </v-avatar>
    </v-row>

    <tabs-view
      :table-data="tableData"
      :items="[
        'personal details',
        'history',
        'scheduled trips',
        'cancelled trips',
      ]"
    >
      <template #history>
        <trips-list :trips="pastTrips" />
      </template>
      <template #scheduled>
        <trips-list :trips="scheduledTrips" />
      </template>
      <template #cancelled>
        <trips-list :trips="cancelledTrips" />
      </template>
    </tabs-view>

    <v-row class="d-flex justify-center align-center">
      <!-- <v-btn color="primary" @click="prepareScheduleTrip">SCHEDULE TRIP</v-btn> -->
      <schdule-trip-btn />
    </v-row>
  </div>
</template>

<script lang="ts">
import { mdiCircle } from '@mdi/js'
import Vue from 'vue'
import TitleRow from '~/components/itemDetails/TitleRow.vue'
import TabsView from '~/components/itemDetails/TabsView.vue'
import { Driver, Trip, Vehicle } from '~/protos/service_pb'
import {
  driversStore,
  scheduleTripStore,
  tripsStore,
  vehicleStore,
} from '~/store'
import ScheduleTripDialog from '~/components/scheduleTrip/ScheduleTripDialog.vue'
import SchduleTripBtn from '~/components/trips/SchduleTripBtn.vue'

export default Vue.extend({
  components: { TitleRow, TabsView,  SchduleTripBtn },
  data() {
    return { icons: { circle: mdiCircle } }
  },
  computed: {
    vehicle(): Vehicle {
      return vehicleStore.allVehicles[0]
    },
    driver(): Driver {
      return driversStore.driver(this.driverId)
    },
    driverId(): number {
      return parseInt(this.$route.params.id)
    },
    title(): String {
      return `${this.driver.getFirstname()} ${this.driver.getLastname()} `
    },
    tableData(): { [key: string]: string } {
      return {
        full_name: `${this.driver.getFirstname()} ${this.driver.getLastname()}`,
        email: this.driver.getEmail(),
        phone: this.driver.getPhone(),
        sex: this.driver.getSex(),
        date_of_birth: new Intl.DateTimeFormat().format(
          new Date(this.driver.getDateofbirth() * 1000)
        ),
        drivers_licence: this.driver.getDriverslicence(),
        date_employed: new Intl.DateTimeFormat().format(
          new Date(this.driver.getDateemployed() * 1000)
        ),
        evaluation_report: this.driver.getEvaluationreport(),
        comment: this.driver.getComment(),
      }
    },
    pastTrips(): Trip[] {
      return tripsStore.allTrips
        .slice()
        .filter((trip) => trip.getDriver()?.getIdnumber() === this.driverId)
        .filter((trip) => trip.getScheduleddeparturetime() < Date.now() / 1000)
    },
    scheduledTrips(): Trip[] {
      return tripsStore.allTrips
        .slice()
        .filter((trip) => trip.getDriver()?.getIdnumber() === this.driverId)
        .filter((trip) => trip.getStatus() === 'scheduled')
    },
    cancelledTrips(): Trip[] {
      return tripsStore.allTrips
        .slice()
        .filter((trip) => trip.getDriver()?.getIdnumber() === this.driverId)
        .filter((trip) => trip.getStatus() === 'cancelled')
    },
  },

  mounted() {
    scheduleTripStore.updateDriver(this.driver)
  },

  // methods: {
  //   prepareScheduleTrip() {
  //     console.log('prep...')
  //     scheduleTripStore.updateSnackbar(true)
  //     EventBus.$emit('open:snackbar')
  //     console.log('send message')
  //   },
  // },
})
</script>

<style lang="scss">
.v-window {
  overflow: visible;
}

.date-picker {
  top: -350px;
}
</style>
