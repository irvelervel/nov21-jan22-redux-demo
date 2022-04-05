import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actions'
import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
  // to never risk to have state === undefined, especially in the initial loading of redux,
  // default the first argument of the reducer with the initialState
  switch (action.type) {
    // action.type is the only MANDATORY PROPERTY of every action
    // it's a string!

    case INCREMENT_COUNTER:
      return {
        ...state, // this is carrying in ALL the properties of the actual state
        count: state.count + 1,
      }

    case DECREMENT_COUNTER:
      return {
        // always return the WHOLE state initially
        ...state,
        count: state.count - 1,
      }

    default:
      return state
  }
}

export default mainReducer
