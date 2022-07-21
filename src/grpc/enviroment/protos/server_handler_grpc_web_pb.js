/**
 * @fileoverview gRPC-Web generated client stub for serverHandler
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.serverHandler = require('./server_handler_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.serverHandler.DashboardServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.serverHandler.DashboardServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.serverHandler.User,
 *   !proto.serverHandler.DefaultStringMsg>}
 */
const methodDescriptor_DashboardService_SignIn = new grpc.web.MethodDescriptor(
  '/serverHandler.DashboardService/SignIn',
  grpc.web.MethodType.UNARY,
  proto.serverHandler.User,
  proto.serverHandler.DefaultStringMsg,
  /**
   * @param {!proto.serverHandler.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.serverHandler.DefaultStringMsg.deserializeBinary
);


/**
 * @param {!proto.serverHandler.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.serverHandler.DefaultStringMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.serverHandler.DefaultStringMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.serverHandler.DashboardServiceClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/serverHandler.DashboardService/SignIn',
      request,
      metadata || {},
      methodDescriptor_DashboardService_SignIn,
      callback);
};


/**
 * @param {!proto.serverHandler.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.serverHandler.DefaultStringMsg>}
 *     Promise that resolves to the response
 */
proto.serverHandler.DashboardServicePromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/serverHandler.DashboardService/SignIn',
      request,
      metadata || {},
      methodDescriptor_DashboardService_SignIn);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.serverHandler.User,
 *   !proto.serverHandler.DefaultStringMsg>}
 */
const methodDescriptor_DashboardService_SignUp = new grpc.web.MethodDescriptor(
  '/serverHandler.DashboardService/SignUp',
  grpc.web.MethodType.UNARY,
  proto.serverHandler.User,
  proto.serverHandler.DefaultStringMsg,
  /**
   * @param {!proto.serverHandler.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.serverHandler.DefaultStringMsg.deserializeBinary
);


/**
 * @param {!proto.serverHandler.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.serverHandler.DefaultStringMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.serverHandler.DefaultStringMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.serverHandler.DashboardServiceClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/serverHandler.DashboardService/SignUp',
      request,
      metadata || {},
      methodDescriptor_DashboardService_SignUp,
      callback);
};


/**
 * @param {!proto.serverHandler.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.serverHandler.DefaultStringMsg>}
 *     Promise that resolves to the response
 */
proto.serverHandler.DashboardServicePromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/serverHandler.DashboardService/SignUp',
      request,
      metadata || {},
      methodDescriptor_DashboardService_SignUp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.serverHandler.EmptyMsg,
 *   !proto.serverHandler.GetCurrenciesResponse>}
 */
const methodDescriptor_DashboardService_GetAllCurrencies = new grpc.web.MethodDescriptor(
  '/serverHandler.DashboardService/GetAllCurrencies',
  grpc.web.MethodType.UNARY,
  proto.serverHandler.EmptyMsg,
  proto.serverHandler.GetCurrenciesResponse,
  /**
   * @param {!proto.serverHandler.EmptyMsg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.serverHandler.GetCurrenciesResponse.deserializeBinary
);


/**
 * @param {!proto.serverHandler.EmptyMsg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.serverHandler.GetCurrenciesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.serverHandler.GetCurrenciesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.serverHandler.DashboardServiceClient.prototype.getAllCurrencies =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/serverHandler.DashboardService/GetAllCurrencies',
      request,
      metadata || {},
      methodDescriptor_DashboardService_GetAllCurrencies,
      callback);
};


/**
 * @param {!proto.serverHandler.EmptyMsg} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.serverHandler.GetCurrenciesResponse>}
 *     Promise that resolves to the response
 */
proto.serverHandler.DashboardServicePromiseClient.prototype.getAllCurrencies =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/serverHandler.DashboardService/GetAllCurrencies',
      request,
      metadata || {},
      methodDescriptor_DashboardService_GetAllCurrencies);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.serverHandler.SellOperation,
 *   !proto.serverHandler.DefaultStringMsg>}
 */
