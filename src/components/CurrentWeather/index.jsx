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
        const getData = GetCurrentWeather(city);

        getData.then((res) => {
            dispatch(currentWeatherData(res));
        });

        console.log(`useEffect entry Current Weather`);
    }, [city]);

    return data !== null ? (
        <div>
            <h1>{city}</h1>
            <h1>weather: {data.weather[0].main}</h1>
            <h1>temp: {data.main.temp}</h1>
            <h1>tempFeelsLike: {data.main.feels_like}</h1>
            <h1>visibility: {data.visibility}m</h1>
            <h1>windSpeed: {data.wind.speed}m/s</h1>
        </div>
    ) : (
        <div />
    );
}

export default CurrentWeather;
