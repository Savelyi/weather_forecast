const defaultState = {
    data: null,
};

export const userEvents = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_EVENTS':
            console.log(action);
            return { ...state, data: action.events };
        default:
            return state;
    }
};