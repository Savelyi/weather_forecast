import { Weather } from '../../constants/weather';

const defaultState = {
    name: Weather.CURRENT,
};

export const weatherService = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_WEATHER_SERVICE':
            return { ...state, name: action.service };
        default:
            return state;
    }
};
