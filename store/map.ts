/* eslint-disable no-console */
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Location } from '~/protos/service_pb'

@Module({ name: 'map', stateFactory: true, namespaced: true })
export default class Map extends VuexModule {
  selectedOrigin: Location = new Location()
  selectedDestination: Location = new Location()

  @Mutation
  setOrigin(location: Location) {
    this.selectedOrigin = location
  }

  @Mutation
  setDestination(location: Location) {
    this.selectedDestination = location
  }
}
