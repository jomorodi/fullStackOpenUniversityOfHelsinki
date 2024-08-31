
import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}
const get = (country) => {
    const request = axios.get(`${baseUrl}/${country}`)
    return request.then(response => response.data)
  }

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteCountry = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    
    return request.then(response =>  response.data )
  }

export default { 
  getAll: getAll, 
  get:get,
  create: create, 
  update: update,
  deleteCountry:deleteCountry 
}