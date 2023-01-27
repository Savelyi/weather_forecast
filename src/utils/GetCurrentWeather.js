import axios from 'axios';
import { apiDailyWeatherUrl } from '../constants/apiUrls';

function GetCurrentWeather(city) {
    return axios
        .get(apiDailyWeatherUrl, {
            params: {
                q: city,
                appid: process.env.REACT_APP_API_WEATHER_KEY,
                units: 'metric',
            },
        })
        .catch((error) => error.response)
        .then((response) => response);
}

export default GetCurrentWeather;
