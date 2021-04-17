<template>
  <v-container class="all-list-continer py-8 px-6">
    <v-row class="search-bar">
      <v-text-field
        outlined
        color="primary"
        label="Search"
        :placeholder="searchHint"
      >
        <template #append>
          <v-icon>{{ icons.search }}</v-icon>
        </template>
        <template #append-outer>
          <v-icon>{{ icons.menu }}</v-icon>
        </template>
      </v-text-field>
    </v-row>

    <v-row>
      <vehicles-list />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiSearchWeb, mdiDotsVertical } from '@mdi/js'
import VehiclesList from './VehiclesList.vue'

export default Vue.extend({
  components: { VehiclesList },
  props: {
    searchHint: {
      type: String,
      required: true,
      default: 'search...',
    },
  },
  data() {
    return {
      icons: {
        search: mdiSearchWeb,
        menu: mdiDotsVertical,
      },
    }
  },
})
</script>
