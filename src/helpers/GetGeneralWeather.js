import axios from 'axios';
// import { changeCity } from '../store/actions/changeCity';
import {
    apiGeneralWeatherUrl,
    apiLatAndLonByCityName,
} from '../constants/apiUrls';

function GetGeneralWeather(city) {
    axios
        .get(apiLatAndLonByCityName, {
            params: {
                q: city,
                limit: 1,
                appid: process.env.REACT_APP_API_WEATHER_KEY,
            },
        })
        .then((response) => {
            console.log(response.data[0]);
            axios
                .get(apiGeneralWeatherUrl, {
                    params: {
                        lat: response.data[0].lat,
                        lon: response.data[0].lon,
                        cnt: 5,
                        appid: process.env.REACT_APP_API_WEATHER_KEY,
                        units: 'metric',
                    },
                })
                .then((res) => console.log(res));
        });
}

export default GetGeneralWeather;
