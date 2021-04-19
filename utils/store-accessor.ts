import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import drivers from '~/store/drivers'
import vehicles from '~/store/vehicles'
import trips from '~/store/trips'

let driversStore: drivers
let vehicleStore: vehicles
let tripsStore: trips

function initialiseStores(store: Store<any>): void {
  driversStore = getModule(drivers, store)
  vehicleStore = getModule(vehicles, store)
  tripsStore = getModule(trips, store)
}

export { initialiseStores, driversStore, vehicleStore, tripsStore }
