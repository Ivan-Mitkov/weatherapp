import React from "react";

const CurrentWeatherInfo = ({
  temperature,
  feelsLike,
  windSpeed,
  sunrise,
  sunset,
  weather,
}) => {
  return (
    <div>
      <div>В момента</div>
      <div>{temperature}</div>
      <div>{feelsLike}</div>
      <div>{windSpeed}</div>
      <div>{sunrise}</div>
      <div>{sunset}</div>
      <div>{weather?.main}</div>
    </div>
  );
};

export default CurrentWeatherInfo;
