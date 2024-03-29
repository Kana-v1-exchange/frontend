/* eslint-disable no-unused-vars */
const { GetCurrenciesResponse, EmptyMsg, DefaultStringMsg, User, SellOperation } = require('./enviroment/protos/server_handler_pb')
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
            const res = await this.app.getUserMoney(request, { 'userID': userID })

            const currencyList = res.getCurrencyvalueList()

            return new Map(
                currencyList.map(el => {
                    return [el.getCurrency(), el.getValue()]
                })
            )
        } catch (err) {
            throw err.message
        }
    }

    async buyCurrency(userID, currency, amount, floorPrice, ceilPrice) {
        const request = new SellOperation();
        request.setCurrency(currency)
        request.setFloorprice(floorPrice)
        request.setCeilprice(ceilPrice)
        request.setAmount(amount)

        try {
            const res = await this.app.buyCurrency(request, {'userID': userID })

            return res.getMessage()
        } catch (err) {
            throw err.message
        }
    }

    async sellCurrency(userID, currency, amount, floorPrice, ceilPrice) {
        const request = new SellOperation();
        request.setCurrency(currency)
        request.setFloorprice(floorPrice)
        request.setCeilprice(ceilPrice)
        request.setAmount(amount)

        try {
            const res = await this.app.sellCurrency(request, {'userID': userID })

            return res.getMessage()
        } catch (err) {
            throw err.message
        }
    }
}
