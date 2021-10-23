import axios from "axios";
import * as data from "../../exampleCall.json";
import {
  WEATHER_DETAILS_REQUEST,
  WEATHER_DETAILS_SUCCESS,
  WEATHER_DETAILS_FAIL,
  UPDATE_CITY,
  CREATE_METRICS_REQUEST,
  CREATE_METRICS_SUCCESS,
  CREATE_METRICS_FAIL,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../types";

export const getWeatherDetail =
  (lat = 42.697708, lon = 23.321867) =>
  async (dispatch) => {
    try {
      // dispatch({ type: WEATHER_DETAILS_REQUEST });
      // const { data } = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process?.env?.REACT_APP_API_KEY}`
      // );
      // dispatch({ type: WEATHER_DETAILS_SUCCESS, payload: data });
      // console.log(data);
      dispatch({ type: WEATHER_DETAILS_SUCCESS, payload: data.default });
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

export const createMetrics = (metrics) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_METRICS_REQUEST });
    console.log(metrics);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://api.openweathermap.org/data/3.0/measurements?station_id=${process.env.REACT_APP_STATION_ID}&appid=${process.env.REACT_APP_API_KEY}`,
      metrics,
      config
    );
    console.log("ACTION DATA", data);
    dispatch({ type: CREATE_METRICS_SUCCESS, payload: data });
  } catch (error) {
    console.log("ACTION ERROR", error);

    dispatch({
      type: CREATE_METRICS_FAIL,
      payload: "error",
    });
  }
};

export const openModal = () => (dispatch) => {
  dispatch({ type: OPEN_MODAL });
};
export const closeModal = () => (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
};
