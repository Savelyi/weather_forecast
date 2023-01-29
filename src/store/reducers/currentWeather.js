import { actionTypes } from '../../constants/actionTypes';

const defaultState = {
    data: null,
};

export const currentWeather = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CURRENT:
            return { ...state, data: action.data };
        default:
            return state;
    }
};
