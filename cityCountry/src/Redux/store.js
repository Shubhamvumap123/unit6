import { legacy_createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { CityReducer } from "./CityAction/reducer";
import { CountryReducer } from "./CountryAction/reducer";
import logger from "redux-logger";

const middleware = {Thunk};

if(process.env.NODE_ENV === 'development'){

    middleware.push(logger)

}

const rootReducer = combineReducers({
  country: CountryReducer,
  city: CityReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;
