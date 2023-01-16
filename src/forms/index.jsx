import { useState } from 'react';
import GetWeather from '../helpers/GetWeather';

function SetCityForm() {
    const [city, setCity] = useState('');
    // const [isCityFound, setIsCityFound] = useState(true);
    // const [currentCity, setCurrentCity] = useState('');
    const handleClick = (e) => {
        e.preventDefault();

        if (city.trim() === '') {
            return;
        }

        // axios
        //     .get('https://api.openweathermap.org/data/2.5/weather', {
        //         params: {
        //             q: city,
        //             appid: apiKey,
        //         },
        //     })
        //     .catch((error) => {
        //         if (error.response.status === 404) {
        //             setIsCityFound(false);
        //             setCurrentCity('');
        //         }
        //         console.log(error.message);
        //     })
        //     .then((response) => {
        //         setCurrentCity(response.data.name);
        //         // setIsCityFound(true);
        //     });
        const dataPromise = GetWeather(city);
        console.log(dataPromise);
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <form onSubmit={handleClick}>
            <input value={city} onChange={handleChange} />
            {/* <h1>{currentCity}</h1> */}
            {/* <h1 hidden={isCityFound}>City not found</h1> */}
            <button type="submit">find</button>
        </form>
    );
}

export default SetCityForm;
