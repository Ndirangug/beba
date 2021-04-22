import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import drivers from '~/store/drivers'
import vehicles from '~/store/vehicles'
import trips from '~/store/trips'
import map from '~/store/map'

let driversStore: drivers
let vehicleStore: vehicles
let tripsStore: trips
let mapStore: map

function initialiseStores(store: Store<any>): void {
  driversStore = getModule(drivers, store)
  vehicleStore = getModule(vehicles, store)
  tripsStore = getModule(trips, store)
  mapStore = getModule(map, store)
}

export { initialiseStores, driversStore, vehicleStore, tripsStore, mapStore }
