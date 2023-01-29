import { actionTypes } from '../../constants/actionTypes';

const defaultState = {
    name: null,
};

export const changeCity = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CITY:
            return { ...state, name: action.name };
        default:
            return state;
    }
};
