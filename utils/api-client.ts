/* eslint-disable no-console */
import { grpc } from '@improbable-eng/grpc-web'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'
import {
  Driver,
  DriverRequest,
  Trip,
  TripsRequest,
  Vehicle,
  VehicleRequest,
} from '~/protos/service_pb'
import { BebaBackend } from '~/protos/service_pb_service'
import { driversStore, tripsStore, vehicleStore } from '~/store'

const host = 'http://localhost:8080'
function transport(server: boolean) {
  return server ? NodeHttpTransport() : grpc.CrossBrowserHttpTransport({})
}

export const fetchDrivers = (isServer: boolean) => {
  const request = new DriverRequest()
  request.setIdnumber(1)
  request.setSearchquery('')

  grpc.invoke(BebaBackend.GetDrivers, {
    host,
    transport: transport(isServer),
    request,
    onMessage: (message: Driver) => {
      driversStore.pushDriver(message)
    },
    onEnd: (
      code: grpc.Code,
      msg: string | undefined,
      trailers: grpc.Metadata
    ) => {
      if (code === grpc.Code.OK) {
        console.log('all ok')
      } else {
        console.log('hit an error', code, msg, trailers)
      }
    },
  })
}

export const fetchVehicles = (isServer: boolean) => {
  const request = new VehicleRequest()

  grpc.invoke(BebaBackend.GetVehicles, {
    host,
    transport: transport(isServer),
    request,
    onMessage: (message: Vehicle) => {
      vehicleStore.pushVehicle(message)
    },
    onEnd: (
      code: grpc.Code,
      msg: string | undefined,
      trailers: grpc.Metadata
    ) => {
      if (code === grpc.Code.OK) {
        console.log('all ok')
      } else {
        console.log('hit an error', code, msg, trailers)
      }
    },
  })
}

export const fetchTrips = (isServer: boolean) => {
  const request = new TripsRequest()

  grpc.invoke(BebaBackend.GetTrips, {
    host,
    transport: transport(isServer),
    request,
    onMessage: (message: Trip) => {
      tripsStore.pushTrip(message)
    },
    onEnd: (
      code: grpc.Code,
      msg: string | undefined,
      trailers: grpc.Metadata
    ) => {
      if (code === grpc.Code.OK) {
        console.log('all ok')
      } else {
        console.log('hit an error', code, msg, trailers)
      }
    },
  })
}
