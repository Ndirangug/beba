/* eslint-disable no-console */
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Driver, Location, Vehicle } from '~/protos/service_pb'
import { driversStore, vehicleStore } from '~/utils/store-accessor'

@Module({ name: 'scheduleTrip', stateFactory: true, namespaced: true })
export default class ScheduleTrip extends VuexModule {
  selectedOrigin: Location = new Location()
  selectedDestination: Location = new Location()
  dialog: boolean = false
  snackbar: boolean = false
  driver: Driver = new Driver() // placeholder value
  vehicle: Vehicle = new Vehicle() // placeholder value

  @Mutation
  setOrigin(location: Location) {
    this.selectedOrigin = location
  }

  @Mutation
  setDestination(location: Location) {
    this.selectedDestination = location
  }

  @Mutation
  updateDialog(value: boolean) {
    this.dialog = value
  }

  @Mutation
  updateSnackbar(value: boolean) {
    this.snackbar = value
  }

  @Mutation
  updateDriver(value: Driver) {
    this.driver = value
  }

  @Mutation
  updateVehicle(value: Vehicle) {
    this.vehicle = value
  }

  get getDriver() {
    console.log(this.driver)

    return this.driver == new Driver()
      ? driversStore.allDrivers[0]
      : this.driver
  }

  get getVehicle() {
    console.log(this.vehicle)

    return this.vehicle == new Vehicle()
      ? vehicleStore.allVehicles[0]
      : this.vehicle
  }
}
