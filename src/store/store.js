import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { weatherForecastReducer } from "./reducers/weatherForecastReducer";
import { cityReducer } from "./reducers/cityReducer";

const reducer = combineReducers({
  weather: weatherForecastReducer,
  city: cityReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
