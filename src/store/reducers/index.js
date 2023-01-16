import { combineReducers } from 'redux';
import { cityForecast } from './cityForecast';

export default combineReducers({
    city: cityForecast,
});
