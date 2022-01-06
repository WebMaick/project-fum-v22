import { authReducer } from "../reducers/authReducer"

const { createStore, combineReducers, compose } = require("redux")

const reducers = combineReducers({
  auth: authReducer,
})

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export const store = createStore(reducers, composeEnhancers)
