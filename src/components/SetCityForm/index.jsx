import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetCurrentWeather from '../../helpers/GetCurrentWeather';
import { Weather } from '../../constants/weather';
import { currentWeatherData } from '../../store/actions/currentWeatherData';
import { changeCity } from '../../store/actions/changeCity';
import { CityInput, SearchButton, Wrapper } from './styled';
import { changeService } from '../../store/actions/changeWeatherService';

function SetCityForm() {
    const [city, setCity] = useState('');

    const dispatch = useDispatch();
    const stateCityName = useSelector((state) => state.city.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '' || stateCityName === city) {
            return;
        }

        GetCurrentWeather(city).then((res) => {
            dispatch(changeCity(res.name));
            dispatch(currentWeatherData(res));
        });
        dispatch(changeService(Weather.CURRENT));
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
