/* eslint-disable no-unused-vars */
const { GetCurrenciesResponse, EmptyMsg } = require('./enviroment/protos/server_handler_pb')
const { DashboardServiceClient } = require('./enviroment/protos/server_handler_grpc_web_pb')



export function getCurrencies() {
    const app = new DashboardServiceClient('http://localhost:11111', null, null)
    const request = new EmptyMsg()
    app.getAllCurrencies(request, {}, (err, response) => {
        if (err) {
            console.error(err);

            return;
        }
         console.log(response)
    })

}
