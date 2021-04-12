/**
 * @fileoverview gRPC-Web generated client stub for beba_backend
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as service_pb from './service_pb';


export class BebaBackendClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoTestHello = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.TestHelloResponse,
    (request: service_pb.TestHelloRequest) => {
      return request.serializeBinary();
    },
    service_pb.TestHelloResponse.deserializeBinary
  );

  testHello(
    request: service_pb.TestHelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.TestHelloResponse>;

  testHello(
    request: service_pb.TestHelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.TestHelloResponse) => void): grpcWeb.ClientReadableStream<service_pb.TestHelloResponse>;

  testHello(
    request: service_pb.TestHelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.TestHelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/TestHello',
        request,
        metadata || {},
        this.methodInfoTestHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/TestHello',
    request,
    metadata || {},
    this.methodInfoTestHello);
  }

  methodInfoGetDrivers = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.Driver,
    (request: service_pb.DriverRequest) => {
      return request.serializeBinary();
    },
    service_pb.Driver.deserializeBinary
  );

  getDrivers(
    request: service_pb.DriverRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/beba_backend.BebaBackend/GetDrivers',
      request,
      metadata || {},
      this.methodInfoGetDrivers);
  }

  methodInfoGetVehicles = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.Vehicle,
    (request: service_pb.VehicleRequest) => {
      return request.serializeBinary();
    },
    service_pb.Vehicle.deserializeBinary
  );

  getVehicles(
    request: service_pb.VehicleRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/beba_backend.BebaBackend/GetVehicles',
      request,
      metadata || {},
      this.methodInfoGetVehicles);
  }

  methodInfoGetDriver = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.Driver,
    (request: service_pb.DriverRequest) => {
      return request.serializeBinary();
    },
    service_pb.Driver.deserializeBinary
  );

  getDriver(
    request: service_pb.DriverRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.Driver>;

  getDriver(
    request: service_pb.DriverRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.Driver) => void): grpcWeb.ClientReadableStream<service_pb.Driver>;

  getDriver(
    request: service_pb.DriverRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.Driver) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/GetDriver',
        request,
        metadata || {},
        this.methodInfoGetDriver,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/GetDriver',
    request,
    metadata || {},
    this.methodInfoGetDriver);
  }

  methodInfoGetVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.Vehicle,
    (request: service_pb.VehicleRequest) => {
      return request.serializeBinary();
    },
    service_pb.Vehicle.deserializeBinary
  );

  getVehicle(
    request: service_pb.VehicleRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.Vehicle>;

  getVehicle(
    request: service_pb.VehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.Vehicle) => void): grpcWeb.ClientReadableStream<service_pb.Vehicle>;

  getVehicle(
    request: service_pb.VehicleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.Vehicle) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/GetVehicle',
        request,
        metadata || {},
        this.methodInfoGetVehicle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/GetVehicle',
    request,
    metadata || {},
    this.methodInfoGetVehicle);
  }

  methodInfoGetTrips = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.Trip,
    (request: service_pb.TripsRequest) => {
      return request.serializeBinary();
    },
    service_pb.Trip.deserializeBinary
  );

  getTrips(
    request: service_pb.TripsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/beba_backend.BebaBackend/GetTrips',
      request,
      metadata || {},
      this.methodInfoGetTrips);
  }

  methodInfoNewDriver = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.WriteRecordResponse,
    (request: service_pb.Driver) => {
      return request.serializeBinary();
    },
    service_pb.WriteRecordResponse.deserializeBinary
  );

  newDriver(
    request: service_pb.Driver,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.WriteRecordResponse>;

  newDriver(
    request: service_pb.Driver,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void): grpcWeb.ClientReadableStream<service_pb.WriteRecordResponse>;

  newDriver(
    request: service_pb.Driver,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/NewDriver',
        request,
        metadata || {},
        this.methodInfoNewDriver,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/NewDriver',
    request,
    metadata || {},
    this.methodInfoNewDriver);
  }

  methodInfoNewVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.WriteRecordResponse,
    (request: service_pb.Vehicle) => {
      return request.serializeBinary();
    },
    service_pb.WriteRecordResponse.deserializeBinary
  );

  newVehicle(
    request: service_pb.Vehicle,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.WriteRecordResponse>;

  newVehicle(
    request: service_pb.Vehicle,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void): grpcWeb.ClientReadableStream<service_pb.WriteRecordResponse>;

  newVehicle(
    request: service_pb.Vehicle,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/NewVehicle',
        request,
        metadata || {},
        this.methodInfoNewVehicle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/NewVehicle',
    request,
    metadata || {},
    this.methodInfoNewVehicle);
  }

  methodInfoNewTrip = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.WriteRecordResponse,
    (request: service_pb.Trip) => {
      return request.serializeBinary();
    },
    service_pb.WriteRecordResponse.deserializeBinary
  );

  newTrip(
    request: service_pb.Trip,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.WriteRecordResponse>;

  newTrip(
    request: service_pb.Trip,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void): grpcWeb.ClientReadableStream<service_pb.WriteRecordResponse>;

  newTrip(
    request: service_pb.Trip,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/NewTrip',
        request,
        metadata || {},
        this.methodInfoNewTrip,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/NewTrip',
    request,
    metadata || {},
    this.methodInfoNewTrip);
  }

  methodInfoCancelTrip = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.WriteRecordResponse,
    (request: service_pb.RecordId) => {
      return request.serializeBinary();
    },
    service_pb.WriteRecordResponse.deserializeBinary
  );

  cancelTrip(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.WriteRecordResponse>;

  cancelTrip(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void): grpcWeb.ClientReadableStream<service_pb.WriteRecordResponse>;

  cancelTrip(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/CancelTrip',
        request,
        metadata || {},
        this.methodInfoCancelTrip,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/CancelTrip',
    request,
    metadata || {},
    this.methodInfoCancelTrip);
  }

  methodInfoRemoveDriver = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.WriteRecordResponse,
    (request: service_pb.RecordId) => {
      return request.serializeBinary();
    },
    service_pb.WriteRecordResponse.deserializeBinary
  );

  removeDriver(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.WriteRecordResponse>;

  removeDriver(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void): grpcWeb.ClientReadableStream<service_pb.WriteRecordResponse>;

  removeDriver(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/RemoveDriver',
        request,
        metadata || {},
        this.methodInfoRemoveDriver,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/RemoveDriver',
    request,
    metadata || {},
    this.methodInfoRemoveDriver);
  }

  methodInfoRemoveVehicle = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.WriteRecordResponse,
    (request: service_pb.RecordId) => {
      return request.serializeBinary();
    },
    service_pb.WriteRecordResponse.deserializeBinary
  );

  removeVehicle(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.WriteRecordResponse>;

  removeVehicle(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void): grpcWeb.ClientReadableStream<service_pb.WriteRecordResponse>;

  removeVehicle(
    request: service_pb.RecordId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.WriteRecordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/RemoveVehicle',
        request,
        metadata || {},
        this.methodInfoRemoveVehicle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/RemoveVehicle',
    request,
    metadata || {},
    this.methodInfoRemoveVehicle);
  }

  methodInfoVehicleKilometresTravelled = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.VehicleKilometresTravelledResponse,
    (request: service_pb.VehicleRequest) => {
      return request.serializeBinary();
    },
    service_pb.VehicleKilometresTravelledResponse.deserializeBinary
  );

  vehicleKilometresTravelled(
    request: service_pb.VehicleRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/beba_backend.BebaBackend/VehicleKilometresTravelled',
      request,
      metadata || {},
      this.methodInfoVehicleKilometresTravelled);
  }

  methodInfoSendMessage = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.SendMessageResponse,
    (request: service_pb.TextMessage) => {
      return request.serializeBinary();
    },
    service_pb.SendMessageResponse.deserializeBinary
  );

  sendMessage(
    request: service_pb.TextMessage,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.SendMessageResponse>;

  sendMessage(
    request: service_pb.TextMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.SendMessageResponse) => void): grpcWeb.ClientReadableStream<service_pb.SendMessageResponse>;

  sendMessage(
    request: service_pb.TextMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.SendMessageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/SendMessage',
        request,
        metadata || {},
        this.methodInfoSendMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/SendMessage',
    request,
    metadata || {},
    this.methodInfoSendMessage);
  }

  methodInfoDisburseFunds = new grpcWeb.AbstractClientBase.MethodInfo(
    service_pb.DisburseFundsResponse,
    (request: service_pb.DisburseFundsRequest) => {
      return request.serializeBinary();
    },
    service_pb.DisburseFundsResponse.deserializeBinary
  );

  disburseFunds(
    request: service_pb.DisburseFundsRequest,
    metadata: grpcWeb.Metadata | null): Promise<service_pb.DisburseFundsResponse>;

  disburseFunds(
    request: service_pb.DisburseFundsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: service_pb.DisburseFundsResponse) => void): grpcWeb.ClientReadableStream<service_pb.DisburseFundsResponse>;

  disburseFunds(
    request: service_pb.DisburseFundsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: service_pb.DisburseFundsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/beba_backend.BebaBackend/DisburseFunds',
        request,
        metadata || {},
        this.methodInfoDisburseFunds,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/beba_backend.BebaBackend/DisburseFunds',
    request,
    metadata || {},
    this.methodInfoDisburseFunds);
  }

}

