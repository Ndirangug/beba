<template>
  <v-btn color="primary" @click="prepareScheduleTrip">SCHEDULE TRIP</v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import { scheduleTripStore } from '~/store'
import { EventBus } from '~/utils/event-bus'
export default Vue.extend({
  methods: {
    prepareScheduleTrip() {
      console.log('prep...')
      scheduleTripStore.updateSnackbar(true)
      EventBus.$emit('open:snackbar')
      console.log('send message')
    },
  },
})
</script>
