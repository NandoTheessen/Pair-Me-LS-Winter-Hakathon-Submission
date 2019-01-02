import axios from 'axios';

export const TEST_SUCCESS = 'TEST_SUCCESS';
export const TEST_FAILURE = 'TEST_FAILURE';
export const TESTING = 'TESTING';
export const ERROR = 'ERROR';

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