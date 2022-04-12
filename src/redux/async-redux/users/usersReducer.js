import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_ERROR
} from './usersTypes'

const initialState = {
    loading: false,
    data: [],
    error: false,
    errorMsg: ""
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.payload
            }

        default: return state;
    }
}

export default usersReducer;