import Vue from 'vue'
import Vuex from 'vuex'
import profile from "./modules/profile";
import products from "./modules/products";
import categories from "./modules/categories";
import balance from "./modules/balance";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    profile,
    products,
    categories,
    balance
  }
})
