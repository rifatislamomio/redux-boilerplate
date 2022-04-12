import axios from 'axios';
import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_ERROR
} from './usersTypes';

export const fetchUsersRequest = () => {
    return { type: FETCH_USERS_REQUEST };
}

export const fetchUsersSuccess = (users) => {
    return { type: FETCH_USERS_SUCCESS, payload: users };
}

export const fetchUsersFailure = (errMsg) => {
    return { type: FETCH_USERS_ERROR, payload: errMsg };
}


//or do this using useEffect
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(err => {
                const errorMessage = err.message;
                dispatch(fetchUsersFailure(errorMessage));
            })
    }
}