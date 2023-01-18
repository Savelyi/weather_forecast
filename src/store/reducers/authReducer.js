const defaultState = {
    isSignedIn: false,
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log(action);
            return { ...state, isSignedIn: true };
        case 'SIGN_OUT':
            console.log(action);
            return { ...state, isSignedIn: false };
        default:
            return state;
    }
};
