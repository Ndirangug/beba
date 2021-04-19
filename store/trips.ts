/* eslint-disable no-console */
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Trip } from '~/protos/service_pb'

@Module({ name: 'trips', stateFactory: true, namespaced: true })
export default class Trips extends VuexModule {
  allTrips: Trip[] = []

  @Mutation
  pushTrip(trip: Trip) {
    this.allTrips.push(trip)
  }

  @Mutation
  updateTrips(trips: Trip[]) {
    console.log('in store trips')
    this.allTrips = trips
  }
}
