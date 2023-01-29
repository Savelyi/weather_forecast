import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetCurrentWeather from '../../utils/GetCurrentWeather';
import { currentWeatherData } from '../../store/actions/weatherData';
import { Wrapper } from './styled';
import Loader from '../Loader';

function CurrentWeather() {
    const city = useSelector((state) => state.city.name);
    const data = useSelector((state) => state.current.data);
    const dispatch = useDispatch();

    const isFetched = data !== null && data.name === city;

    useEffect(() => {
        if (city === null || isFetched) {
            return;
        }
        GetCurrentWeather(city).then((res) => {
            dispatch(currentWeatherData(res.data));
        });
    }, [city]);

    return isFetched ? (
        <Wrapper>
            <h1 id="main">{data.name}</h1>
            <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt=""
            />
            <h1 id="temp">{data.main.temp}&#176;C</h1>
            <h2>{data.weather[0].main}</h2>
            <h6>
                Feels like: {data.main.feels_like}&#176;C, Visibility:{' '}
                {data.visibility}m, Wind speed: {data.wind.speed}m/s
            </h6>
        </Wrapper>
    ) : (
        <Loader />
    );
}

export default CurrentWeather;
