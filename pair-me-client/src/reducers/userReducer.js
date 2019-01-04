import { LOGGED_IN, LOGGED_OUT } from '../actions/index'

const initialState = {
  email: null,
  access_token: null,
  name: null,
  isLoggedIn: false,
  error: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      const newState = { ...state, ...action.payload }
      newState.isLoggedIn = true
      return newState
    case LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
