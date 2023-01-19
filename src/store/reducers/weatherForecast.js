const defaultState = {
    data: null,
};

export const weatherForecast = (state = defaultState, action) => {
    switch (action.type) {
        case 'FORECAST':
            return { ...state, data: action.data };
        default:
            return state;
    }
};