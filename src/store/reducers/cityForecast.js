const defaultState = {
    city: 'Moscow'
};

export const cityForecast = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CITY':
            return { ...state, city: action.city };
        default:
            return state;
    }
};