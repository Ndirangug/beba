import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TestHelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): TestHelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestHelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestHelloRequest): TestHelloRequest.AsObject;
  static serializeBinaryToWriter(message: TestHelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestHelloRequest;
  static deserializeBinaryFromReader(message: TestHelloRequest, reader: jspb.BinaryReader): TestHelloRequest;
}

export namespace TestHelloRequest {
  export type AsObject = {
<<<<<<< HEAD
    name: string
=======
    name: string,
>>>>>>> triage2
  }
}

export class TestHelloResponse extends jspb.Message {
<<<<<<< HEAD
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
=======
  getResponse(): string;
  setResponse(value: string): TestHelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestHelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestHelloResponse): TestHelloResponse.AsObject;
  static serializeBinaryToWriter(message: TestHelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestHelloResponse;
  static deserializeBinaryFromReader(message: TestHelloResponse, reader: jspb.BinaryReader): TestHelloResponse;
>>>>>>> triage2
}

export namespace TestHelloResponse {
  export type AsObject = {
<<<<<<< HEAD
    response: string
=======
    response: string,
>>>>>>> triage2
  }
}

export class EmptyMessage extends jspb.Message {
<<<<<<< HEAD
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
=======
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyMessage): EmptyMessage.AsObject;
  static serializeBinaryToWriter(message: EmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyMessage;
  static deserializeBinaryFromReader(message: EmptyMessage, reader: jspb.BinaryReader): EmptyMessage;
}

export namespace EmptyMessage {
  export type AsObject = {
  }
}

export class Driver extends jspb.Message {
  getIdnumber(): number;
  setIdnumber(value: number): Driver;

  getFirstname(): string;
  setFirstname(value: string): Driver;

  getLastname(): string;
  setLastname(value: string): Driver;

  getEmail(): string;
  setEmail(value: string): Driver;

  getPhone(): string;
  setPhone(value: string): Driver;

  getSex(): string;
  setSex(value: string): Driver;

