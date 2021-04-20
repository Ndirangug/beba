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
      :items="['personal details', 'history', 'scheduled trips']"
    />

    <v-row class="d-flex justify-center align-center">
      <v-btn color="primary">SCHEDULE TRIP</v-btn>
    </v-row>
  </div>
</template>

<script lang="ts">
import { mdiCircle } from '@mdi/js'
import Vue from 'vue'
import TitleRow from '~/components/itemDetails/TitleRow.vue'
import TabsView from '~/components/itemDetails/TabsView.vue'
import { Driver } from '~/protos/service_pb'
import { driversStore } from '~/store'

export default Vue.extend({
  components: { TitleRow, TabsView },
  data() {
    return { icons: { circle: mdiCircle } }
  },
  computed: {
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
  },
})
</script>
