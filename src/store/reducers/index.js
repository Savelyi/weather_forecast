import { combineReducers } from 'redux';
import { currentWeather } from './currentWeather';
import { weatherForecast } from './weatherForecast';
import { weatherService } from './weatherService';
import { changeCity } from './changeCity';
import { userEvents } from './userEvents';

export default combineReducers({
    city: changeCity,
    current: currentWeather,
    forecast: weatherForecast,
    service: weatherService,
    events: userEvents
});
