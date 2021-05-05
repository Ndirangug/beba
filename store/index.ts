/* eslint-disable no-empty-pattern */
/* eslint-disable no-console */
import { Context } from '@nuxt/types'
import { Store } from 'vuex'
import { fetchDrivers, fetchVehicles } from '~/utils/api-client'
import { initialiseStores } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  // eslint-disable-next-line require-await
  async nuxtServerInit({}, ctx: Context) {
    // do it once more like so..
    initialiseStores(ctx.store)

    // now just import stores from utils..
    fetchVehicles(!process.browser)
    fetchDrivers(!process.browser)
  },
}
