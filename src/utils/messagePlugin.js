
export default {
  install: (app) => {
    app.config.globalProperties.$msg = key => {
      return key
    }

      app.config.globalProperties.$error = key => {
        return (`Ошибка: ${key}`)
      }
  }
}
