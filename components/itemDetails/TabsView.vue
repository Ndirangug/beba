<template>
  <div class="tabs-container px-6 py-8">
    <v-tabs
      v-model="tab"
      fixed-tabs
      background-color="transparent"
      color="primry"
      centered
      class="pl-n2"
      show-arrows
      :next-icon="icons.next"
      :prev-icon="icons.prev"
    >
      <v-tab v-for="item in items" :key="item">
        <span class="text-subtitle-2">{{ item }}</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="items[0]">
        <banded-table :table-data="tableData" />
      </v-tab-item>

      <v-tab-item :key="items[1]">
        <h1>tab 2</h1>
      </v-tab-item>

      <v-tab-item :key="items[2]">
        <h1>tab 3</h1>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import Vue from 'vue'
import BandedTable from './BandedTable.vue'
export default Vue.extend({
  components: { BandedTable },
  props: {
    items: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    tableData: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      tab: null,
      icons: {
        prev: mdiChevronLeft,
        next: mdiChevronRight,
      },
    }
  },
})
</script>
