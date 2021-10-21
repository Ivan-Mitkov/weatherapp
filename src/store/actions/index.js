import axios from "axios";
import * as data from "../../exampleCall.json";
import {
  WEATHER_DETAILS_REQUEST,
  WEATHER_DETAILS_SUCCESS,
  WEATHER_DETAILS_FAIL,
  UPDATE_CITY,
} from "../types";

export const getWeatherDetail =
  (lat = 42.697708, lon = 23.321867) =>
  async (dispatch) => {
    try {
      dispatch({ type: WEATHER_DETAILS_REQUEST });
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process?.env?.REACT_APP_API_KEY}`
      );
      dispatch({ type: WEATHER_DETAILS_SUCCESS, payload: data });
      // console.log(data);
      // dispatch({ type: WEATHER_DETAILS_SUCCESS, payload: data.default });
    } catch (error) {
      dispatch({
        type: WEATHER_DETAILS_FAIL,
        payload: error.message,
      });
    }
  };

export const updateCity = (option) => (dispatch) => {
  dispatch({ type: UPDATE_CITY, payload: option });
};
