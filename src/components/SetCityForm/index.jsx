import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetCurrentWeather from '../../helpers/GetCurrentWeather';
import GetWeatherForecast from '../../helpers/GetWeatherForecast';
import { Weather } from '../../constants/weather';
import { weatherForecastData } from '../../store/actions/weatherForecastData';
import { currentWeatherData } from '../../store/actions/currentWeatherData';
import { changeCity } from '../../store/actions/changeCity';
import { CityInput, SearchButton, Wrapper } from './styled';

function SetCityForm() {
    const [city, setCity] = useState('');

    const dispatch = useDispatch();
    const stateCityName = useSelector((state) => state.city.name);
    const service = useSelector((state) => state.service.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '' || stateCityName === city) {
            return;
        }

        switch (service) {
            case Weather.CURRENT:
                GetCurrentWeather(city).then((res) => {
                    dispatch(changeCity(res.name));
                    dispatch(currentWeatherData(res));
                });
                break;
            case Weather.FORECAST:
                GetWeatherForecast(city).then((res) => {
                    dispatch(changeCity(res.city_name));
                    dispatch(weatherForecastData(res));
                });
                break;
            default:
        }
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Wrapper>
                <CityInput
                    placeholder="Search"
                    value={city}
                    onChange={handleChange}
                />
                <SearchButton>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/966/966642.png"
                        alt=""
                    />
                </SearchButton>
            </Wrapper>
        </form>
    );
}

export default SetCityForm;
