import axios from 'axios'
import store from '../store/index.js'

const axiosClientAnimals = axios.create({
  baseURL:'http://localhost:3000/api/users'
});

axiosClientAnimals.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config
});

export default axiosClientAnimals

/* {
  getAnimals(query) {
    const queryString = Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&')
    return animals.get(`/animals?${queryString}`)
  },
  getAnimalById(id) {
    return animals.get(`/animals/:${id}`)
  },
  createAnimal(data) {
    return animals.post(`/animals`, data)
  },
  deleteAnimal(id){
    return animals.delete(`/animals/:${id}`)
  },
  modifyAnimal(id, data){
    return animals.put(`/animals/:${id}`, data)
  }
} */
