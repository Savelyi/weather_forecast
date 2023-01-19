const defaultState = {
    name: null,
};

export const changeCity = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CITY':
            return { ...state, name: action.name, };
        default:
            return state;
    }
};