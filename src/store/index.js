/* eslint-disable no-unused-vars */
import { createStore } from 'vuex'
import { DashboardService } from '../grpc/handler'

export const store = createStore({
    state() {
        return {
            count: null,
            dashboardService: new DashboardService(),
            userMoney: new Map(),
        }
    },

    mutations: {
        currencies(state) {
            state.dashboardService.getCurrencies().then(res => console.log(res))
        },

        getUserMoney(state) {
            state.dashboardService.getUserMoney(localStorage.getItem('userID')).then(res => state.userMoney = res)
        }
    },

    actions: {
        signUp({ commit, state }, data) {
            state.dashboardService.signUp(data.email, data.password).then(res => console.log(res))
        },

        signIn({ commit, state }, data) {
            state.dashboardService.signIn(data.email, data.password).then(res => {
                localStorage.setItem("userID", res)
                location.reload()
            })
        },

        buy({ commit, state }, data) {
            state.dashboardService.buyCurrency(
                localStorage.getItem('userID'),
                data.currency,
                data.amount,
                data.floorPrice,
                data.ceilPrice,
            ).then(res => console.log(res))
        },

        sell({ commit, state }, data) {
            state.dashboardService.sellCurrency(
                localStorage.getItem('userID'),
                data.currency,
                data.amount,
                data.price,
            ).then(res => console.log(res))
        }
    }
})
