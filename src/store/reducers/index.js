import { combineReducers } from 'redux';
import { cityForecastReducer } from './cityForecast';
import { authReducer } from './authReducer';

export default combineReducers({
    city: cityForecastReducer,
    user: authReducer,
});
