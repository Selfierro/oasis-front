const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
    locales: ['ru', 'en'],
    locale: 'ru'
})

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let token = null;

    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)

      try {
        token = parsed.token

      } catch (err) {

      }
    }

    commit('auth/setToken', token)
  }
}

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}
