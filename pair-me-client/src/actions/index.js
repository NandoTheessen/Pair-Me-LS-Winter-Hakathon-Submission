import axios from 'axios';

export const TEST_SUCCESS = 'TEST_SUCCESS';
export const TEST_FAILURE = 'TEST_FAILURE';
export const TESTING = 'TESTING';
export const ERROR = 'ERROR';

// Login/Logout Dispatches
export const LOGGING_OUT = 'LOGGING_OUT';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING_IN = 'LOGGING_IN';

export const testAPI = () => {
    const sendTest = axios.get(`https://localhost:8000/api/`);

    return dispatch => {
        dispatch({type: TESTING});

        sendTest.then(res => {
            if(res.status == 200){
                console.log('Success!')
                dispatch({type: TEST_SUCCESS})
            } else {
                dispatch({type: TEST_FAILURE})
            }
        }).catch(err => {
            console.log(err);
            dispatch({type: ERROR})
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({type: LOGGING_OUT});
        // this is where we will remove the JWT from localstorage

        dispatch({type: LOGGED_OUT});

        window.location.href = '/';
    }
}

export const login = (user) => {
    return dispatch => {
        dispatch({type: LOGGING_IN});

        dispatch({type: LOGGED_IN});

        console.log('Logged In: ', user);
    }
}