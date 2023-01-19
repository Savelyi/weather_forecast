import { Weather } from "../../constants/weather";

const defaultState = {
    name: Weather.DAILY,
};

export const weatherService = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_WEATHER_SERVICE':
            console.log(action);
            return { ...state, name: action.service };
        default:
            return state;
    }
};
