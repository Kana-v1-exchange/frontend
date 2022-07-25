/* eslint-disable no-unused-vars */
const { GetCurrenciesResponse, EmptyMsg, DefaultStringMsg, User } = require('./enviroment/protos/server_handler_pb')
const { DashboardServicePromiseClient } = require('./enviroment/protos/server_handler_grpc_web_pb')

export class DashboardService {
    constructor() {
        this.app = new DashboardServicePromiseClient('http://localhost:11111', null, null)
    }

    async getCurrencies() {
        const request = new EmptyMsg()
        try {
            let res = await this.app.getAllCurrencies(request, {})

            return res.getCurrencyvalueList()
        } catch (err) {
            throw err.message
        }
    }

    async signUp(email, password) {
        const request = new User()
        request.setEmail(email)
        request.setPassword(password)
        try {
            let res = await this.app.signUp(request, {})

            return res.getMessage()
        } catch (err) {
            throw err.message
        }
    }

    async signIn(email, password) {
        const request = new User()
        request.setEmail(email)
        request.setPassword(password)

        try {
            let res = await this.app.signIn(request, {})

            return res.getMessage()
        } catch (err) {
            throw err.message
        }
    }

    async getUserMoney(userID) {
        const request = new EmptyMsg()

        try {
            const metadata = {'userID': '1'}
            const res = await this.app.getUserMoney(request, metadata)

            console.log(res.getCurrencyvalueList())
        } catch (err) {
            throw err.message
        }
    }
}
