export const TEST_SUCCESS = 'TEST_SUCCESS'
export const TEST_FAILURE = 'TEST_FAILURE'
export const TESTING = 'TESTING'
export const ERROR = 'ERROR'

// Login/Logout Dispatches
export const LOGGING_OUT = 'LOGGING_OUT'
export const LOGGED_OUT = 'LOGGED_OUT'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGING_IN = 'LOGGING_IN'


export const STORING_QUEUES = 'STORING_QUEUES';
export const QUEUES_STORED = 'QUEUES_STORED';

// Register Dispatches
export const REGISTER = 'REGISTER'

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    console.log('LOGGED OUT');
    dispatch({ type: LOGGED_OUT })
  }
}

export const login = ({ email, access_token, name }) => {
  return dispatch => {
    localStorage.setItem('access_token', access_token)
    dispatch({ type: LOGGED_IN, payload: { email, access_token, name } })
  }
}

export const storeLocally = (data) => {
  return dispatch => {
    // store the current user
    dispatch({type: STORING_QUEUES})
    localStorage.setItem('username', data.data.user.name);
    localStorage.setItem('token', data.data.access_token);
    console.log(data.data.access_token);
    if(data.s_queue || data.t_queue){
      dispatch({type: QUEUES_STORED, payload: {student: data.s_queue, teacher: data.t_queue, username: data.data.user.name, avatar: data.data.image_192, email: data.data.email, id: data.data.id}})
      console.log('test for js', data.t_queue.js)
    } else {
      dispatch({type: ERROR})
    }
  }
}