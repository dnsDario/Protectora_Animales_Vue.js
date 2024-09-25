import axios from 'axios'
import store from '../store/index.js'

const axiosClient = axios.create({
  baseURL:'http://localhost:3000/api/users'
});

axiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config
});

export default axiosClient

/* headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${store.state.user.token}`,
    Role: store.state.user.data.role
  } */ /* daba problemas de inicializacion de store */

/* {
  getusers(email) {
    return axiosClient.get(`/users?email=${email}`)
  },
  createuser(data) {
    return axiosClient.post(`/users/registrar`, data)
  },
  login(data) {
    return axiosClient.post(`/users/login`, data)
  },
  deleteuser(id){
    return axiosClient.delete(`/users/:${id}`)
  },
  modifyPassword(id, data){
    return axiosClient.patch(`/users/:${id}`, data)
  }
} */