  getDateofbirth(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateofbirth(value?: google_protobuf_timestamp_pb.Timestamp): Driver;
  hasDateofbirth(): boolean;
  clearDateofbirth(): Driver;

  getDateemployed(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateemployed(value?: google_protobuf_timestamp_pb.Timestamp): Driver;
  hasDateemployed(): boolean;
  clearDateemployed(): Driver;

  getComment(): string;
  setComment(value: string): Driver;

  getEvaluationreport(): string;
  setEvaluationreport(value: string): Driver;

  getDriverslicence(): string;
  setDriverslicence(value: string): Driver;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Driver.AsObject;
  static toObject(includeInstance: boolean, msg: Driver): Driver.AsObject;
  static serializeBinaryToWriter(message: Driver, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Driver;
  static deserializeBinaryFromReader(message: Driver, reader: jspb.BinaryReader): Driver;
>>>>>>> triage2
}

export namespace Driver {
  export type AsObject = {
<<<<<<< HEAD
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
=======
    idnumber: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    sex: string,
    dateofbirth?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dateemployed?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comment: string,
    evaluationreport: string,
    driverslicence: string,
>>>>>>> triage2
  }
}

export class DriverRequest extends jspb.Message {
<<<<<<< HEAD
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
=======
  getIdnumber(): number;
  setIdnumber(value: number): DriverRequest;

  getSearchquery(): string;
  setSearchquery(value: string): DriverRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DriverRequest): DriverRequest.AsObject;
  static serializeBinaryToWriter(message: DriverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriverRequest;
  static deserializeBinaryFromReader(message: DriverRequest, reader: jspb.BinaryReader): DriverRequest;
>>>>>>> triage2
}

export namespace DriverRequest {
  export type AsObject = {
<<<<<<< HEAD
    idnumber: number
    searchquery: string
=======
    idnumber: number,
    searchquery: string,
>>>>>>> triage2
  }
}

export class Vehicle extends jspb.Message {
<<<<<<< HEAD
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
=======
  getVehicleid(): number;
  setVehicleid(value: number): Vehicle;

  getBrand(): string;
  setBrand(value: string): Vehicle;

  getModel(): string;
  setModel(value: string): Vehicle;

  getModelyear(): string;
  setModelyear(value: string): Vehicle;

  getRegistrationnumber(): string;
  setRegistrationnumber(value: string): Vehicle;

  getFuelconsumption(): number;
  setFuelconsumption(value: number): Vehicle;

  getColor(): string;
  setColor(value: string): Vehicle;

  getDatepurchased(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatepurchased(value?: google_protobuf_timestamp_pb.Timestamp): Vehicle;
  hasDatepurchased(): boolean;
  clearDatepurchased(): Vehicle;

  getExpectedendservice(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpectedendservice(value?: google_protobuf_timestamp_pb.Timestamp): Vehicle;
  hasExpectedendservice(): boolean;
  clearExpectedendservice(): Vehicle;

  getType(): string;
  setType(value: string): Vehicle;

  getCondition(): string;
  setCondition(value: string): Vehicle;

  getMaxweight(): number;
  setMaxweight(value: number): Vehicle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vehicle.AsObject;
  static toObject(includeInstance: boolean, msg: Vehicle): Vehicle.AsObject;
  static serializeBinaryToWriter(message: Vehicle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vehicle;
  static deserializeBinaryFromReader(message: Vehicle, reader: jspb.BinaryReader): Vehicle;
>>>>>>> triage2
}

export namespace Vehicle {
  export type AsObject = {
<<<<<<< HEAD
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
=======
    vehicleid: number,
    brand: string,
    model: string,
    modelyear: string,
    registrationnumber: string,
    fuelconsumption: number,
    color: string,
    datepurchased?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expectedendservice?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: string,
    condition: string,
    maxweight: number,
>>>>>>> triage2
  }
}

export class VehicleRequest extends jspb.Message {
<<<<<<< HEAD
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
=======
  getVehicleid(): number;
  setVehicleid(value: number): VehicleRequest;

  getSearchquery(): string;
  setSearchquery(value: string): VehicleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VehicleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VehicleRequest): VehicleRequest.AsObject;
  static serializeBinaryToWriter(message: VehicleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VehicleRequest;
  static deserializeBinaryFromReader(message: VehicleRequest, reader: jspb.BinaryReader): VehicleRequest;
>>>>>>> triage2
}

export namespace VehicleRequest {
  export type AsObject = {
<<<<<<< HEAD
    vehicleid: number
    searchquery: string
=======
    vehicleid: number,
    searchquery: string,
>>>>>>> triage2
  }
}

export class VehicleKilometresTravelledResponse extends jspb.Message {
<<<<<<< HEAD
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
=======
  getDate(): string;
  setDate(value: string): VehicleKilometresTravelledResponse;

  getKilometres(): number;
  setKilometres(value: number): VehicleKilometresTravelledResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VehicleKilometresTravelledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VehicleKilometresTravelledResponse): VehicleKilometresTravelledResponse.AsObject;
  static serializeBinaryToWriter(message: VehicleKilometresTravelledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VehicleKilometresTravelledResponse;
  static deserializeBinaryFromReader(message: VehicleKilometresTravelledResponse, reader: jspb.BinaryReader): VehicleKilometresTravelledResponse;
>>>>>>> triage2
}

export namespace VehicleKilometresTravelledResponse {
  export type AsObject = {
<<<<<<< HEAD
    date: string
    kilometres: number
=======
    date: string,
    kilometres: number,
>>>>>>> triage2
  }
}

export class Trip extends jspb.Message {
<<<<<<< HEAD
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
=======
  getTripid(): number;
  setTripid(value: number): Trip;

  getDriver(): Driver | undefined;
  setDriver(value?: Driver): Trip;
  hasDriver(): boolean;
  clearDriver(): Trip;

  getVehicle(): Vehicle | undefined;
  setVehicle(value?: Vehicle): Trip;
  hasVehicle(): boolean;
  clearVehicle(): Trip;

  getScheduleddeparturetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduleddeparturetime(value?: google_protobuf_timestamp_pb.Timestamp): Trip;
  hasScheduleddeparturetime(): boolean;
  clearScheduleddeparturetime(): Trip;

  getActualdeparturetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActualdeparturetime(value?: google_protobuf_timestamp_pb.Timestamp): Trip;
  hasActualdeparturetime(): boolean;
  clearActualdeparturetime(): Trip;

  getScheduledarrivaltime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledarrivaltime(value?: google_protobuf_timestamp_pb.Timestamp): Trip;
  hasScheduledarrivaltime(): boolean;
  clearScheduledarrivaltime(): Trip;

  getActualarrivaltime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActualarrivaltime(value?: google_protobuf_timestamp_pb.Timestamp): Trip;
  hasActualarrivaltime(): boolean;
  clearActualarrivaltime(): Trip;

  getOrigin(): Location | undefined;
  setOrigin(value?: Location): Trip;
  hasOrigin(): boolean;
  clearOrigin(): Trip;

  getDestination(): Location | undefined;
  setDestination(value?: Location): Trip;
  hasDestination(): boolean;
  clearDestination(): Trip;

  getStatus(): string;
  setStatus(value: string): Trip;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trip.AsObject;
  static toObject(includeInstance: boolean, msg: Trip): Trip.AsObject;
  static serializeBinaryToWriter(message: Trip, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trip;
  static deserializeBinaryFromReader(message: Trip, reader: jspb.BinaryReader): Trip;
>>>>>>> triage2
}

export namespace Trip {
  export type AsObject = {
<<<<<<< HEAD
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
=======
    tripid: number,
    driver?: Driver.AsObject,
    vehicle?: Vehicle.AsObject,
    scheduleddeparturetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    actualdeparturetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    scheduledarrivaltime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    actualarrivaltime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    origin?: Location.AsObject,
    destination?: Location.AsObject,
    status: string,
>>>>>>> triage2
  }
}

export class TripsRequest extends jspb.Message {
<<<<<<< HEAD
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
=======
  getVehicleid(): number;
  setVehicleid(value: number): TripsRequest;

  getDriverid(): number;
  setDriverid(value: number): TripsRequest;

  getStartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartdate(value?: google_protobuf_timestamp_pb.Timestamp): TripsRequest;
  hasStartdate(): boolean;
  clearStartdate(): TripsRequest;

  getEnddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnddate(value?: google_protobuf_timestamp_pb.Timestamp): TripsRequest;
  hasEnddate(): boolean;
  clearEnddate(): TripsRequest;

  getStatus(): string;
  setStatus(value: string): TripsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TripsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TripsRequest): TripsRequest.AsObject;
  static serializeBinaryToWriter(message: TripsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TripsRequest;
  static deserializeBinaryFromReader(message: TripsRequest, reader: jspb.BinaryReader): TripsRequest;
>>>>>>> triage2
}

export namespace TripsRequest {
  export type AsObject = {
<<<<<<< HEAD
    vehicleid: number
    driverid: number
    startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject
    enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject
    status: string
=======
    vehicleid: number,
    driverid: number,
    startdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    enddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
>>>>>>> triage2
  }
}

export class RecordId extends jspb.Message {
<<<<<<< HEAD
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
=======
  getId(): number;
  setId(value: number): RecordId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordId.AsObject;
  static toObject(includeInstance: boolean, msg: RecordId): RecordId.AsObject;
  static serializeBinaryToWriter(message: RecordId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordId;
  static deserializeBinaryFromReader(message: RecordId, reader: jspb.BinaryReader): RecordId;
>>>>>>> triage2
}

export namespace RecordId {
  export type AsObject = {
<<<<<<< HEAD
    id: number
=======
    id: number,
>>>>>>> triage2
  }
}

export class WriteRecordResponse extends jspb.Message {
<<<<<<< HEAD
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
=======
  getStatus(): boolean;
  setStatus(value: boolean): WriteRecordResponse;

  getMessage(): string;
  setMessage(value: string): WriteRecordResponse;

  getRecordid(): number;
  setRecordid(value: number): WriteRecordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteRecordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteRecordResponse): WriteRecordResponse.AsObject;
  static serializeBinaryToWriter(message: WriteRecordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteRecordResponse;
  static deserializeBinaryFromReader(message: WriteRecordResponse, reader: jspb.BinaryReader): WriteRecordResponse;
>>>>>>> triage2
}

export namespace WriteRecordResponse {
  export type AsObject = {
<<<<<<< HEAD
    status: boolean
    message: string
    recordid: number
=======
    status: boolean,
    message: string,
    recordid: number,
>>>>>>> triage2
  }
}

export class TextMessage extends jspb.Message {
<<<<<<< HEAD
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
=======
  getMessageid(): string;
  setMessageid(value: string): TextMessage;

  getRecepient(): Driver | undefined;
  setRecepient(value?: Driver): TextMessage;
  hasRecepient(): boolean;
  clearRecepient(): TextMessage;

  getText(): string;
  setText(value: string): TextMessage;

  getTimesent(): string;
  setTimesent(value: string): TextMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TextMessage): TextMessage.AsObject;
  static serializeBinaryToWriter(message: TextMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextMessage;
  static deserializeBinaryFromReader(message: TextMessage, reader: jspb.BinaryReader): TextMessage;
>>>>>>> triage2
}

export namespace TextMessage {
  export type AsObject = {
<<<<<<< HEAD
    messageid: string
    recepient?: Driver.AsObject
    text: string
    timesent: string
=======
    messageid: string,
    recepient?: Driver.AsObject,
    text: string,
    timesent: string,
>>>>>>> triage2
  }
}

export class SendMessageResponse extends jspb.Message {
<<<<<<< HEAD
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
=======
  getMessageid(): string;
  setMessageid(value: string): SendMessageResponse;

  getStatus(): boolean;
  setStatus(value: boolean): SendMessageResponse;

  getMessage(): string;
  setMessage(value: string): SendMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
>>>>>>> triage2
}

export namespace SendMessageResponse {
  export type AsObject = {
<<<<<<< HEAD
    messageid: string
    status: boolean
    message: string
=======
    messageid: string,
    status: boolean,
    message: string,
>>>>>>> triage2
  }
}

export class DisburseFundsRequest extends jspb.Message {
<<<<<<< HEAD
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
=======
  getDriver(): Driver | undefined;
  setDriver(value?: Driver): DisburseFundsRequest;
  hasDriver(): boolean;
  clearDriver(): DisburseFundsRequest;

  getAmount(): number;
  setAmount(value: number): DisburseFundsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisburseFundsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisburseFundsRequest): DisburseFundsRequest.AsObject;
  static serializeBinaryToWriter(message: DisburseFundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisburseFundsRequest;
  static deserializeBinaryFromReader(message: DisburseFundsRequest, reader: jspb.BinaryReader): DisburseFundsRequest;
>>>>>>> triage2
}

export namespace DisburseFundsRequest {
  export type AsObject = {
<<<<<<< HEAD
    driver?: Driver.AsObject
    amount: number
=======
    driver?: Driver.AsObject,
    amount: number,
>>>>>>> triage2
  }
}

export class DisburseFundsResponse extends jspb.Message {
<<<<<<< HEAD
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
=======
  getStatus(): boolean;
  setStatus(value: boolean): DisburseFundsResponse;

  getMessage(): string;
  setMessage(value: string): DisburseFundsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisburseFundsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisburseFundsResponse): DisburseFundsResponse.AsObject;
  static serializeBinaryToWriter(message: DisburseFundsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisburseFundsResponse;
  static deserializeBinaryFromReader(message: DisburseFundsResponse, reader: jspb.BinaryReader): DisburseFundsResponse;
>>>>>>> triage2
}

export namespace DisburseFundsResponse {
  export type AsObject = {
<<<<<<< HEAD
    status: boolean
    message: string
=======
    status: boolean,
    message: string,
>>>>>>> triage2
  }
}

export class Location extends jspb.Message {
<<<<<<< HEAD
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
=======
  getLat(): number;
  setLat(value: number): Location;

  getLong(): number;
  setLong(value: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
>>>>>>> triage2
}

export namespace Location {
  export type AsObject = {
<<<<<<< HEAD
    lat: number
    pb_long: number
  }
}
=======
    lat: number,
    pb_long: number,
  }
}

>>>>>>> triage2
