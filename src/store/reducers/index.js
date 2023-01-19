import { combineReducers } from 'redux';
import { currentWeather } from './currentWeather';
import { weatherForecast } from './weatherForecast';
import { weatherService } from './weatherService';
import { changeCity } from './changeCity';
import { authReducer } from './authReducer';

export default combineReducers({
    city: changeCity,
    current: currentWeather,
    forecast: weatherForecast,
    user: authReducer,
    service: weatherService,
});
