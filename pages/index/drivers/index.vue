<template>
  <div id="all-drivers-container">
    <AllList search-hint="Search First Name or Last Name" />
    <new-driver-dialog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NewDriverDialog from '@/components/drivers/NewDriverDialog.vue'

export default Vue.extend({
  components: { NewDriverDialog },
})
</script>
