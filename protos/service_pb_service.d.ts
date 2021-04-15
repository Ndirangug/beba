// package: beba_backend
// file: protos/service.proto

import * as protos_service_pb from "./service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BebaBackendTestHello = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.TestHelloRequest;
  readonly responseType: typeof protos_service_pb.TestHelloResponse;
};

type BebaBackendGetDrivers = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof protos_service_pb.DriverRequest;
  readonly responseType: typeof protos_service_pb.Driver;
};

type BebaBackendGetVehicles = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof protos_service_pb.VehicleRequest;
  readonly responseType: typeof protos_service_pb.Vehicle;
};

type BebaBackendGetDriver = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.DriverRequest;
  readonly responseType: typeof protos_service_pb.Driver;
};

type BebaBackendGetVehicle = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.VehicleRequest;
  readonly responseType: typeof protos_service_pb.Vehicle;
};

type BebaBackendGetTrips = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof protos_service_pb.TripsRequest;
  readonly responseType: typeof protos_service_pb.Trip;
};

type BebaBackendNewDriver = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.Driver;
  readonly responseType: typeof protos_service_pb.WriteRecordResponse;
};

type BebaBackendNewVehicle = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.Vehicle;
  readonly responseType: typeof protos_service_pb.WriteRecordResponse;
};

type BebaBackendNewTrip = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.Trip;
  readonly responseType: typeof protos_service_pb.WriteRecordResponse;
};

type BebaBackendCancelTrip = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.RecordId;
  readonly responseType: typeof protos_service_pb.WriteRecordResponse;
};

type BebaBackendRemoveDriver = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.RecordId;
  readonly responseType: typeof protos_service_pb.WriteRecordResponse;
};

type BebaBackendRemoveVehicle = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.RecordId;
  readonly responseType: typeof protos_service_pb.WriteRecordResponse;
};

type BebaBackendVehicleKilometresTravelled = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof protos_service_pb.VehicleRequest;
  readonly responseType: typeof protos_service_pb.VehicleKilometresTravelledResponse;
};

type BebaBackendSendMessage = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.TextMessage;
  readonly responseType: typeof protos_service_pb.SendMessageResponse;
};

type BebaBackendDisburseFunds = {
  readonly methodName: string;
  readonly service: typeof BebaBackend;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protos_service_pb.DisburseFundsRequest;
  readonly responseType: typeof protos_service_pb.DisburseFundsResponse;
};

export class BebaBackend {
  static readonly serviceName: string;
  static readonly TestHello: BebaBackendTestHello;
  static readonly GetDrivers: BebaBackendGetDrivers;
  static readonly GetVehicles: BebaBackendGetVehicles;
  static readonly GetDriver: BebaBackendGetDriver;
  static readonly GetVehicle: BebaBackendGetVehicle;
  static readonly GetTrips: BebaBackendGetTrips;
  static readonly NewDriver: BebaBackendNewDriver;
  static readonly NewVehicle: BebaBackendNewVehicle;
  static readonly NewTrip: BebaBackendNewTrip;
  static readonly CancelTrip: BebaBackendCancelTrip;
  static readonly RemoveDriver: BebaBackendRemoveDriver;
  static readonly RemoveVehicle: BebaBackendRemoveVehicle;
  static readonly VehicleKilometresTravelled: BebaBackendVehicleKilometresTravelled;
  static readonly SendMessage: BebaBackendSendMessage;
  static readonly DisburseFunds: BebaBackendDisburseFunds;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BebaBackendClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  testHello(
    requestMessage: protos_service_pb.TestHelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.TestHelloResponse|null) => void
  ): UnaryResponse;
  testHello(
    requestMessage: protos_service_pb.TestHelloRequest,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.TestHelloResponse|null) => void
  ): UnaryResponse;
  getDrivers(requestMessage: protos_service_pb.DriverRequest, metadata?: grpc.Metadata): ResponseStream<protos_service_pb.Driver>;
  getVehicles(requestMessage: protos_service_pb.VehicleRequest, metadata?: grpc.Metadata): ResponseStream<protos_service_pb.Vehicle>;
  getDriver(
    requestMessage: protos_service_pb.DriverRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.Driver|null) => void
  ): UnaryResponse;
  getDriver(
    requestMessage: protos_service_pb.DriverRequest,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.Driver|null) => void
  ): UnaryResponse;
  getVehicle(
    requestMessage: protos_service_pb.VehicleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.Vehicle|null) => void
  ): UnaryResponse;
  getVehicle(
    requestMessage: protos_service_pb.VehicleRequest,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.Vehicle|null) => void
  ): UnaryResponse;
  getTrips(requestMessage: protos_service_pb.TripsRequest, metadata?: grpc.Metadata): ResponseStream<protos_service_pb.Trip>;
  newDriver(
    requestMessage: protos_service_pb.Driver,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  newDriver(
    requestMessage: protos_service_pb.Driver,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  newVehicle(
    requestMessage: protos_service_pb.Vehicle,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  newVehicle(
    requestMessage: protos_service_pb.Vehicle,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  newTrip(
    requestMessage: protos_service_pb.Trip,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  newTrip(
    requestMessage: protos_service_pb.Trip,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  cancelTrip(
    requestMessage: protos_service_pb.RecordId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  cancelTrip(
    requestMessage: protos_service_pb.RecordId,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  removeDriver(
    requestMessage: protos_service_pb.RecordId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  removeDriver(
    requestMessage: protos_service_pb.RecordId,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  removeVehicle(
    requestMessage: protos_service_pb.RecordId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  removeVehicle(
    requestMessage: protos_service_pb.RecordId,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.WriteRecordResponse|null) => void
  ): UnaryResponse;
  vehicleKilometresTravelled(requestMessage: protos_service_pb.VehicleRequest, metadata?: grpc.Metadata): ResponseStream<protos_service_pb.VehicleKilometresTravelledResponse>;
  sendMessage(
    requestMessage: protos_service_pb.TextMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: protos_service_pb.TextMessage,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  disburseFunds(
    requestMessage: protos_service_pb.DisburseFundsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.DisburseFundsResponse|null) => void
  ): UnaryResponse;
  disburseFunds(
    requestMessage: protos_service_pb.DisburseFundsRequest,
    callback: (error: ServiceError|null, responseMessage: protos_service_pb.DisburseFundsResponse|null) => void
  ): UnaryResponse;
}

