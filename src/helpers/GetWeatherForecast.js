import axios from 'axios';
// import { changeCity } from '../store/actions/changeCity';
import { apiGeneralWeatherUrl } from '../constants/apiUrls';

function GetWeatherForecast(cityName) {
    return axios
        .get(apiGeneralWeatherUrl, {
            params: {
                key: process.env.REACT_APP_API_WEATHER_FORECAST_KEY,
                city: cityName,
                days: 5,
                units: 'M',
            },
        })
        .then((res) => res.data);
}

export default GetWeatherForecast;
