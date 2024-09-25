import { createStore } from 'vuex'
import axiosClient from '../services/userService'
import axiosClientAnimals from '../services/animalService'

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    }
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post('/register', user)
      .then(({data}) => {
        commit('setUser', data)
        return data
      }) /* axios siempre responde con 'data' */
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user)
      .then(({data}) => {
        commit('setUser', data)
        return data
      }) /* axios siempre responde con 'data' */
    }
  },
  mutations: {
    logout: (state) => {
      (state.user.token = null),
      (state.user.data = {}),
      sessionStorage.clear()
    },
    setUser: (state, userData) => {
      state.user.token = userData.token
      state.user.data = userData.user
      sessionStorage.setItem('TOKEN', userData.token)
      console.log('usuario', state.user.data, 'token', userData.token)
    }
    /* EJEMPLO DE COMO HACER LA PETICIÓN SIN AXIOS */
    /* register({ commit }, user) {
      
      --commit: una función que se utiliza para commitar (confirmar) cambios en el estado de la aplicación.-- 
     return fetch('http://localhost:3000/api/users/registrar', {
       headers: {
         'Content-Type': 'application/json',
         Accept: "aplication/json"
       },
       method: 'POST',
       body: JSON.stringify(user)
     })
       .then((res) => res.json())
        --se utiliza la función commit para commitar el usuario registrado en el estado de la aplicación. Se llama a la mutación setUser y se pasa el objeto res como parámetro. --
       .then((res) => {
         commit('setUser', res)
         return res
       })
   } */
  },
  modules: {}
})

export default store
