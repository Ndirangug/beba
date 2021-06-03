<template>
  <div class="px-6">
    <v-date-picker
      v-show="showPicker"
      v-model="model"
      elevation="10"
      class="date-picker"
      range
      :style="isAllTrips ? { top: '5px', left: '80px' } : {}"
    ></v-date-picker>

    <v-text-field
      v-model="dateRangeText"
      outlined
      label="Time range"
      readonly
      @click="showPicker = !showPicker"
    >
      <template #prepend-inner>
        <v-icon>{{ icons.calendar }}</v-icon>
      </template>

      <template #append>
        <v-btn icon>
          <v-icon @click="model = ['', '']">{{ icons.cancel }}</v-icon>
        </v-btn>
      </template>

      <template #append-outer>
        <v-menu
          v-model="datePurchasedMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-btn icon>
              <v-icon v-bind="attrs" v-on="on">{{ icons.menu }}</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item to="/report?today=1">
              <v-list-item-title class="text-capitalize">
                Today's Report
              </v-list-item-title>
            </v-list-item>

            <v-list-item to="/report">
              <v-list-item-title class="text-capitalize">
                All Time Report
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-text-field>
  </div>
</template>

<script lang="ts">
import {
  mdiCalendar,
  mdiCancel,
  mdiClose,
  mdiCloseCircle,
  mdiDotsVertical,
  mdiMenu,
} from '@mdi/js'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    dates: {
      type: Object as PropType<Array<string>>,
      required: true,
      default() {
        return ['', '']
      },
    },
  },
  data: () => ({
    showPicker: false,
    model: ['', ''],
    menu: false,
    datePurchasedMenu: false,
    icons: {
      calendar: mdiCalendar,
      cancel: mdiCloseCircle,
      menu: mdiDotsVertical,
    },
  }),
  computed: {
    dateRangeText() {
      return this.model[0] === '' ? '' : this.dates.join('  to  ')
    },
    isAllTrips(): Boolean {
      return this.$route.path.endsWith('trips')
    },
  },
  watch: {
    model(dates: string[]) {
      this.$emit('update:dates', dates)
    },
  },
})
</script>

<style lang="scss" scoped>
.date-picker {
  position: absolute;
  z-index: 3;
}
</style>
