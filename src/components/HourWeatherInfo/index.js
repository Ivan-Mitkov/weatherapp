import React from "react";
import moment from "moment";
import styles from "./styles.module.scss";
import { calculateDirection } from "../../utils";
const HourWeatherInfo = ({
  day,
  temperature,
  feelsLike,
  windSpeed,
  windDegree,
  humidity,
  pressure,
}) => {
  const direction = calculateDirection(windDegree);
  return (
    <div className={styles.current}>
      <div>{moment(day).format("HH")}:00</div>
      <div>{moment(day).format("DD.MM.YYY")}</div>
      <div>
        {temperature}
        <span>&#176;C </span>
      </div>
      <div></div>
      <div>
        {feelsLike}
        <span>&#176;C </span>
      </div>
      <div>
        {windSpeed} м/с
        <span>&#176;C </span>
      </div>
      <div>{direction}</div>
      <div>{pressure} hPa</div>
      <div>
        {humidity}
        <span>%</span>
      </div>
    </div>
  );
};

export default HourWeatherInfo;
