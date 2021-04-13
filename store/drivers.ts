import { VuexModule, Module } from 'vuex-module-decorators'
import { Driver } from '~/protos/service_pb'

@Module({ name: 'Drivers' })
export default class Drivers extends VuexModule {
  inTransit: Driver[] = []

  public get driversInTransit(): Driver[] {
    return this.inTransit
  }
}
