/* eslint-disable no-console */
import { Store } from 'vuex'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  // eslint-disable-next-line require-await
  async nuxtServerInit({}, ctx) {
    // do it once more like so..
    initialiseStores(ctx.store)

    // now just import stores from utils..
  },
}
