import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetWeather from '../helpers/GetWeather';
import GetUserLocation from '../helpers/GetUserLocation';

function SetCityForm() {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const stateCityName = useSelector((state) => state.city.name);

    useEffect(() => {
        if (stateCityName !== null) return;
        const userCity = GetUserLocation();
        userCity.then((res) => {
            GetWeather(res, dispatch);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '' || stateCityName === city) {
            return;
        }
        GetWeather(city, dispatch);
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={city} onChange={handleChange} />
                <button type="submit">find</button>
            </form>
        </div>
    );
}

export default SetCityForm;
