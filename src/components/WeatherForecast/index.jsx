import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { weatherForecastData } from '../../store/actions/weatherForecastData';
import GetWeatherForecast from '../../helpers/GetWeatherForecast';

function WeatherForecast() {
    const city = useSelector((state) => state.city.name);
    const data = useSelector((state) => state.forecast.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (city === null || (data !== null && data.city_name === city)) return;
        const getData = GetWeatherForecast(city);

        getData.then((res) => {
            console.log(res);
            dispatch(weatherForecastData(res));
        });

        console.log(`useEffect entry Forecast Weather`);
    }, [data === null, city]);

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
                            alt="Flowers in Chania"
                        />
                    </li>
                ))}
            </ul>
            <h1>Data fetched and showed</h1>
        </div>
    ) : (
        <div />
    );
}

export default WeatherForecast;
