import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Weather } from '../../constants/weather';
import GetUserLocation from '../../utils/GetUserLocation';
import { changeCity } from '../../store/actions/changeCity';
import CurrentWeather from '../CurrentWeather';
import WeatherForecast from '../WeatherForecast';

function BaseWeather() {
    const city = useSelector((state) => state.city.name);
    const service = useSelector((state) => state.service);
    const dispatch = useDispatch();

    useEffect(() => {
        if (city === null) {
            GetUserLocation().then((res) => dispatch(changeCity(res)));
        }
    }, []);

    switch (service.name) {
        case Weather.CURRENT:
            return <CurrentWeather />;
        case Weather.FORECAST:
            return <WeatherForecast />;
        default:
            return null;
    }
}

export default BaseWeather;
