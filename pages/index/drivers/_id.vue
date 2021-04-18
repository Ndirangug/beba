<template>
  <div class="driver-details-container">
    <title-row :title="title">
      <template #subtitle>
        <p>
          <v-icon size="10" color="driver.getOntrip()? 'red' : 'trip'">
            {{ icons.cirlce }}
          </v-icon>
          <span>{{ driver.getOntrip() ? 'On Trip' : 'On Break' }}</span>
        </p>
      </template>
    </title-row>
  </div>
</template>

<script lang="ts">
import { mdiCircle } from '@mdi/js'
import Vue from 'vue'
import TitleRow from '~/components/itemDetails/TitleRow.vue'
import { Driver } from '~/protos/service_pb'
import { driversStore } from '~/store'

export default Vue.extend({
  components: { TitleRow },
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
  },
})
</script>
