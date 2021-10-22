import React from "react";
import moment from "moment";
import styles from "./styles.module.scss";
const ForecastInfo = ({ day, temperatureLow, temperatureHigh, weather }) => {
  let weatherMain = "";
  let weatherDescripion = "";

  if (weather) {
    weatherMain = weather[0].main;
    weatherDescripion = weather[0].description;
  }

  return (
    <div className={styles.container}>
      <div className={styles.forecast}>
        <div>{moment(day).format("dddd")}</div>
        <div>{moment(day).format("D.MM.yyyy")}</div>

        <div>{weatherMain}</div>
        <div>
          {temperatureLow}
          <span>&#176;</span>/{temperatureHigh}
          <span>&#176;</span>
        </div>
        <div>{weatherDescripion}</div>
      </div>
    </div>
  );
};

export default ForecastInfo;
