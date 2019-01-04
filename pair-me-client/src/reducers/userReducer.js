import { LOGGED_IN, LOGGED_OUT } from '../actions/index'

const initialState = {
  access_token: null,
  email: null,
  name: null,
  id: null,
  images: {
    image_24: null,
    image_32: null,
    image_48: null,
    image_72: null,
    image_192: null,
    image_512: null,
    image_1024: null
  },
  isLoggedIn: false,
  error: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      const newState = { ...state, ...action.payload }
      newState.images = { ...action.payload.images }
      newState.isLoggedIn = true
      return newState
    case LOGGED_OUT:
      return initialState
    default:
      return state
  }
}
