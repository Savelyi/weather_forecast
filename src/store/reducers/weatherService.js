import { weather } from "../../constants/weather";
import { actionTypes } from "../../constants/actionTypes";

const defaultState = {
    name: weather.CURRENT,
};

export const weatherService = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_WEATHER_SERVICE:
            return { ...state, name: action.service };
        default:
            return state;
    }
};
