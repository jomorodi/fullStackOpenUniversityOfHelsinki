import WeatherRequest from './service/WeatherRequest'
import { useEffect, useState } from 'react'

const Weather = ({cityName}) => {
    const [geoCode, setGeoCode] = useState({})
    const [weatherData, setWeatherData] = useState({})

    useEffect(() =>{
        let geoPromise = WeatherRequest.getGeoCode(cityName);
    
        geoPromise.then ((response) => {
            console.log(response, "geocodeResponse"); return response}).then(
                (response) => {
                    return WeatherRequest.getWeather(response.lat, response.lon);
                }
            ).then ((response) =>  setWeatherData(response))
    }, [cityName])
   
    /* let weatherPromise = WeatherRequest.getWeather(geoCode.lat, geoCode.lon)
    weatherPromise.then ((response) => {console.log(response, "weather response"); setWeatherData(response);})
    
    console.log(geoCode.lon, geoCode.lat, geoCode, "printiing out geocode") */
    if (Object.keys(weatherData).length === 0) return null;
    else
    {
    return (
        <div>
            <h2>Weather in {cityName}</h2>

            <p>temperature {weatherData.main.temp} celsius</p>
            <img  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
            <p>wind {weatherData.wind.speed} m/s</p>
        </div>
    )
}
}

export default Weather