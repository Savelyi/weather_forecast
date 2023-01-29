import { actionTypes } from "../../constants/actionTypes";

const defaultState = {
    data: null,
};

export const weatherForecast = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.FORECAST:
            return { ...state, data: action.data };
        default:
            return state;
    }
};
