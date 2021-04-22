/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import drivers from '~/store/drivers'
import vehicles from '~/store/vehicles'
import trips from '~/store/trips'
import scheduleTrip from '~/store/scheduleTrip'

let driversStore: drivers
let vehicleStore: vehicles
let tripsStore: trips
let scheduleTripStore: scheduleTrip

function initialiseStores(store: Store<any>): void {
  driversStore = getModule(drivers, store)
  vehicleStore = getModule(vehicles, store)
  tripsStore = getModule(trips, store)
  scheduleTripStore = getModule(scheduleTrip, store)
}

export {
  initialiseStores,
  driversStore,
  vehicleStore,
  tripsStore,
  scheduleTripStore,
}
