import { createStore } from 'redux'
import mainReducer from '../reducers'

export const initialState = {
  count: 0,
}

// createStore takes up to 3 arguments:
// 1) the reducer function
// 2) the initial state of the application
// 3) an enhancer function, like a middleware

const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// the third argument check is for preventing a crash on a final user's browser,
// which most likely is NOT going to have the redux devTools ext. installed

export default configureStore
