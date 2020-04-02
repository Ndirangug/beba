<template>
  <v-dialog
    id="new-driver-vehicle"
    v-model="model"
    persistent
    transition="dialog-top-transition"
    max-width="350"
  >
    <v-card class="px-6 pt-10 pb-4" elevation="10">
      <v-card-title class="d-flex flex-column justify-center align-center">
        <h6 class="text-body-1">New Driver</h6>
      </v-card-title>

      <v-card-text class="d-flex flex-column justify-center align-center">
        <div class="form">
          <v-text-field
            v-model="form.firstName"
            label="First Name"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.lastName"
            label="Last Name"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.email"
            label="Email"
            outlined
            type="email"
          ></v-text-field>

          <v-text-field
            v-model="form.phone"
            label="Phone"
            outlined
            type="tel"
          ></v-text-field>

          <v-select
            v-model="form.sex"
            label="Sex"
            outlined
            :items="['Male', 'Female']"
          ></v-select>

          <v-menu
            v-model="dateOfBirthMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="form.dateOfBirth"
                label="Date of Birth"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.dateOfBirth"
              @input="dateOfBirthMenu = false"
            ></v-date-picker>
          </v-menu>

          <v-menu
            v-model="dateEmployedMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="form.dateEmployed"
                label="Date Employed"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="form.dateEmployed"
              @input="dateEmployedMenu = false"
            ></v-date-picker>
          </v-menu>

          <v-text-field
            v-model="form.comment"
            label="Comment"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.evaluationReport"
            label="Evaluation Report"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.driversLicence"
            label="Drivers Licence"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="form.photo"
            label="Photo"
            outlined
          ></v-text-field>
        </div>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text color="warning" @click="model = false">CANCEL</v-btn>
        <v-btn text color="primary" @click="newDriver">ADD</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { Driver, Vehicle } from '~/protos/service_pb'
import { driversStore } from '~/store'
import { ApiCallStatus, newDriver } from '~/utils/api-client'
import { EventBus } from '~/utils/event-bus'

export default Vue.extend({
  data() {
    return {
      model: false,
      dateEmployedMenu: false,
      dateOfBirthMenu: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        sex: '',
        dateOfBirth: '',
        dateEmployed: '',
        comment: '',
        evaluationReport: '',
        driversLicence: '',
        photo: '',
      },
    }
  },

  computed: {
    driver(): Driver {
      const driver = new Driver()
      driver.setFirstname(this.form.firstName)
      driver.setLastname(this.form.lastName)
      driver.setEmail(this.form.email)
      driver.setPhone(this.form.phone)
      driver.setSex(this.form.sex)
      driver.setDateofbirth(Date.parse(this.form.dateOfBirth) / 1000)
      driver.setDateemployed(Date.parse(this.form.dateEmployed) / 100)
      driver.setComment(this.form.comment)
      driver.setEvaluationreport(this.form.evaluationReport)
      driver.setDriverslicence(this.form.driversLicence)
      driver.setPhoto(this.form.photo)

      return driver
    },
  },

  created() {
    EventBus.$on('new-driver', () => {
      this.model = true
    })
  },
  methods: {
    newDriver() {
      console.log('new driver')

      newDriver(!process.browser, this.driver, this.onEndApiCall)
      this.model = false
    },
    onEndApiCall(status: ApiCallStatus) {
      if (status === ApiCallStatus.SUCCESS) {
        driversStore.pushDriver(this.driver)
      }
      const message =
        status === ApiCallStatus.SUCCESS
          ? `Driver Created Successfully`
          : 'Failed'
      EventBus.$emit('open-status-dialog', status, message)
    },
  },
})
</script>
