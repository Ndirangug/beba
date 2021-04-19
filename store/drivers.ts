/* eslint-disable no-console */
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Driver } from '~/protos/service_pb'

@Module({ name: 'drivers', stateFactory: true, namespaced: true })
export default class Drivers extends VuexModule {
  inTransit: Driver[] = []
  allDrivers: Driver[] = []

  public get driversInTransit(): Driver[] {
    return this.inTransit
  }

  @Mutation
  pushDriver(driver: Driver) {
    this.allDrivers.push(driver)
  }

  @Mutation
  updateDrivers(drivers: Driver[]) {
    console.log('in store driver')
    this.allDrivers = drivers
  }

  get filterWithName() {
    return (name: string) => {
      return this.allDrivers.filter(
        (driver: Driver, _) =>
          driver.getFirstname().toLowerCase().includes(name.toLowerCase()) ||
          driver.getLastname().toLowerCase().includes(name.toLowerCase())
      )
    }
  }

  get driver() {
    return (id: number) => {
      return this.allDrivers.find(
        (driver: Driver, _) => driver.getIdnumber() === id
      ) as Driver
    }
  }
}
