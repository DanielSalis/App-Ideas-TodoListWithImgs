export const Types = {
    REGISTER_SUCCESS: 'auth/REGISTER_SUCCESS',
    REGISTER_FAIL: 'auth/REGISTER_FAIL',

    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGOUT: 'auth/LOGOUT'
}

const INITIAL_STATE = {
    isAuthenticated: false,
    user: null,
    loading: true,
    token: localStorage.getItem('token')
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            };

        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            };

        case Types.LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loading: false,
                token: localStorage.getItem('token')
            }

        default:
            return state
    }
}

export const Actions = {
    registerSuccess: (data) => ({
        type: Types.REGISTER_SUCCESS,
        payload: data
    }),

    loginSuccess: (data) => ({
        type: Types.LOGIN_SUCCESS,
        payload: data
    }),

    logout: () => ({
        type: Types.LOGOUT,
    })
}