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
            state.dashboardService.getUserMoney(localStorage.getItem('userID'))
        }
    },

    actions: {
        signUp({ commit, state }, email, password) {
            state.dashboardService.signUp(email, password).then(res => console.log(res))
        },

        signIn({ commit, state }, email, password) {
            state.dashboardService.signIn(email, password).then(res => {
                localStorage.setItem("userID", res)
                location.reload()
            })
        }
    }
})
