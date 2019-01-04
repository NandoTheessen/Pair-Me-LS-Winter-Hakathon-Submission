export const TEST_SUCCESS = 'TEST_SUCCESS'
export const TEST_FAILURE = 'TEST_FAILURE'
export const TESTING = 'TESTING'
export const ERROR = 'ERROR'

// Login/Logout Dispatches
export const LOGGING_OUT = 'LOGGING_OUT'
export const LOGGED_OUT = 'LOGGED_OUT'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGING_IN = 'LOGGING_IN'

// Register Dispatches
export const REGISTER = 'REGISTER'

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGGED_OUT })
  }
}

export const login = ({ email, access_token, name }) => {
  return dispatch => {
    localStorage.setItem('access_token', access_token)
    dispatch({ type: LOGGED_IN, payload: { email, access_token, name } })
  }
}
