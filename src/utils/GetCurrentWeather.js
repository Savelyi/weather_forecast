import axios from 'axios';
import { apiUrls } from '../constants/apiUrls';
import { apiKeys } from '../constants/apiKeys';

function GetCurrentWeather(city) {
    return axios
        .get(apiUrls.apiCurrentWeather, {
            params: {
                q: city,
                appid: apiKeys.current_weather_key,
                units: 'metric',
            },
        })
        .catch((error) => error.response)
        .then((response) => response);
}

export default GetCurrentWeather;
