import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  actions: {
    async fetchCategories (ctx) {
      Vue.axios.get('api/category/')
        .then((resp) => {
          ctx.commit('updateCategories', resp.data.results)
        })
    }
  },
  state: {
    categories: undefined
  },
  mutations: {
    updateCategories (state, categories) {
      state.categories = categories;
      console.warn(categories)
    }
  },
  getters: {
    allCategories (state) {
      return state.categories;
    }
  }
}
