import React from "react";
import moment from "moment";
import WeatherIcon from "../WeatherIcon";
import styles from "./styles.module.scss";
import { calculateDirection } from "../../utils";
import { ReactComponent as Wind } from "../../resources/icons/wind.svg";
const HourWeatherInfo = ({
  day,
  temperature,
  feelsLike,
  windSpeed,
  windDegree,
  humidity,
  pressure,
  weather,
}) => {
  const direction = calculateDirection(windDegree);
  let code = "";
  if (weather) {
    code = weather[0].id;
  }
  return (
    <div className={styles.container}>
      <div className={styles.current}>
        <div>{moment(day).format("HH")}:00</div>
        <div>{moment(day).format("DD.MM.YYYY")}</div>
        <div>
          <WeatherIcon code={code} />
        </div>
        <div>
          {temperature}
          <span>&#176;C </span>
        </div>
        <div>
          <Wind style={{ width: "30px", height: "30px" }} />
        </div>
        <div>
          {windSpeed} м/с
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
    </div>
  );
};

export default HourWeatherInfo;
