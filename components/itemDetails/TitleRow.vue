<template>
  <v-row class="title-row pr-8 pt-6">
    <v-col cols="1">
      <v-btn icon>
        <v-icon>{{ icons.back }}</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="10">
      <p class="text-capitlize">{{ title }}</p>
      <slot name="subtitle">
        <p>{{ subtitle }}</p>
      </slot>
    </v-col>
    <v-col cols="1">
      <v-btn icon>
        <v-icon>{{ icons.menu }}</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiDotsVertical } from '@mdi/js'
import Vue from 'vue'
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
})
</script>
