import axios from 'axios'
import { useEffect, useState } from 'react'

const Weather = (props) => {
    const [weather, setWeather] = useState(null)

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${props.capitol}&appid=${api_key}&units=metric`)
            .then(respose => {
                setWeather(respose.data)
            })
    })

    return (
        <div>
            <h1>Weather in {weather.name}</h1>
            <div>Temperature {weather.main.temp} Celcius</div>
            <div>
                {<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"></img>}
            </div>
            <div>
                wind {weather.wind.speed} m/s
            </div>
        </div>
    )
}

export default Weather