<template>
  <v-row class="title-row pr-8 pt-6">
    <v-col cols="1">
      <v-btn icon @click="back">
        <v-icon>{{ icons.back }}</v-icon>
      </v-btn>
    </v-col>
    <v-col class="pl-8" cols="10">
      <p class="text-capitalize text-h6 mb-1 font-weight-bold">{{ title }}</p>
      <slot name="subtitle">
        <p class="text-uppercase text-body-2 pl-n1">{{ subtitle }}</p>
      </slot>
    </v-col>
    <v-col cols="1">
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" icon v-on="on">
            <v-icon>{{ icons.menu }}</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="createNew">
            <v-list-item-title class="text-capitalize">
              New {{ item }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item @click="deleteCurrent">
            <v-list-item-title class="text-capitalize">
              Delete {{ item }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiDotsVertical } from '@mdi/js'
import Vue from 'vue'
import { RecordId } from '~/protos/service_pb'
import { driversStore, vehicleStore } from '~/store'
import { ApiCallStatus, deleteDriver, deleteVehicle } from '~/utils/api-client'
import { EventBus } from '~/utils/event-bus'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      icons: {
        back: mdiChevronLeft,
        menu: mdiDotsVertical,
      },
    }
  },

  computed: {
    item(): string {
      return this.$route.path.toLowerCase().includes('drivers')
        ? 'driver'
        : 'vehicle'
    },
  },
  methods: {
    back() {
      this.$router.back()
    },
    createNew() {
      EventBus.$emit(`new-${this.item}`)
    },
    deleteCurrent() {
      const recordId = new RecordId()
      recordId.setId(parseInt(this.$route.params.id))

      if (this.item === 'driver') {
        deleteDriver(!process.browser, recordId, this.onEndApiCall)
      } else {
        deleteVehicle(!process.browser, recordId, this.onEndApiCall)
      }
    },
    onEndApiCall(status: ApiCallStatus) {
      if (status === ApiCallStatus.SUCCESS) {
        if (this.item === 'driver') {
          setTimeout(() => {
            this.$router.back()
            driversStore.deletedriver(parseInt(this.$route.params.id))
          }, 2000)
        } else {
          setTimeout(() => {
            this.$router.back()
            vehicleStore.deleteVehicle(parseInt(this.$route.params.id))
          }, 2000)
        }
      }

      const message =
        status === ApiCallStatus.SUCCESS
          ? `${this.item} Deleted Successfully`
          : 'Delete Failed'

      EventBus.$emit('open-status-dialog', status, message)
    },
  },
})
</script>
