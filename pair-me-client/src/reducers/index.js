import {
    TESTING,
    TEST_SUCCESS,
    TEST_FAILURE,
    ERROR
    } from '../actions/index';

const initialState = {
    isLoggedIn: false,
    error: null,
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state;
    }
}