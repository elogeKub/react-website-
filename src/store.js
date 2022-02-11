import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducerData from "./redux/reducerData";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support tfor redux devtools
const rootReducer = combineReducers({
  reducerData,
});
export const Store = createStore(rootReducer, applyMiddleware(thunk));
