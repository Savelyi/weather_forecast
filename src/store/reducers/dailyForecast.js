// import SetWeatherForCity from '../../helpers/setWeatherForCity';

const defaultState = {
    name: null,
    data: null,
};

export const dailyForecast = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CITY':
            console.log(action);
            return { ...state, name: action.city, data: action.data };
        default:
            return state;
    }
};
