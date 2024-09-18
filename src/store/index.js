import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {
      data: { name: 'Darío' },
      token: 123,
      name: 'Darío Nieto',
      email: 'dario@gmail.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  getters: {},
  actions: {},
  mutations: {
    logout: (state) => {
      state.user.date = {},
      state.user.token = null
    }
  },
  modules: {}
})

export default store
