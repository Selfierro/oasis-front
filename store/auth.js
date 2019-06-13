const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  token: null
})

export const getters = {
  getToken(state) {
    return state.token
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  logout({ commit }) {
    Cookie.remove('token')
    commit('setToken', null)
  },
  setTokenInCookie({ commit }, { token }) {
    Cookie.set('token', token)
    commit('setToken', token)
  }
}
