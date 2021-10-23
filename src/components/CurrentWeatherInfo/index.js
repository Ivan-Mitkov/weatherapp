import React from "react";
import moment from "moment";
import WeatherIcon from "../WeatherIcon";
import styles from "./styles.module.scss";
const CurrentWeatherInfo = ({
  temperature,
  feelsLike,
  windSpeed,
  humidity,
  sunrise,
  sunset,
  weather,
}) => {
  let weatherCondition = "";
  let code = "";
  if (weather) {
    weatherCondition = weather[0].main;
    code = weather[0].id;
  }

  return (
    <div className={styles.current}>
      <div className={styles.currentIcon}>
        <WeatherIcon big code={code} />
        <div>
          {temperature}
          <span>&#176;C </span>
        </div>
      </div>

      <div>{weatherCondition}</div>
      <div>
        Усеща се като {feelsLike}
        <span>&#176;C </span>
      </div>
      <div className={styles.extras}>
        <div>
          {humidity}
          <span>%</span>
        </div>
        <div>
          {windSpeed}
          <span>м/с</span>
        </div>
        <div>Изгрев {moment(sunrise).format("HH:mm")}</div>
        <div>Залез {moment(sunset).format("HH:mm")}</div>
      </div>
    </div>
  );
};

export default CurrentWeatherInfo;
