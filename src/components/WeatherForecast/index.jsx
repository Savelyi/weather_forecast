import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment/moment';
import { weatherForecastData } from '../../store/actions/weatherData';
import GetWeatherForecast from '../../utils/GetWeatherForecast';
import { Wrapper } from './styled';
import Loader from '../Loader';

function WeatherForecast() {
    const city = useSelector((state) => state.city.name);
    const data = useSelector((state) => state.forecast.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (city === null || (data !== null && data.city_name === city)) return;
        GetWeatherForecast(city).then((res) => {
            dispatch(weatherForecastData(res));
        });
    }, [city]);

    return data === null || data.city_name !== city ? (
        <Loader />
    ) : (
        <Wrapper>
            <h1>{city}</h1>
            <ul>
                {data.data.map((dayWeather) => (
                    <li key={dayWeather.valid_date}>
                        <div>
                            <img
                                src={`https://www.weatherbit.io/static/img/icons/${dayWeather.weather.icon}.png`}
                                alt={`${dayWeather.weather.code}`}
                            />
                            <h3> Weather: {dayWeather.weather.description}</h3>
                            <h3>
                                Temp:
                                {dayWeather.temp}&#176;C
                            </h3>
                            <h3>
                                Date:{' '}
                                {moment(dayWeather.valid_date).format(
                                    'DD-MM dddd'
                                )}
                            </h3>
                        </div>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}

export default WeatherForecast;
