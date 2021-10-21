import React from "react";
import moment from "moment";
import styles from "./styles.module.scss";
const HourWeatherInfo = ({
  day,
  temperature,
  feelsLike,
  windSpeed,
  windDegree,
  humidity,
  pressure,
}) => {
 
  return (
    <div className={styles.current}>
      <div>{moment(day).format("HH")}:00</div>
      <div>
        {temperature}
        <span>&#176;C </span>
      </div>
      
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
       
      </div>
    </div>
  );
};

export default HourWeatherInfo;
