import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  actions: {
    async fetchProducts (ctx) {
      await Vue.axios.get('api/product/')
        .then((resp) => {
          console.log(resp)
          ctx.commit('updateProducts', resp.data.results)
        })
    }
  },
  state: {
    products: undefined
  },
  mutations: {
    updateProducts (state, products) {
      state.products = products;
    }
  },
  getters: {
    allProducts (state) {
      return state.products;
    }
  }
}
