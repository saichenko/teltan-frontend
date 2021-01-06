export default {
  actions: {
    login (ctx, user, token){
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user));

      ctx.commit('loginUser')
    },
    logout (ctx) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')

      ctx.commit('logoutUser')
    }
  },
  state: {
    token: localStorage.getItem('token') || undefined,
    user: JSON.parse(localStorage.getItem('user')) || undefined
  },
  mutations: {
    loginUser (state, user) {
      state.user = JSON.parse(localStorage.getItem('user'))
      state.token = localStorage.getItem('token')
    },
    logoutUser(state) {
      state.token = undefined
      state.user = undefined
    }
  },
  getters: {
    getUser (state) {
      return state.user;
    }
  }
}
