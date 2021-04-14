import { Status } from 'grpc-web'
import { BebaBackendClient } from '../protos/ServiceServiceClientPb'
import { Driver, DriverRequest } from '~/protos/service_pb'

const client = new BebaBackendClient('http://localhost:50050')

export const testGrpcWeb = () => {
  /* eslint-disable no-console */

  const request: DriverRequest = new DriverRequest()
  request.setIdnumber(1)
  request.setSearchquery('Geor')

  // client.getDriver(request, {}, (err: Error, response: Driver) => {
  //   if (err != null) {
  //     console.error(err)
  //   } else {
  //     console.log(response.getFirstname())
  //   }
  // })

  const stream = client.getDrivers(request, {})

  stream.on('data', function (response: Driver) {
    console.log(`${response.getFirstname()} ${response.getLastname()}`)
    // console.log(response.getFirstname)
  })

  stream.on('status', function (status: Status) {
    console.log(status.code)
    console.log(status.details)
    console.log(status.metadata)
  })
  stream.on('end', function (end: any) {
    // stream end signal
    console.log(end)
  })
}

export const fetchDrivers = (): Driver[] => {
  let drivers: Driver[]

  const request: DriverRequest = new DriverRequest()
  request.setIdnumber(1)
  request.setSearchquery('')

  const stream = client.getDrivers(request, {})
  stream.on('data', (response: Driver) => {
    drivers.push(response)
  })

  stream.on('end', function (end: any) {
    // stream end signal
    return drivers
  })
}
