// import SetWeatherForCity from '../../helpers/setWeatherForCity';

const defaultState = {
    name: ' ',
    data: {},
};

export const cityForecast = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CITY':
            return { ...state, name: action.city, data: action.data };
        default:
            return state;
    }
};
