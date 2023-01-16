// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function BaseWeather() {
    const [dataFetched, setDataFetched] = useState(false);
    const cityWeatherData = useSelector((state) => state.city);

    useEffect(() => {
        if (cityWeatherData.data !== null) {
            setDataFetched(true);
        }
    }, [cityWeatherData]);

    return dataFetched ? (
        <div>
            <h1>{cityWeatherData.name}</h1>
            <h1>weather: {cityWeatherData.data.weather[0].main}</h1>
            <h1>temp: {cityWeatherData.data.main.temp}</h1>
            <h1>tempFeelsLike: {cityWeatherData.data.main.feels_like}</h1>
            <h1>visibility: {cityWeatherData.data.visibility}m</h1>
            <h1>windSpeed: {cityWeatherData.data.wind.speed}</h1>
        </div>
    ) : (
        <div />
    );
}

export default BaseWeather;
