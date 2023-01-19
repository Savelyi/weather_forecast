import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Weather } from '../../constants/weather';
import GetUserLocation from '../../helpers/GetUserLocation';
import { changeCity } from '../../store/actions/changeCity';
import CurrentWeather from '../CurrentWeather/index';
import WeatherForecast from '../WeatherForecast';

function BaseWeather() {
    const city = useSelector((state) => state.city.name);
    const service = useSelector((state) => state.service);
    const dispatch = useDispatch();

    useEffect(() => {
        if (city === null) {
            const userCity = GetUserLocation();

            userCity.then((res) => dispatch(changeCity(res)));
        }
    }, []);

    switch (service.name) {
        case Weather.CURRENT:
            return <CurrentWeather />;
        case Weather.FORECAST:
            return <WeatherForecast />;
        default:
    }
}

export default BaseWeather;
