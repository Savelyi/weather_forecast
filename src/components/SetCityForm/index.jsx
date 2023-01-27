import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Weather } from '../../constants/weather';
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

        dispatch(changeCity(city));
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
