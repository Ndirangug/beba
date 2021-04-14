import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Driver } from '~/protos/service_pb'

@Module({ name: 'Drivers', stateFactory: true, namespaced: true })
export default class Drivers extends VuexModule {
  inTransit: Driver[] = []
  allDrivers: Driver[] = []

  public get driversInTransit(): Driver[] {
    return this.inTransit
  }

  @Mutation
  updateDrivers(drivers: Driver[]) {
    this.allDrivers = drivers
  }
}
