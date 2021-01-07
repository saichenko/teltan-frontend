import Vue from 'vue'

export default {
  actions: {
    async fetchCategories (ctx) {
      await Vue.axios.get('api/category/')
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
    }
  },
  getters: {
    allCategories (state) {
      return state.categories;
    }
  }
}
