<template>
  <v-row class="title-row pr-8 pt-6">
    <v-col cols="1">
      <v-btn icon @click="back">
        <v-icon>{{ icons.back }}</v-icon>
      </v-btn>
    </v-col>
    <v-col class="pl-8" cols="10">
      <p class="text-capitalize text-h6 mb-1 font-weight-bold">{{ title }}</p>
      <slot name="subtitle">
        <p class="text-uppercase text-body-2 pl-n1">{{ subtitle }}</p>
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
  methods: {
    back() {
      this.$router.back()
    },
  },
})
</script>
