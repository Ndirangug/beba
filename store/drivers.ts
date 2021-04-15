/* eslint-disable no-console */
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Driver } from '~/protos/service_pb'
import { driversStore } from '~/utils/store-accessor'

@Module({ name: 'drivers', stateFactory: true, namespaced: true })
export default class Drivers extends VuexModule {
  inTransit: Driver[] = []
  allDrivers: Driver[] = []

  public get driversInTransit(): Driver[] {
    return this.inTransit
  }

  @Mutation
  updateDrivers(drivers: Driver[]) {
    console.log('in store driver')
    this.allDrivers = drivers
  }
}
