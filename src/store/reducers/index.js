import { combineReducers } from 'redux';
import { dailyForecast } from './dailyForecast';
import { generalForecast } from './generalForecast';
import { weatherService } from './weatherService';
import { authReducer } from './authReducer';

export default combineReducers({
    daily: dailyForecast,
    general: generalForecast,
    user: authReducer,
    service: weatherService,
});
