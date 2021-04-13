import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import drivers from '~/store/drivers'

let driversStore: drivers

function initialiseStores(store: Store<any>): void {
  driversStore = getModule(drivers, store)
}

export { initialiseStores, driversStore  }