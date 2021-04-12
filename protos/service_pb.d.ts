/* eslint-disable import/export */
/* eslint-disable camelcase */
/* eslint-disable no-redeclare */
// @ts-ignore
import * as jspb from 'google-protobuf'

// @ts-ignore
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'

export class TestHelloRequest extends jspb.Message {
  getName(): string
  setName(value: string): TestHelloRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TestHelloRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: TestHelloRequest
  ): TestHelloRequest.AsObject

  static serializeBinaryToWriter(
    message: TestHelloRequest,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): TestHelloRequest
  static deserializeBinaryFromReader(
    message: TestHelloRequest,
    reader: jspb.BinaryReader
  ): TestHelloRequest
}

export namespace TestHelloRequest {
  export type AsObject = {
    name: string
  }
}

export class TestHelloResponse extends jspb.Message {
  getResponse(): string
  setResponse(value: string): TestHelloResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TestHelloResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: TestHelloResponse
  ): TestHelloResponse.AsObject

  static serializeBinaryToWriter(
    message: TestHelloResponse,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): TestHelloResponse
  static deserializeBinaryFromReader(
    message: TestHelloResponse,
    reader: jspb.BinaryReader
  ): TestHelloResponse
}

export namespace TestHelloResponse {
  export type AsObject = {
    response: string
  }
}

export class EmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): EmptyMessage.AsObject
  static toObject(
    includeInstance: boolean,
    msg: EmptyMessage
  ): EmptyMessage.AsObject

  static serializeBinaryToWriter(
    message: EmptyMessage,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): EmptyMessage
  static deserializeBinaryFromReader(
    message: EmptyMessage,
    reader: jspb.BinaryReader
  ): EmptyMessage
}

export namespace EmptyMessage {
  export type AsObject = {}
}

export class Driver extends jspb.Message {
  getIdnumber(): number
  setIdnumber(value: number): Driver

  getFirstname(): string
  setFirstname(value: string): Driver

  getLastname(): string
  setLastname(value: string): Driver

  getEmail(): string
  setEmail(value: string): Driver

  getPhone(): string
  setPhone(value: string): Driver

  getSex(): string
  setSex(value: string): Driver

  getDateofbirth(): google_protobuf_timestamp_pb.Timestamp | undefined
  setDateofbirth(value?: google_protobuf_timestamp_pb.Timestamp): Driver
  hasDateofbirth(): boolean
  clearDateofbirth(): Driver

  getDateemployed(): google_protobuf_timestamp_pb.Timestamp | undefined
  setDateemployed(value?: google_protobuf_timestamp_pb.Timestamp): Driver
  hasDateemployed(): boolean
  clearDateemployed(): Driver

  getComment(): string
  setComment(value: string): Driver

  getEvaluationreport(): string
  setEvaluationreport(value: string): Driver

  getDriverslicence(): string
  setDriverslicence(value: string): Driver

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Driver.AsObject
  static toObject(includeInstance: boolean, msg: Driver): Driver.AsObject
  static serializeBinaryToWriter(
    message: Driver,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): Driver
  static deserializeBinaryFromReader(
    message: Driver,
    reader: jspb.BinaryReader
  ): Driver
}

export namespace Driver {
  export type AsObject = {
    idnumber: number
    firstname: string
    lastname: string
    email: string
    phone: string
    sex: string
    dateofbirth?: google_protobuf_timestamp_pb.Timestamp.AsObject
    dateemployed?: google_protobuf_timestamp_pb.Timestamp.AsObject
    comment: string
    evaluationreport: string
    driverslicence: string
  }
}

export class DriverRequest extends jspb.Message {
  getIdnumber(): number
  setIdnumber(value: number): DriverRequest

  getSearchquery(): string
  setSearchquery(value: string): DriverRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DriverRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DriverRequest
  ): DriverRequest.AsObject

  static serializeBinaryToWriter(
    message: DriverRequest,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): DriverRequest
  static deserializeBinaryFromReader(
    message: DriverRequest,
    reader: jspb.BinaryReader
  ): DriverRequest
}

