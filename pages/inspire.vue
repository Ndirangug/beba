<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { testGrpcWeb } from '~/utils/test'
import { driversStore } from '~/store'
import { Driver } from '~/protos/service_pb'

export default Vue.extend({
  computed: {
    // sample for vuex
    drivers(): Driver[] {
      return driversStore.driversInTransit
    },
  },
  mounted() {
    testGrpcWeb()
  },
})
</script>
