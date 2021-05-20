<template>
  <v-container class="trip-card-container" @mouseenter="fetchAddresses">
    <div class="d-flex align-stretch">
      <div
        class="dark-band"
        :style="{ 'background-color': colors.darker }"
      ></div>

      <div class="content">
        <v-menu offset-y :disabled="trip.getStatus() == 'cancelled'">
          <template #activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              color="black"
              icon
              x-small
              class="btn-options"
              v-on="on"
              ><v-icon>{{ icons.menu }}</v-icon></v-btn
            >
          </template>

          <v-list>
            <v-list-item @click="cancelTrip">
              <v-list-item-title class="text-capitalize">
                Cancel Trip
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <div class="details pa-4" :style="{ 'background-color': colors.light }">
          <p
            v-if="
              trip.getStatus() == 'ongoing' || trip.getStatus() == 'complete'
            "
            class="mb-1 text-body-2"
          >
            <span class="font-weight-medium"> Departure:</span>
            {{
              new Intl.DateTimeFormat({ dateStyle: 'long' }).format(
                new Date(trip.getActualdeparturetime().array[0] * 1000)
              )
            }}
          </p>

          <p v-else class="mb-1 text-body-2">
            <span class="font-weight-medium">Scheduled Departure:</span>
            {{
              new Intl.DateTimeFormat({ dateStyle: 'long' }).format(
                new Date(trip.getScheduleddeparturetime().array[0] * 1000)
              )
            }}
          </p>

          <p v-if="trip.getStatus() == 'complete'" class="mb-4 text-body-2">
            <span class="font-weight-medium"> Arrival:</span>
            {{
              new Intl.DateTimeFormat({ dateStyle: 'long' }).format(
                new Date(trip.getActualarrivaltime().array[0] * 1000)
              )
            }}
          </p>

          <p v-else class="mb-4 text-body-2">
            <span class="font-weight-medium">Expected Arrival:</span>
            {{
              new Intl.DateTimeFormat({ dateStyle: 'long' }).format(
                new Date(trip.getScheduledarrivaltime().array[0] * 1000)
              )
            }}
          </p>
          <p class="mb-1 text-body-2">
            <span v-if="departureAddress != ''" class="font-weight-medium">
              {{ departureAddress }}
            </span>
            <v-progress-circular
              v-else
              indeterminate
              :color="colors.darker"
              size="12"
              width="2"
            />
            to
          </p>
          <p class="mb-3 text-body-2 font-weight-medium">
            <span v-if="departureAddress != ''"> {{ arrivalAddress }}</span>
            <v-progress-circular
              v-else
              indeterminate
              :color="colors.darker"
              size="12"
              width="2"
            />
          </p>
          <p class="text-body-2 mb-0">
            Status: {{ trip.getStatus() }}
            <v-icon size="10" class="ml-1" :color="statusColor">
              {{ icons.circle }}
            </v-icon>
          </p>
        </div>

        <div
          class="actions d-flex justify-space-between py-2"
          :style="{ 'background-color': colors.dark }"
        >
          <v-btn
            color="white"
            class="px-2"
            text
            :to="`/drivers/${trip.getDriver().getIdnumber()}`"
          >
            <v-icon> {{ icons.driver }}</v-icon>
            <span>{{ driverName }}</span>
          </v-btn>

          <v-btn
            color="white"
            text
            class="px-2"
            :to="`/vehicles/${trip.getVehicle().getVehicleid()}`"
          >
            <v-icon>{{ icons.truck }}</v-icon>
            <span>{{ trip.getVehicle().getRegistrationnumber() }}</span>
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import {
  mdiCircle,
  mdiDotsVertical,
  mdiSteering,
  mdiTruckOutline,
} from '@mdi/js'
import Vue, { PropOptions } from 'vue'
// @ts-ignore
import colors from 'vuetify/lib/util/colors'
import { RecordId, Trip } from '~/protos/service_pb'
import { tripsStore } from '~/store'
import { ApiCallStatus, cancelTrip } from '~/utils/api-client'
import { EventBus } from '~/utils/event-bus'
import { LatLng, geocode } from '~/utils/geocoding'

export default Vue.extend({
  props: {
    trip: {
      type: Object,
      required: true,
      default() {
        return null
      },
    } as PropOptions<Trip>,
    color: {
      type: String,
      required: true,
      default: '',
    },
    multiplier: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      icons: {
        menu: mdiDotsVertical,
        driver: mdiSteering,
        truck: mdiTruckOutline,
        circle: mdiCircle,
      },
      departureAddress: '',
      arrivalAddress: '',
    }
  },
  computed: {
    colors(): { light: string; dark: string; darker: string } {
      // this.trip.getStatus
      return {
        light: colors[this.color].lighten3,
        dark: colors[this.color].lighten1,
        darker: colors[this.color].darken3,
      }
    },
    statusColor(): string {
      let color

      switch (this.trip.getStatus()) {
        case 'cancelled':
          color = 'red'
          break
        case 'scheduled':
          color = 'blue'
          break
        case 'ongoing':
          color = 'green'
          break
        default:
          color = ''
          break
      }

      return color
    },
    driverName(): string {
      return `${this.trip
        .getDriver()
        ?.getFirstname()
        .substring(0, 1)}. ${this.trip.getDriver()?.getLastname()}`
    },
  },
  mounted() {
    setTimeout(() => {
      this.fetchAddresses()
    }, 10000 * this.multiplier)
  },

  methods: {
    cancelTrip() {
      const recordId = new RecordId()
      recordId.setId(this.trip.getTripid())

      cancelTrip(!process.browser, recordId, this.onEndApiCall)
    },
    onEndApiCall(status: ApiCallStatus) {
      if (status === ApiCallStatus.SUCCESS) {
        tripsStore.cancelTrip(this.trip.getTripid())
        this.$forceUpdate()
        this.$parent.$parent.$forceUpdate()
      }

      const message =
        status === ApiCallStatus.SUCCESS
          ? `Trip Cancelled Successfully`
          : 'Failed'
      EventBus.$emit('open-status-dialog', status, message)
    },
    fetchAddresses() {
      // @ts-ignore
      const geocoder = new this.$google.maps.Geocoder()

      if (this.departureAddress === '') {
        const depatureLocation: LatLng = {
          lat: this.trip.getOrigin()?.getLat(),
          lng: this.trip.getOrigin()?.getLat(),
        }

        geocode(depatureLocation, geocoder, (result: string) => {
          this.departureAddress = result
        })
      }

      if (this.arrivalAddress === '') {
        const arrivalLocation = {
          lat: this.trip.getDestination()?.getLat(),
          lng: this.trip.getDestination()?.getLat(),
        }

        geocode(arrivalLocation, geocoder, (result: string) => {
          this.arrivalAddress = result
        })
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.dark-band {
  width: 0.3em;
}

.content {
  width: 270px;
  position: relative;

  .btn-options {
    position: absolute;
    top: 0.8em;
    right: 0.5em;
  }
}
</style>
