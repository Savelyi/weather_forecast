import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetWeather from '../helpers/GetWeather';
import { changeCity } from '../store/actions/changeCity';

async function SetCityForm() {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const currentCity = useSelector((state) => state.city.name);
    console.log(currentCity);
    const handleClick = (e) => {
        e.preventDefault();

        if (city.trim() === '') {
            return;
        }
        const dataPromise = GetWeather(city);
        console.log(dataPromise);
        dispatch(changeCity(dataPromise.name, dataPromise));
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <form onSubmit={handleClick}>
            <input value={city} onChange={handleChange} />
            <h1>{currentCity}</h1>
            {/* <h1 hidden={isCityFound}>City not found</h1> */}
            <button type="submit">find</button>
        </form>
    );
}

export default SetCityForm;
