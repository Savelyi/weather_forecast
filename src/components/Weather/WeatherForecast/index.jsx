import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { weatherForecastData } from '../../../store/actions/weatherForecastData';
import GetWeatherForecast from '../../../helpers/GetWeatherForecast';

function WeatherForecast() {
    const city = useSelector((state) => state.city.name);
    const data = useSelector((state) => state.forecast.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (city === null || (data !== null && data.city_name === city)) return;

        GetWeatherForecast(city).then((res) => {
            dispatch(weatherForecastData(res));
        });

        console.log(`useEffect entry Forecast Weather`);
    }, [city]);

    return data !== null ? (
        <div>
            <h1>{city}</h1>
            <ul>
                {data.data.map((dayWeather) => (
                    <li key={dayWeather.valid_date}>
                        Weather: {dayWeather.weather.description}, Temp:{' '}
                        {dayWeather.temp}C, Date: {dayWeather.valid_date}
                        <img
                            src={`https://www.weatherbit.io/static/img/icons/${dayWeather.weather.icon}.png`}
                            alt={`${dayWeather.weather.code}`}
                            width="100"
                            height="100"
                        />
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <div />
    );
}

export default WeatherForecast;
