import Vue from 'vue'

export default {
  actions: {
    async fetchBalance(ctx) {
      await Vue.axios.get('api/money-account/')
        .then((resp) => {
          console.log(resp.data.results[0])
          ctx.commit('updateBalance', resp.data.results[0].balance, resp.data.results[0].id)
        })
    }
  },
  state: {
    balance: undefined,
    account_id: undefined,
  },
  mutations: {
    updateBalance(state, balance, id) {
      state.balance = balance;
      state.account_id = id
    }
  },
  getters: {
    getBalance (state) {
      return state.balance
    }
  }

}
