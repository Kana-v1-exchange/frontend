/* eslint-disable no-unused-vars */
let PROTO_PATH = './serverHandler.proto'
import { loadPackageDefinition, credentials } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'

function init() {
    let packageDefinition = loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        }
    )

    let protoDescriptor = loadPackageDefinition(packageDefinition)
    let dashboardService = protoDescriptor.dashboardservice
    let stub = new dashboardService.DashboardService('localhost:9001', credentials.createInsecure())

    return stub
}

function currencies() {
    let stub = init()
    stub.getAllCurrencies({}, function (err, currencies) {
        console.log('err', err)
        console.log('currencies', currencies)
    })
}

