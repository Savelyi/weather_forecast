// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function DataFetched(data) {
    return data !== null;
}

function BaseWeather() {
    const currentCity = useSelector((state) => state.city.name);
    const weather = useSelector((state) =>
        DataFetched(state.city.data) ? state.city.data.weather[0].main : ''
    );

    const temp = useSelector((state) =>
        DataFetched(state.city.data) ? state.city.data.main.temp : ''
    );

    const tempFeelsLike = useSelector((state) =>
        DataFetched(state.city.data) ? state.city.data.main.feels_like : ''
    );
    const visibility = useSelector((state) =>
        DataFetched(state.city.data) ? state.city.data.visibility : ''
    );
    const windSpeed = useSelector((state) =>
        DataFetched(state.city.data) ? state.city.data.wind.speed : ''
    );
    return (
        <div hidden={DataFetched}>
            <h1>{currentCity}</h1>
            <h1>weather: {weather}</h1>
            <h1>temp: {temp}</h1>
            <h1>tempFeelsLike: {tempFeelsLike}</h1>
            <h1>visibility: {visibility}m</h1>
            <h1>windSpeed: {windSpeed}</h1>
        </div>
    );
}

export default BaseWeather;
