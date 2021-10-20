import {
  WEATHER_DETAILS_REQUEST,
  WEATHER_DETAILS_SUCCESS,
  WEATHER_DETAILS_FAIL,
} from "../types";

const initialState = { data: {}, error: "", loading: "" };
export const weatherForecastReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WEATHER_DETAILS_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case WEATHER_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case WEATHER_DETAILS_SUCCESS:
      return {
        data: { ...payload },
        error: "",
        loading: false,
      };
    default:
      return state;
  }
};
