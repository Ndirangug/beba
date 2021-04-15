/* eslint-disable no-console */
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Vehicle } from '~/protos/service_pb'
import { vehicleStore } from '~/utils/store-accessor'

@Module({ name: 'vehicles', stateFactory: true, namespaced: true })
export default class Vehicles extends VuexModule {
  allVehicles: Vehicle[] = []

  public get vehiclesInTransit(): Vehicle[] {
    return this.allVehicles
  }

  @Mutation
  updateVehicles(vehicles: Vehicle[]) {
    console.log('in store vehicle')
    this.allVehicles = vehicles
  }
}
