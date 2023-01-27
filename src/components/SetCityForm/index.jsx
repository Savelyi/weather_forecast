import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Weather } from '../../constants/weather';
import { changeCity } from '../../store/actions/changeCity';
import { CityInput, SearchButton, Wrapper } from './styled';
import { changeService } from '../../store/actions/changeWeatherService';
import GetCurrentWeather from '../../utils/GetCurrentWeather';

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
            if (res.status > 299) {
                console.log(res.data.message);
                return;
            }
            dispatch(changeCity(res.data.name));
        });

        dispatch(changeService(Weather.CURRENT));

        setCity('');
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
