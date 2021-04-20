<template>
  <v-container class="trip-card-container" @mouseenter="fetchAddresses">
    <div class="d-flex align-stretch">
      <div
        class="dark-band"
        :style="{ 'background-color': colors.darker }"
      ></div>

      <div class="content">
        <v-btn color="black" icon x-small class="btn-options"
          ><v-icon>{{ icons.menu }}</v-icon></v-btn
        >
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
                new Date(trip.getActualdeparturetime() * 1000)
              )
            }}
          </p>

          <p v-else class="mb-1 text-body-2">
            <span class="font-weight-medium">Scheduled Departure:</span>
            {{
              new Intl.DateTimeFormat({ dateStyle: 'long' }).format(
                new Date(trip.getScheduleddeparturetime() * 1000)
              )
            }}
          </p>

          <p v-if="trip.getStatus() == 'complete'" class="mb-4 text-body-2">
            <span class="font-weight-medium"> Arrival:</span>
            {{
              new Intl.DateTimeFormat({ dateStyle: 'long' }).format(
                new Date(trip.getActualarrivaltime() * 1000)
              )
            }}
          </p>

          <p v-else class="mb-4 text-body-2">
            <span class="font-weight-medium">Expected Arrival:</span>
            {{
              new Intl.DateTimeFormat({ dateStyle: 'long' }).format(
                new Date(trip.getScheduledarrivaltime() * 1000)
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
            text
            :to="`/drivers/${trip.getDriver().getIdnumber()}`"
          >
            <v-icon> {{ icons.driver }}</v-icon>
            <span>{{ driverName }}</span>
          </v-btn>

          <v-btn
            color="white"
            text
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
import { Trip } from '~/protos/service_pb'

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
    fetchAddresses() {
      // @ts-ignore
      const geocoder = new this.$google.maps.Geocoder()

      if (this.departureAddress === '') {
        geocoder.geocode(
          {
            location: {
              lat: this.trip.getOrigin()?.getLat(),
              lng: this.trip.getOrigin()?.getLat(),
            },
          },
          (results, status) => {
            if (status === 'OK') {
              this.departureAddress = results[0].formatted_address
            } else {
              // eslint-disable-next-line no-console
              console.log(
                'Geocode was not successful for the following reason: ' + status
              )
              // setTimeout(() => {
              //   this.fetchAddresses()
              // }, 1000 * this.multiplier)
            }
          }
        )
      }

      if (this.arrivalAddress === '') {
        geocoder.geocode(
          {
            location: {
              lat: this.trip.getDestination()?.getLat(),
              lng: this.trip.getDestination()?.getLat(),
            },
          },
          (results, status) => {
            if (status === 'OK') {
              this.arrivalAddress = results[0].formatted_address
            } else {
              // eslint-disable-next-line no-console
              console.log(
                'Geocode was not successful for the following reason: ' + status
              )
            }
          }
        )
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
