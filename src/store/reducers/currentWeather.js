const defaultState = {
    data: null,
};

export const currentWeather = (state = defaultState, action) => {
    switch (action.type) {
        case 'CURRENT':
            return { ...state, data: action.data };
        default:
            return state;
    }
};
