<template>
  <v-container class="the-list">
    <v-virtual-scroll :bench="50" :items="items" height="100%" item-height="80">
      <template #default="{ item }">
        <!-- TODO: ON CLICK ITEM SHOW ON MAP MARKER-->
        <v-list-item
          :key="vehicles ? item.getVehicleid() : item.getIdnumber()"
          class="py-2"
        >
          <v-list-item-avatar
            :tile="vehicles"
            height="56px"
            :width="vehicles ? '80px' : '56px'"
          >
            <img eager :src="item.getPhoto()" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-capitalize">
              <span v-if="vehicles">
                {{ item.getBrand() }} {{ item.getModel() }}
                {{ item.getModelyear() }}
              </span>
              <span v-else>
                {{ item.getFirstname() }} {{ item.getLastname() }}
              </span>
            </v-list-item-title>

            <v-list-item-subtitle>
              <p v-if="vehicles" class="text-uppercase">
                {{ item.getRegistrationnumber() }}
              </p>

              <p v-else class="text-capitalize">
                <v-icon size="10" :color="item.getOntrip() ? 'red' : 'green'">{{
                  icons.statusCircle
                }}</v-icon>
                <span>{{ item.getOntrip() ? 'On Trip' : 'On break' }}</span>
              </p>
            </v-list-item-subtitle>
            <v-divider />
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              icon
              width="25"
              height="25"
              :to="
                vehicles
                  ? `/vehicles/${item.getVehicleid()}`
                  : `/drivers/${item.getIdnumber()}`
              "
            >
              <v-icon size="20">{{ icons.chevronRight }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script lang="ts">
import { mdiChevronRight, mdiCircle } from '@mdi/js'
import Vue from 'vue'
import { Driver, Vehicle } from '~/protos/service_pb'
import { driversStore, vehicleStore } from '~/store'

export default Vue.extend({
  data() {
    return {
      icons: {
        chevronRight: mdiChevronRight,
        statusCircle: mdiCircle,
      },
    }
  },
  computed: {
    items(): Vehicle[] | Driver[] {
      // vehicleStore.allVehicles[0].getMo
      return this.vehicles ? vehicleStore.allVehicles : driversStore.allDrivers
    },
    vehicles(): boolean {
      return this.$route.path.endsWith('vehicles')
    },
  },
})
</script>