export namespace DriverRequest {
  export type AsObject = {
    idnumber: number
    searchquery: string
  }
}

export class Vehicle extends jspb.Message {
  getVehicleid(): number
  setVehicleid(value: number): Vehicle

  getBrand(): string
  setBrand(value: string): Vehicle

  getModel(): string
  setModel(value: string): Vehicle

  getModelyear(): string
  setModelyear(value: string): Vehicle

  getRegistrationnumber(): string
  setRegistrationnumber(value: string): Vehicle

  getFuelconsumption(): number
  setFuelconsumption(value: number): Vehicle

  getColor(): string
  setColor(value: string): Vehicle

  getDatepurchased(): google_protobuf_timestamp_pb.Timestamp | undefined
  setDatepurchased(value?: google_protobuf_timestamp_pb.Timestamp): Vehicle
  hasDatepurchased(): boolean
  clearDatepurchased(): Vehicle

  getExpectedendservice(): google_protobuf_timestamp_pb.Timestamp | undefined
  setExpectedendservice(value?: google_protobuf_timestamp_pb.Timestamp): Vehicle
  hasExpectedendservice(): boolean
  clearExpectedendservice(): Vehicle

  getType(): string
  setType(value: string): Vehicle

  getCondition(): string
  setCondition(value: string): Vehicle

  getMaxweight(): number
  setMaxweight(value: number): Vehicle

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Vehicle.AsObject
  static toObject(includeInstance: boolean, msg: Vehicle): Vehicle.AsObject
  static serializeBinaryToWriter(
    message: Vehicle,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): Vehicle
  static deserializeBinaryFromReader(
    message: Vehicle,
    reader: jspb.BinaryReader
  ): Vehicle
}

export namespace Vehicle {
  export type AsObject = {
    vehicleid: number
    brand: string
    model: string
    modelyear: string
    registrationnumber: string
    fuelconsumption: number
    color: string
    datepurchased?: google_protobuf_timestamp_pb.Timestamp.AsObject
    expectedendservice?: google_protobuf_timestamp_pb.Timestamp.AsObject
    type: string
    condition: string
    maxweight: number
  }
}

export class VehicleRequest extends jspb.Message {
  getVehicleid(): number
  setVehicleid(value: number): VehicleRequest

  getSearchquery(): string
  setSearchquery(value: string): VehicleRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): VehicleRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: VehicleRequest
  ): VehicleRequest.AsObject

  static serializeBinaryToWriter(
    message: VehicleRequest,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): VehicleRequest
  static deserializeBinaryFromReader(
    message: VehicleRequest,
    reader: jspb.BinaryReader
  ): VehicleRequest
}

export namespace VehicleRequest {
  export type AsObject = {
    vehicleid: number
    searchquery: string
  }
}

export class VehicleKilometresTravelledResponse extends jspb.Message {
  getDate(): string
  setDate(value: string): VehicleKilometresTravelledResponse

  getKilometres(): number
  setKilometres(value: number): VehicleKilometresTravelledResponse

  serializeBinary(): Uint8Array
  toObject(
    includeInstance?: boolean
  ): VehicleKilometresTravelledResponse.AsObject

  static toObject(
    includeInstance: boolean,
    msg: VehicleKilometresTravelledResponse
  ): VehicleKilometresTravelledResponse.AsObject

  static serializeBinaryToWriter(
    message: VehicleKilometresTravelledResponse,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(
    bytes: Uint8Array
  ): VehicleKilometresTravelledResponse

  static deserializeBinaryFromReader(
    message: VehicleKilometresTravelledResponse,
    reader: jspb.BinaryReader
  ): VehicleKilometresTravelledResponse
}

export namespace VehicleKilometresTravelledResponse {
  export type AsObject = {
    date: string
    kilometres: number
  }
}

export class Trip extends jspb.Message {
  getTripid(): number
  setTripid(value: number): Trip

  getDriver(): Driver | undefined
  setDriver(value?: Driver): Trip
  hasDriver(): boolean
  clearDriver(): Trip

  getVehicle(): Vehicle | undefined
  setVehicle(value?: Vehicle): Trip
  hasVehicle(): boolean
  clearVehicle(): Trip

