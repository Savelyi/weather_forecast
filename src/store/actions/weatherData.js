import { actionTypes } from '../../constants/actionTypes';

export const changeCity = (cityName) => ({
    type: actionTypes.CHANGE_CITY,
    name: cityName,
});

export const weatherForecastData = (data) => ({
    type: actionTypes.FORECAST,
    data,
});

export const currentWeatherData = (data) => ({
    type: actionTypes.CURRENT,
    data,
});

export const changeService = (weather) => ({
    type: actionTypes.CHANGE_WEATHER_SERVICE,
    service: weather,
});
