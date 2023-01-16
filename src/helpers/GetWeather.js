import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { apiWeatherKey } from '../constants/apiKeys';
import { changeCity } from '../store/actions/changeCity';

function GetWeather(city, dispatch) {
    return axios
        .get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: apiWeatherKey,
            },
        })
        .then((response) =>
            dispatch(changeCity(response.data.name, response.data))
        );
}

export default GetWeather;