  getScheduleddeparturetime():
    | google_protobuf_timestamp_pb.Timestamp
    | undefined

  setScheduleddeparturetime(
    value?: google_protobuf_timestamp_pb.Timestamp
  ): Trip

  hasScheduleddeparturetime(): boolean
  clearScheduleddeparturetime(): Trip

  getActualdeparturetime(): google_protobuf_timestamp_pb.Timestamp | undefined
  setActualdeparturetime(value?: google_protobuf_timestamp_pb.Timestamp): Trip
  hasActualdeparturetime(): boolean
  clearActualdeparturetime(): Trip

  getScheduledarrivaltime(): google_protobuf_timestamp_pb.Timestamp | undefined
  setScheduledarrivaltime(value?: google_protobuf_timestamp_pb.Timestamp): Trip
  hasScheduledarrivaltime(): boolean
  clearScheduledarrivaltime(): Trip

  getActualarrivaltime(): google_protobuf_timestamp_pb.Timestamp | undefined
  setActualarrivaltime(value?: google_protobuf_timestamp_pb.Timestamp): Trip
  hasActualarrivaltime(): boolean
  clearActualarrivaltime(): Trip

  getOrigin(): Location | undefined
  setOrigin(value?: Location): Trip
  hasOrigin(): boolean
  clearOrigin(): Trip

  getDestination(): Location | undefined
  setDestination(value?: Location): Trip
  hasDestination(): boolean
  clearDestination(): Trip

  getStatus(): string
  setStatus(value: string): Trip

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Trip.AsObject
  static toObject(includeInstance: boolean, msg: Trip): Trip.AsObject
  static serializeBinaryToWriter(message: Trip, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Trip
  static deserializeBinaryFromReader(
    message: Trip,
    reader: jspb.BinaryReader
  ): Trip
}

export namespace Trip {
  export type AsObject = {
    tripid: number
    driver?: Driver.AsObject
    vehicle?: Vehicle.AsObject
    scheduleddeparturetime?: google_protobuf_timestamp_pb.Timestamp.AsObject
    actualdeparturetime?: google_protobuf_timestamp_pb.Timestamp.AsObject
    scheduledarrivaltime?: google_protobuf_timestamp_pb.Timestamp.AsObject
    actualarrivaltime?: google_protobuf_timestamp_pb.Timestamp.AsObject
    origin?: Location.AsObject
    destination?: Location.AsObject
    status: string
  }
}

export class TripsRequest extends jspb.Message {
  getVehicleid(): number
  setVehicleid(value: number): TripsRequest

  getDriverid(): number
  setDriverid(value: number): TripsRequest

  getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined
  setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): TripsRequest
  hasStartdate(): boolean
  clearStartdate(): TripsRequest

  getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined
  setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): TripsRequest
  hasEnddate(): boolean
  clearEnddate(): TripsRequest

  getStatus(): string
  setStatus(value: string): TripsRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TripsRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: TripsRequest
  ): TripsRequest.AsObject

  static serializeBinaryToWriter(
    message: TripsRequest,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): TripsRequest
  static deserializeBinaryFromReader(
    message: TripsRequest,
    reader: jspb.BinaryReader
  ): TripsRequest
}

export namespace TripsRequest {
  export type AsObject = {
    vehicleid: number
    driverid: number
    startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject
    enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject
    status: string
  }
}

export class RecordId extends jspb.Message {
  getId(): number
  setId(value: number): RecordId

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RecordId.AsObject
  static toObject(includeInstance: boolean, msg: RecordId): RecordId.AsObject
  static serializeBinaryToWriter(
    message: RecordId,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): RecordId
  static deserializeBinaryFromReader(
    message: RecordId,
    reader: jspb.BinaryReader
  ): RecordId
}

export namespace RecordId {
  export type AsObject = {
    id: number
  }
}

export class WriteRecordResponse extends jspb.Message {
  getStatus(): boolean
  setStatus(value: boolean): WriteRecordResponse

  getMessage(): string
  setMessage(value: string): WriteRecordResponse

