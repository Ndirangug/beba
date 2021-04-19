/* eslint-disable no-console */
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Vehicle } from '~/protos/service_pb'

@Module({ name: 'vehicles', stateFactory: true, namespaced: true })
export default class Vehicles extends VuexModule {
  allVehicles: Vehicle[] = []

  public get vehiclesInTransit(): Vehicle[] {
    return this.allVehicles
  }

  @Mutation
  pushVehicle(vehicle: Vehicle) {
    this.allVehicles.push(vehicle)
  }

  @Mutation
  updateVehicles(vehicles: Vehicle[]) {
    console.log('in store vehicle')
    this.allVehicles = vehicles
  }

  get filteredVehicles() {
    return (searchQuery: string) => {
      return this.allVehicles.filter(
        (vehicle: Vehicle, _) =>
          vehicle
            .getRegistrationnumber()
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          vehicle
            .getModel()
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          vehicle.getBrand().toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
  }

  get vehicle() {
    return (id: number) => {
      return this.allVehicles.find(
        (vehicle: Vehicle, _) => vehicle.getVehicleid() === id
      ) as Vehicle
    }
  }
}
