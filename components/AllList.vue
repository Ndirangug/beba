<template>
  <v-container class="all-list-continer py-8 px-6">
    <v-row class="search-bar">
      <v-text-field
        v-model="query"
        outlined
        color="primary"
        label="Search"
        :placeholder="searchHint"
      >
        <template #append @click="search">
          <v-icon>{{ icons.search }}</v-icon>
        </template>
        <template #append-outer>
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
            </v-list>
          </v-menu>
        </template>
      </v-text-field>
    </v-row>

    <v-row class="d-flex justify-center align-center">
      <h4 class="text-capitalize ml-n12">{{ title }}</h4>
    </v-row>

    <v-row>
      <the-list />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiSearchWeb, mdiDotsVertical } from '@mdi/js'
import { EventBus } from '~/utils/event-bus'

export default Vue.extend({
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
      query: '',
    }
  },

  computed: {
    title(): string {
      return this.isVehicles ? 'all vehicles' : 'all drivers'
    },
    isVehicles(): boolean {
      return this.$route.path.endsWith('vehicles')
    },
    item(): string {
      return this.isVehicles ? 'vehicle' : 'driver'
    },
  },
  watch: {
    query(_val: string) {
      this.search()
    },
  },

  methods: {
    createNew() {
      EventBus.$emit(`new-${this.item}`)
    },
    search() {
      EventBus.$emit('filter:items', this.query)
    },
  },
})
</script>
