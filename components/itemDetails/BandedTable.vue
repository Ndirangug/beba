<template>
  <div class="banded-table-container">
    <v-simple-table dense height="250">
      <tbody>
        <tr v-for="item in Object.entries(tableData)" :key="item">
          <td class="text-capitalize">{{ item[0].replaceAll('_', ' ') }}</td>
          <td>{{ item[1] }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tableData: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
})
</script>