  getRecordid(): number
  setRecordid(value: number): WriteRecordResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): WriteRecordResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: WriteRecordResponse
  ): WriteRecordResponse.AsObject

  static serializeBinaryToWriter(
    message: WriteRecordResponse,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): WriteRecordResponse
  static deserializeBinaryFromReader(
    message: WriteRecordResponse,
    reader: jspb.BinaryReader
  ): WriteRecordResponse
}

export namespace WriteRecordResponse {
  export type AsObject = {
    status: boolean
    message: string
    recordid: number
  }
}

export class TextMessage extends jspb.Message {
  getMessageid(): string
  setMessageid(value: string): TextMessage

  getRecepient(): Driver | undefined
  setRecepient(value?: Driver): TextMessage
  hasRecepient(): boolean
  clearRecepient(): TextMessage

  getText(): string
  setText(value: string): TextMessage

  getTimesent(): string
  setTimesent(value: string): TextMessage

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): TextMessage.AsObject
  static toObject(
    includeInstance: boolean,
    msg: TextMessage
  ): TextMessage.AsObject

  static serializeBinaryToWriter(
    message: TextMessage,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): TextMessage
  static deserializeBinaryFromReader(
    message: TextMessage,
    reader: jspb.BinaryReader
  ): TextMessage
}

export namespace TextMessage {
  export type AsObject = {
    messageid: string
    recepient?: Driver.AsObject
    text: string
    timesent: string
  }
}

export class SendMessageResponse extends jspb.Message {
  getMessageid(): string
  setMessageid(value: string): SendMessageResponse

  getStatus(): boolean
  setStatus(value: boolean): SendMessageResponse

  getMessage(): string
  setMessage(value: string): SendMessageResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: SendMessageResponse
  ): SendMessageResponse.AsObject

  static serializeBinaryToWriter(
    message: SendMessageResponse,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): SendMessageResponse
  static deserializeBinaryFromReader(
    message: SendMessageResponse,
    reader: jspb.BinaryReader
  ): SendMessageResponse
}

export namespace SendMessageResponse {
  export type AsObject = {
    messageid: string
    status: boolean
    message: string
  }
}

export class DisburseFundsRequest extends jspb.Message {
  getDriver(): Driver | undefined
  setDriver(value?: Driver): DisburseFundsRequest
  hasDriver(): boolean
  clearDriver(): DisburseFundsRequest

  getAmount(): number
  setAmount(value: number): DisburseFundsRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DisburseFundsRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DisburseFundsRequest
  ): DisburseFundsRequest.AsObject

  static serializeBinaryToWriter(
    message: DisburseFundsRequest,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): DisburseFundsRequest
  static deserializeBinaryFromReader(
    message: DisburseFundsRequest,
    reader: jspb.BinaryReader
  ): DisburseFundsRequest
}

export namespace DisburseFundsRequest {
  export type AsObject = {
    driver?: Driver.AsObject
    amount: number
  }
}

export class DisburseFundsResponse extends jspb.Message {
  getStatus(): boolean
  setStatus(value: boolean): DisburseFundsResponse

  getMessage(): string
  setMessage(value: string): DisburseFundsResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DisburseFundsResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DisburseFundsResponse
  ): DisburseFundsResponse.AsObject

  static serializeBinaryToWriter(
    message: DisburseFundsResponse,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): DisburseFundsResponse
  static deserializeBinaryFromReader(
    message: DisburseFundsResponse,
    reader: jspb.BinaryReader
  ): DisburseFundsResponse
}

export namespace DisburseFundsResponse {
  export type AsObject = {
    status: boolean
    message: string
  }
}

export class Location extends jspb.Message {
  getLat(): number
  setLat(value: number): Location

  getLong(): number
  setLong(value: number): Location

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Location.AsObject
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject
  static serializeBinaryToWriter(
    message: Location,
    writer: jspb.BinaryWriter
  ): void

  static deserializeBinary(bytes: Uint8Array): Location
  static deserializeBinaryFromReader(
    message: Location,
    reader: jspb.BinaryReader
  ): Location
}

export namespace Location {
  export type AsObject = {
    lat: number
    pb_long: number
  }
}
