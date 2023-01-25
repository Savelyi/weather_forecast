import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetCurrentWeather from '../../helpers/GetCurrentWeather';
import { currentWeatherData } from '../../store/actions/currentWeatherData';

function CurrentWeather() {
    const city = useSelector((state) => state.city.name);
    const data = useSelector((state) => state.current.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (city === null || (data !== null && data.name === city)) return;
        GetCurrentWeather(city).then((res) => {
            dispatch(currentWeatherData(res));
        });

        console.log(`useEffect entry Current Weather`);
    }, [city]);

    return data !== null ? (
        <div>
            <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt={`${data.weather[0].id}`}
                width="150"
                height="150"
            />
            <h1>{data.name}</h1>
            <h3>weather: {data.weather[0].main}</h3>
            <h3>temp: {data.main.temp}</h3>
            <h3>tempFeelsLike: {data.main.feels_like}</h3>
            <h3>visibility: {data.visibility}m</h3>
            <h3>windSpeed: {data.wind.speed}m/s</h3>
        </div>
    ) : null;
}

export default CurrentWeather;
