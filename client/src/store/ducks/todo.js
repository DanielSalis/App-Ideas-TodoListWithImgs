export const Types = {
    SET_ALL_TODOS: 'auth/SET_ALL_TODOS'
}

const INITIAL_STATE = {
    list: null,
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_ALL_TODOS:
            return {
                ...state,
                list: action.payload
            };

        default:
            return state
    }
}

export const Actions = {
    setAllTodos: (data) => ({
        type: Types.SET_ALL_TODOS,
        payload: data
    })
}