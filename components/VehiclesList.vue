<template>
  <v-container class="the-list">
    <v-virtual-scroll
      :bench="4"
      :items="vehicles"
      height="80%"
      item-height="64"
    >
      <template #default="{ item }">
        <v-list-item :key="item.vehicleId">
          <v-list-item-avatar>
            <img eager :src="item.photo" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-capitalize"
              >{{ item.getBrand() }} {{ item.getModel() }}
              {{ item.getModelyear() }}</v-list-item-title
            >

            <v-list-item-subtitle class="text-uppercase">
              {{ item.getRegistrationnumber() }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon>{{ icons.chevronRight }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'
import { Vehicle } from '~/protos/service_pb'
import { vehicleStore } from '~/store'

export default Vue.extend({
  data() {
    return {
      icons: {
        chevronRight: mdiChevronRight,
      },
    }
  },
  computed: {
    vehicles(): Vehicle[] {
      // vehicleStore.allVehicles[0].getMo
      return vehicleStore.allVehicles
    },
  },
})
</script>
