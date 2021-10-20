import React from "react";
import moment from "moment";
const CurrentWeatherInfo = ({
  temperature,
  feelsLike,
  windSpeed,
  sunrise,
  sunset,
  weather,
}) => {
  let weatherCondition = "";
  if (weather) {
    weatherCondition = weather[0].main;
  }
  return (
    <div>
      <div>В момента</div>
      <div>
        {temperature}
        <span>&#176;C </span>
      </div>
      <div>{weatherCondition}</div>
      <div>
        Усеща се като {feelsLike}
        <span>&#176;C </span>
      </div>
      <div>
        {windSpeed}
        <span>м/с</span>
      </div>
      <div>Изгрев {moment(sunrise).format("LT")}</div>
      <div>Залез {moment(sunset).format("LT")}</div>
    </div>
  );
};

export default CurrentWeatherInfo;
