import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { apiKey } from '../constants/apiKey';
// import { changeCity } from '../store/actions/changeCity';

function GetWeather(city) {
    // const dispatch = useDispatch();
    return axios
        .get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: apiKey,
            },
        })
        .then(
            (response) =>
                // dispatch(changeCity(response.data.name, response.data));
                response.data
        );

    // .catch((error) => {
    //     console.log(error.message);
    // });
}

export default GetWeather;
