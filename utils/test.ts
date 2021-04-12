import { Status } from 'grpc-web'
import { Driver, DriverRequest } from '~/protos/service_pb'

export const testGrpcWeb = () => {
  /* eslint-disable no-console */
  const { DriverRequest } = require('../protos/service_pb')

  const { BebaBackendClient } = require('../protos/ServiceServiceClientPb')

  const client = new BebaBackendClient('http://localhost:50050')

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
