/* eslint-disable no-console */
import { grpc } from '@improbable-eng/grpc-web'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'
import { UnaryOutput } from '@improbable-eng/grpc-web/dist/typings/unary'
import {
  Driver,
  DriverRequest,
  Trip,
  TripsRequest,
  Vehicle,
  VehicleRequest,
  WriteRecordResponse,
} from '~/protos/service_pb'
import { BebaBackend } from '~/protos/service_pb_service'
import { driversStore, tripsStore, vehicleStore } from '~/store'

export enum ApiCallStatus {
  WAITING = 'WAITING',
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS',
}

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

export const scheduleTrip = (
  isServer: boolean,
  trip: Trip,
  onEnd: (status: ApiCallStatus) => void
) => {
  console.log('clling api')

  return grpc.unary(BebaBackend.NewTrip, {
    host,
    request: trip,
    transport: transport(isServer),
    onEnd: (output: UnaryOutput<WriteRecordResponse>) => {
      if (output.status === grpc.Code.OK) {
        console.log('all ok')
        onEnd(ApiCallStatus.SUCCESS)
      } else {
        console.log(
          'hit an error',
          output.status,
          output.statusMessage,
          output.message,
          output.trailers
        )
        onEnd(ApiCallStatus.FAILED)
      }
    },
  })
  // grpc.invoke(BebaBackend.NewTrip, {
  //   host,
  //   transport: transport(isServer),
  //   trip,
  //   onMessage: (res: ProtobufMessage) => {},
  //   onEnd: (
  //     code: grpc.Code,
  //     msg: string | undefined,
  //     trailers: grpc.Metadata
  //   ) => {
  //     if (code === grpc.Code.OK) {
  //       console.log('all ok')
  //     } else {
  //       console.log('hit an error', code, msg, trailers)
  //     }
  //   },
  // })
}
