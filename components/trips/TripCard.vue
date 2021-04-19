<template>
  <v-container class="trip-card-container">
    <div class="d-flex align-stretch">
      <div
        class="dark-band"
        :style="{ 'background-color': colors.darker }"
      ></div>

      <div class="content">
        <div :style="{ 'background-color': colors.light }">
          <h1>Details</h1>
        </div>
        <div :style="{ 'background-color': colors.dark }">
          <h4>Action</h4>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
// @ts-ignore
import colors from 'vuetify/lib/util/colors'
import { Trip } from '~/protos/service_pb'

export default Vue.extend({
  props: {
    trip: {
      type: Object,
      required: true,
      default() {
        return null
      },
    } as PropOptions<Trip>,
  },
  computed: {
    colors(): { light: string; dark: string; darker: string } {
      return {
        light: colors.purple.lighten2,
        dark: colors.purple.lighten1,
        darker: colors.purple.darken3,
      }
    },
  },
  mounted() {
    // this.trip.
  },
})
</script>

<style lang="scss" scoped>
.dark-band {
  width: 0.3em;
}
</style>
