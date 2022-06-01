import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from './root.reducer'


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store; 
