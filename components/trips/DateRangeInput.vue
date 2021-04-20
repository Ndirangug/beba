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
    </v-text-field>
  </div>
</template>

<script lang="ts">
import { mdiCalendar, mdiCancel, mdiClose, mdiCloseCircle } from '@mdi/js'
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
    icons: {
      calendar: mdiCalendar,
      cancel: mdiCloseCircle,
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
