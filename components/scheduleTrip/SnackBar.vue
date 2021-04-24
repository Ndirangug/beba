<template>
  <div class="snackbar-container">
    <v-snackbar v-model="model" timeout="-1">
      <p>Right click on the map to Chooose a start location</p>
      <div v-if="showLocation">
        {{ locationsStr[index] }} ({{ locations[index] }})
      </div>
      <v-progress-circular v-show="loading" size="20" indeterminate />

      <template #action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          :disabled="!showLocation"
          @click="proceed"
        >
          CONFIRM
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Location } from '@/protos/service_pb'
import { scheduleTripStore } from '~/store'
import { EventBus } from '~/utils/event-bus'
import { geocode } from '~/utils/geocoding'

export default Vue.extend({
  data() {
    return {
      model: scheduleTripStore.snackbar,
      locations: [] as Location[],
      locationsStr: [] as string[],
      index: 0,
      showLocation: false,
      loading: false,
    }
  },

  computed: {
    snackbar(): boolean {
      return scheduleTripStore.snackbar
    },
  },

  watch: {
    model(value: boolean) {
      scheduleTripStore.updateSnackbar(value)
      this.model = scheduleTripStore.snackbar
    },
  },

  created() {
    EventBus.$on('open:snackbar', () => {
      this.model = true
    })

    EventBus.$on('map-location', (location: Location) => {
      this.loading = true
      geocode(
        { lat: location.getLat(), lng: location.getLong() },
        // @ts-ignore
        new this.$google.maps.Geocoder(),
        (result) => (this.locationsStr[this.index] = result)
      )
      setTimeout(() => {
        this.loading = false
        this.locations[this.index] = location
        this.showLocation = true
      }, 3000)
    })
  },
  methods: {
    proceed() {
      this.showLocation = false
      this.index += 1

      if (this.index > 1) {
        scheduleTripStore.setOrigin(this.locations[0])
        scheduleTripStore.setDestination(this.locations[1])
        this.model = false
        this.index = 0
        EventBus.$emit('open:dialog')
      }
    },
  },
})
</script>
