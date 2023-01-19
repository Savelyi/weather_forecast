import axios from 'axios';
import { changeCity } from '../store/actions/changeCity';
import { apiDailyWeatherUrl } from '../constants/apiUrls';

function GetDailyWeather(city, dispatch) {
    return axios
        .get(apiDailyWeatherUrl, {
            params: {
                q: city,
                appid: process.env.REACT_APP_API_WEATHER_KEY,
                units: 'metric',
            },
        })
        .then((response) =>
            dispatch(changeCity(response.data.name, response.data))
        );
}

export default GetDailyWeather;
