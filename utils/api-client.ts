/* eslint-disable no-console */
import { grpc } from '@improbable-eng/grpc-web'
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport'
import { UnaryOutput } from '@improbable-eng/grpc-web/dist/typings/unary'
import {
  Driver,
  DriverRequest,
  RecordId,
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

const host = 'https://beba-grpc-web-proxy-p2gh3d44pq-uc.a.run.app:443'
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
}

export const newVehicle = (
  isServer: boolean,
  vehicle: Vehicle,
  onEnd: (status: ApiCallStatus) => void
) => {
  console.log('clling api')

  return grpc.unary(BebaBackend.NewVehicle, {
    host,
    request: vehicle,
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
}

export const newDriver = (
  isServer: boolean,
  driver: Driver,
  onEnd: (status: ApiCallStatus) => void
) => {
  console.log('clling api')

  return grpc.unary(BebaBackend.NewDriver, {
    host,
    request: driver,
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
}

export const deleteDriver = (
  isServer: boolean,
  recordId: RecordId,
  onEnd: (status: ApiCallStatus) => void
) => {
  console.log('clling api')

  return grpc.unary(BebaBackend.RemoveDriver, {
    host,
    request: recordId,
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
}

export const deleteVehicle = (
  isServer: boolean,
  recordId: RecordId,
  onEnd: (status: ApiCallStatus) => void
) => {
  console.log('clling api')

  return grpc.unary(BebaBackend.RemoveVehicle, {
    host,
    request: recordId,
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
}

export const cancelTrip = (
  isServer: boolean,
  recordId: RecordId,
  onEnd: (status: ApiCallStatus) => void
) => {
  console.log('clling api')

  return grpc.unary(BebaBackend.CancelTrip, {
    host,
    request: recordId,
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
}
