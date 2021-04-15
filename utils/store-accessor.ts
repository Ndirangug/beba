import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import drivers from '~/store/drivers'
import vehicles from '~/store/vehicles'

let driversStore: drivers
let vehicleStore: vehicles

function initialiseStores(store: Store<any>): void {
  driversStore = getModule(drivers, store)
  vehicleStore = getModule(vehicles, store)
}

export { initialiseStores, driversStore, vehicleStore }