const methodDescriptor_DashboardService_BuyCurrency = new grpc.web.MethodDescriptor(
  '/serverHandler.DashboardService/BuyCurrency',
  grpc.web.MethodType.UNARY,
  proto.serverHandler.SellOperation,
  proto.serverHandler.DefaultStringMsg,
  /**
   * @param {!proto.serverHandler.SellOperation} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.serverHandler.DefaultStringMsg.deserializeBinary
);


/**
 * @param {!proto.serverHandler.SellOperation} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.serverHandler.DefaultStringMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.serverHandler.DefaultStringMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.serverHandler.DashboardServiceClient.prototype.buyCurrency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/serverHandler.DashboardService/BuyCurrency',
      request,
      metadata || {},
      methodDescriptor_DashboardService_BuyCurrency,
      callback);
};


/**
 * @param {!proto.serverHandler.SellOperation} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.serverHandler.DefaultStringMsg>}
 *     Promise that resolves to the response
 */
proto.serverHandler.DashboardServicePromiseClient.prototype.buyCurrency =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/serverHandler.DashboardService/BuyCurrency',
      request,
      metadata || {},
      methodDescriptor_DashboardService_BuyCurrency);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.serverHandler.SellOperation,
 *   !proto.serverHandler.DefaultStringMsg>}
 */
const methodDescriptor_DashboardService_SellCurrency = new grpc.web.MethodDescriptor(
  '/serverHandler.DashboardService/SellCurrency',
  grpc.web.MethodType.UNARY,
  proto.serverHandler.SellOperation,
  proto.serverHandler.DefaultStringMsg,
  /**
   * @param {!proto.serverHandler.SellOperation} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.serverHandler.DefaultStringMsg.deserializeBinary
);


/**
 * @param {!proto.serverHandler.SellOperation} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.serverHandler.DefaultStringMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.serverHandler.DefaultStringMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.serverHandler.DashboardServiceClient.prototype.sellCurrency =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/serverHandler.DashboardService/SellCurrency',
      request,
      metadata || {},
      methodDescriptor_DashboardService_SellCurrency,
      callback);
};


/**
 * @param {!proto.serverHandler.SellOperation} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.serverHandler.DefaultStringMsg>}
 *     Promise that resolves to the response
 */
proto.serverHandler.DashboardServicePromiseClient.prototype.sellCurrency =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/serverHandler.DashboardService/SellCurrency',
      request,
      metadata || {},
      methodDescriptor_DashboardService_SellCurrency);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.serverHandler.DefaultStringMsg,
 *   !proto.serverHandler.DefaultFloatMsg>}
 */
const methodDescriptor_DashboardService_GetCurrencyValue = new grpc.web.MethodDescriptor(
  '/serverHandler.DashboardService/GetCurrencyValue',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.serverHandler.DefaultStringMsg,
  proto.serverHandler.DefaultFloatMsg,
  /**
   * @param {!proto.serverHandler.DefaultStringMsg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.serverHandler.DefaultFloatMsg.deserializeBinary
);


/**
 * @param {!proto.serverHandler.DefaultStringMsg} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.serverHandler.DefaultFloatMsg>}
 *     The XHR Node Readable Stream
 */
proto.serverHandler.DashboardServiceClient.prototype.getCurrencyValue =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/serverHandler.DashboardService/GetCurrencyValue',
      request,
      metadata || {},
      methodDescriptor_DashboardService_GetCurrencyValue);
};


/**
 * @param {!proto.serverHandler.DefaultStringMsg} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.serverHandler.DefaultFloatMsg>}
 *     The XHR Node Readable Stream
 */
proto.serverHandler.DashboardServicePromiseClient.prototype.getCurrencyValue =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/serverHandler.DashboardService/GetCurrencyValue',
      request,
      metadata || {},
      methodDescriptor_DashboardService_GetCurrencyValue);
};


module.exports = proto.serverHandler;

