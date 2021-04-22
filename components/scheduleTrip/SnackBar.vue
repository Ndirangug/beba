<template>
  <div class="snackbar-container">
    <v-snackbar v-model="model" timeout="-1">
      <p>Right click on the map to Chooose a start location</p>
      <div v-if="showLocation">{{ locations[index] }}</div>

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

export default Vue.extend({
  data() {
    return {
      model: scheduleTripStore.snackbar,
      locations: [] as Location[],
      index: 0,
      showLocation: false,
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
      this.locations[this.index] = location
      this.showLocation = true
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
