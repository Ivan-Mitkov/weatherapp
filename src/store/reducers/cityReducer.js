import { UPDATE_CITY } from "../types";

const initialState = {
  activeCity: "Sofia",
  lat: 42.697708,
  lon: 23.321867,
  favoriteCities: [
    {
      city: "London",
      lat: 51.507351,
      lon: -0.127758,
    },
    {
      city: "Paris",
      lat: 48.856613,
      lon: 2.352222,
    },
    {
      city: "Berlin",
      lat: 52.520008,
      lon: 13.404954,
    },
    {
      city: "Sofia",
      lat: 42.697708,
      lon: 23.321867,
    },
    {
      city: "Stockholm",
      lat: 59.329323,
      lon: 18.068581,
    },
    {
      city: "Rome",
      lat: 41.902782,
      lon: 12.496366,
    },
    {
      city: "Brussel",
      lat: 50.8505,
      lon: 4.3488,
    },
  ],
};
export const cityReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CITY:
      return {
        ...state,
        activeCity: payload.value.city,
        lat: payload.value.lat,
        lon: payload.value.lon,
      };

    default:
      return state;
  }
};
