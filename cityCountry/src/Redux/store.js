import { legacy_createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CityReducer } from "./CityAction/reducer";
import { CountryReducer } from "./CountryAction/reducer";

const rootReducer = combineReducers({
  country: CountryReducer,
  city: CityReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
