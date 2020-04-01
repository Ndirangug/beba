<template>
  <v-dialog
    v-model="model"
    persistent
    transition="dialog-top-transition"
    max-width="350"
  >
    <v-card class="px-6 pt-10 pb-4" elevation="10">
      <v-card-text class="d-flex flex-column justify-center align-center">
        <div class="icon mb-6">
          <v-icon x-large :color="iconColor">{{ icon }}</v-icon>
        </div>

        <div class="message">
          <p class="text-h6 black--text">{{ message }}</p>
        </div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text color="primary" @click="model = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { mdiCheckCircle, mdiClock, mdiEmoticonConfused } from '@mdi/js'
import Vue from 'vue'
import { ApiCallStatus } from '~/utils/api-client'
import { EventBus } from '~/utils/event-bus'
export default Vue.extend({
  data() {
    return {
      model: false,
      status: ApiCallStatus.WAITING,
    }
  },

  computed: {
    message(): string {
      let message = ''

      switch (this.status) {
        case ApiCallStatus.SUCCESS:
          message = 'Transaction Successful'
          break
        case ApiCallStatus.FAILED:
          message = 'Transaction Failed'
          break
        default:
          message = 'Waiting...'
          break
      }

      return message
      // return this.status === ApiCallStatus.SUCCESS ? 'SUCCESS' : 'FAILED'
    },
    icon(): string {
      let icon: string

      switch (this.status) {
        case ApiCallStatus.SUCCESS:
          icon = mdiCheckCircle
          break
        case ApiCallStatus.FAILED:
          icon = mdiEmoticonConfused
          break
        default:
          icon = mdiClock
          break
      }

      return icon
    },
    iconColor(): string {
      let color: string

      switch (this.status) {
        case ApiCallStatus.SUCCESS:
          color = 'green'
          break
        case ApiCallStatus.FAILED:
          color = 'warning'
          break
        default:
          color = 'primary'
          break
      }

      return color
    },
  },

  created() {
    EventBus.$on('schedule-complete-dialog', (status: ApiCallStatus) => {
      this.model = true
      this.status = status
    })
  },
})
</script>
