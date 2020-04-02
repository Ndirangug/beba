<template>
  <div id="all-vehicles-container">
    <AllList search-hint="Search Registration number" />
    <new-vehicle-dialog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NewVehicleDialog from '@/components/vehicles/NewVehicleDialog.vue'

export default Vue.extend({
  components: { NewVehicleDialog },
})
</script>
