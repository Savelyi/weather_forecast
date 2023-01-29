import axios from 'axios';
import { apiKeys } from '../constants/apiKeys';
import { apiUrls } from '../constants/apiUrls';

function GetWeatherForecast(cityName) {
    return axios
        .get(apiUrls.apiForecast, {
            params: {
                key: apiKeys.weather_forecast_key,
                city: cityName,
                days: 5,
                units: 'M',
            },
        })
        .then((res) => res.data);
}

export default GetWeatherForecast;
