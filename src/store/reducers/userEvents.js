const defaultState = {
    data: null,
};

export const userEvents = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_EVENTS':
            return { ...state, data: action.events };
        default:
            return state;
    }
};
