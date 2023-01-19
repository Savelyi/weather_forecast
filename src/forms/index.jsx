import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../store/actions/changeCity';

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
