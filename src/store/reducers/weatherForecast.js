const defaultState = {
    data: null,
};

export const weatherForecast = (state = defaultState, action) => {
    switch (action.type) {
        case 'FORECAST':
            console.log(action);
            return { ...state, data: action.data };
        default:
            return state;
    }
};
