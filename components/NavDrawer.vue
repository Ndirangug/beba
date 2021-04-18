<template>
  <v-navigation-drawer
    id="navDrawer"
    v-model="drawer"
    height="100%"
    app
    mini-variant-width="70"
    mini-variant
    permanent
    color="primary"
  >
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" class="py-3" link>
        <v-list-item-icon>
          <v-btn color="lightText" icon :to="item.to">
            <v-icon size="40">{{ item.icon }}</v-icon>
          </v-btn>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template #append>
      <v-btn class="mx-4 mb-6" icon @click="logOut">
        <v-avatar>
          <v-img class="" width="40" src="https://i.pravatar.cc/150?img=2"
        /></v-avatar>
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
// eslint-disable no-console
import Vue from 'vue'
import { mdiSteering, mdiHomeOutline, mdiTruckOutline } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: mdiHomeOutline, to: '/' },
        { title: 'Drivers', icon: mdiSteering, to: '/drivers' },
        { title: 'Vehicles', icon: mdiTruckOutline, to: '/vehicles' },
      ],
    }
  },

  methods: {
    logOut() {
      // TODO IMPLEMENT THIS
      // eslint-disable-next-line no-console
      console.log('logging out')
    },
  },
})
</script>
