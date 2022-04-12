import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_ERROR
} from './usersTypes';

export const fetchUsersRequest = () => {
    return { type: FETCH_USERS_REQUEST };
}

export const fetchUsersSuccess = () => {
    return { type: FETCH_USERS_SUCCESS };
}

export const fetchUsersFailure = () => {
    return { type: FETCH_USERS_ERROR };
}