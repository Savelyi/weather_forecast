import axios from 'axios';
import { changeCity } from '../store/actions/changeCity';
import { apiWeatherUrl } from '../constants/apiUrls';

function GetWeather(city, dispatch) {
    return axios
        .get(apiWeatherUrl, {
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

export default GetWeather;
