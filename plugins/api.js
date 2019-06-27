export default ({ app }, inject) => {
  inject('api', async (method, url, data, content_type = 'application/json', additional_headers = {}) => {
    let axios = app.$axios
    let token = app.store.getters['auth/getToken']
    let locale = app.store.getters['getLocale']
    let headers = {
      'Content-Type': content_type
    }
    let call_method = null
    let requires_data = false
    let result = null

    if (content_type === 'application/json') {
      data = JSON.stringify(data)
    } else {

      let formData = new FormData()

      for (let i in data) {
        if (Array.isArray(data[i])) {
          for (let index in data[i]) {
            formData.append(i, data[i][index])
          }
        } else {
          formData.append(i, data[i])
        }
      }

      data = formData
    }

    if (url.includes('?')) {
        url += `&lang=${locale}`
    } else {
        url += `?lang=${locale}`
    }

    for (let i in additional_headers) {
      headers[i] = additional_headers[i]
    }

    axios.setToken(token, 'Token')

    switch (method) {
      case 'get':
        call_method = axios.$get
        break
      case 'post':
        call_method = axios.$post
        requires_data = true
        break
      case 'put':
        call_method = axios.$put
        requires_data = true
        break
      case 'delete':
        call_method = axios.$delete
    }

    url = encodeURI(url)

    try {
      if (call_method) {
        if (requires_data) {
          result = await call_method(url, data, {
            headers: headers
          })
        } else {
          result = await call_method(url, {
            headers: headers
          })
        }

        return {
          success: true, response: result
        }

      }
    } catch (e) {
      return {
        success: false,
        response: e.response
      }
    }

  })
  inject('isAuth', () => {
    return app.store.getters['auth/getToken']
  })
  inject('buildSeoTags', (attrs) => {
    if (process.server) {
        app.$seo({
            title: attrs['title'],
            description: attrs['desc'],
            keywords: attrs['kw'],
            lang: attrs['lang'],
            language: attrs['language'],
            og: {
                title: attrs['title'],
                description: attrs['desc'],
                image: attrs['image']
            }
        })
    }
  })
}
