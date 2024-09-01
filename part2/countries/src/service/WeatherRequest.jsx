import axios from 'axios'
const geoCodeBaseUrl = 'http://api.openweathermap.org'
const weatherBaseUrl = 'https://api.openweathermap.org'

const api_key = import.meta.env.VITE_SOME_KEY

const getGeoCode = (cityName) => {
    const request = axios.get(`${geoCodeBaseUrl}/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_key}`)

    return request.then(response => response.data[0])
  }

const getWeather = (lat, lon) => {

     const request = axios.get(`${weatherBaseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
     return request.then(response => response.data)
}

export  default {getGeoCode, getWeather}