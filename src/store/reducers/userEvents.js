import { actionTypes } from '../../constants/actionTypes';

const defaultState = {
    data: null,
};

export const userEvents = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.USER_EVENTS:
            return { ...state, data: action.events };
        default:
            return state;
    }
};
