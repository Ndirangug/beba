// package: beba_backend
// file: protos/service.proto

var protos_service_pb = require("../protos/service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BebaBackend = (function () {
  function BebaBackend() {}
  BebaBackend.serviceName = "beba_backend.BebaBackend";
  return BebaBackend;
}());

BebaBackend.TestHello = {
  methodName: "TestHello",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.TestHelloRequest,
  responseType: protos_service_pb.TestHelloResponse
};

BebaBackend.GetDrivers = {
  methodName: "GetDrivers",
  service: BebaBackend,
  requestStream: false,
  responseStream: true,
  requestType: protos_service_pb.DriverRequest,
  responseType: protos_service_pb.Driver
};

BebaBackend.GetVehicles = {
  methodName: "GetVehicles",
  service: BebaBackend,
  requestStream: false,
  responseStream: true,
  requestType: protos_service_pb.VehicleRequest,
  responseType: protos_service_pb.Vehicle
};

BebaBackend.GetDriver = {
  methodName: "GetDriver",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.DriverRequest,
  responseType: protos_service_pb.Driver
};

BebaBackend.GetVehicle = {
  methodName: "GetVehicle",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.VehicleRequest,
  responseType: protos_service_pb.Vehicle
};

BebaBackend.GetTrips = {
  methodName: "GetTrips",
  service: BebaBackend,
  requestStream: false,
  responseStream: true,
  requestType: protos_service_pb.TripsRequest,
  responseType: protos_service_pb.Trip
};

BebaBackend.NewDriver = {
  methodName: "NewDriver",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.Driver,
  responseType: protos_service_pb.WriteRecordResponse
};

BebaBackend.NewVehicle = {
  methodName: "NewVehicle",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.Vehicle,
  responseType: protos_service_pb.WriteRecordResponse
};

BebaBackend.NewTrip = {
  methodName: "NewTrip",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.Trip,
  responseType: protos_service_pb.WriteRecordResponse
};

BebaBackend.CancelTrip = {
  methodName: "CancelTrip",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.RecordId,
  responseType: protos_service_pb.WriteRecordResponse
};

BebaBackend.RemoveDriver = {
  methodName: "RemoveDriver",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.RecordId,
  responseType: protos_service_pb.WriteRecordResponse
};

BebaBackend.RemoveVehicle = {
  methodName: "RemoveVehicle",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.RecordId,
  responseType: protos_service_pb.WriteRecordResponse
};

BebaBackend.VehicleKilometresTravelled = {
  methodName: "VehicleKilometresTravelled",
  service: BebaBackend,
  requestStream: false,
  responseStream: true,
  requestType: protos_service_pb.VehicleRequest,
  responseType: protos_service_pb.VehicleKilometresTravelledResponse
};

BebaBackend.SendMessage = {
  methodName: "SendMessage",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.TextMessage,
  responseType: protos_service_pb.SendMessageResponse
};

BebaBackend.DisburseFunds = {
  methodName: "DisburseFunds",
  service: BebaBackend,
  requestStream: false,
  responseStream: false,
  requestType: protos_service_pb.DisburseFundsRequest,
  responseType: protos_service_pb.DisburseFundsResponse
};

exports.BebaBackend = BebaBackend;

function BebaBackendClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BebaBackendClient.prototype.testHello = function testHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.TestHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.getDrivers = function getDrivers(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BebaBackend.GetDrivers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.getVehicles = function getVehicles(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BebaBackend.GetVehicles, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.getDriver = function getDriver(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.GetDriver, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.getVehicle = function getVehicle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.GetVehicle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.getTrips = function getTrips(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BebaBackend.GetTrips, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.newDriver = function newDriver(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.NewDriver, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.newVehicle = function newVehicle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.NewVehicle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.newTrip = function newTrip(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.NewTrip, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.cancelTrip = function cancelTrip(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.CancelTrip, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.removeDriver = function removeDriver(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.RemoveDriver, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.removeVehicle = function removeVehicle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.RemoveVehicle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.vehicleKilometresTravelled = function vehicleKilometresTravelled(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BebaBackend.VehicleKilometresTravelled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.sendMessage = function sendMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.SendMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BebaBackendClient.prototype.disburseFunds = function disburseFunds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BebaBackend.DisburseFunds, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BebaBackendClient = BebaBackendClient;

