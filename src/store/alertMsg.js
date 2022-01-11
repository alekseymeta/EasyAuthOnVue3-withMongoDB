export const alertMsg = {
  state: () => ({
    msg: ''
  }),
  getters: {},
  mutations: {
      SET_MSG(state, msg) {
        state.msg = msg
        setTimeout(() => {
          state.msg = ''
        }, 1500)
      }
    },
    actions: {}
  }

