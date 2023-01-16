import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import GetWeather from '../helpers/GetWeather';
import GetUserLocation from '../helpers/GetUserLocation';

function SetCityForm() {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const userCity = GetUserLocation(setCity);
        userCity.then((res) => {
            GetWeather(res, dispatch);
        });
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (city.trim() === '') {
            return;
        }
        GetWeather(city, dispatch);
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleClick}>
                <input value={city} onChange={handleChange} />
                <button type="submit">find</button>
            </form>
        </div>
    );
}

export default SetCityForm;
