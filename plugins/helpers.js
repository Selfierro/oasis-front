export default ({ app }, inject) => {
  inject('pushErrors', async (context, data) => {
    context.customErrors = []
    context.errors.clear()

    for (let i in data) {
      context.errors.add({
        field: i,
        msg: data[i]
      });

      if (i === 'custom') {
        context.customErrors.push(data[i]);
      }
    }
  })
  inject('cleanForm', async (context, fields) => {
    context.customErrors = []

    for (let i in fields) {
      context[fields[i]] = ''
    }

    context.$validator.reset();
  })
  inject('validate', async (context, handler) => {
    context.$validator.validateAll().then(async (validated) => {
      if (validated) {
          handler()
      }
    });
  })
  inject('path', async (path) => {
    return `/${app.store.getters['getLocale']}${path}`
  })
}
