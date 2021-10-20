import axios from "axios";

import {
  WEATHER_DETAILS_REQUEST,
  WEATHER_DETAILS_SUCCESS,
  WEATHER_DETAILS_FAIL,
} from "../types";

export const getWeatherDetail = () => async (dispatch) => {
  try {
    dispatch({ type: WEATHER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=metric&appid=${process?.env?.REACT_APP_API_KEY}`
    );
    console.log(data);
    dispatch({ type: WEATHER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: WEATHER_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
