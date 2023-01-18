import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function BaseWeather() {
    const [dataFetched, setDataFetched] = useState(false);
    const { name, data } = useSelector((state) => state.city);
    
    useEffect(() => {
        if (data !== null) {
            setDataFetched(true);
        }
    }, []);

    return dataFetched ? (
        <div>
            <h1>{name}</h1>
            <h1>weather: {data.weather[0].main}</h1>
            <h1>temp: {data.main.temp}</h1>
            <h1>tempFeelsLike: {data.main.feels_like}</h1>
            <h1>visibility: {data.visibility}m</h1>
            <h1>windSpeed: {data.wind.speed}m/s</h1>
        </div>
    ) : (
        <div />
    );
}

export default BaseWeather;
