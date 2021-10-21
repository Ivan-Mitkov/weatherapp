import React from "react";
import HourWeatherContainer from "../../containers/HourWeatherContainer";
import styles from "./styles.module.scss";

const DaylyForecast = () => {
  return (
    <div className={styles.screen}>
      <HourWeatherContainer />
    </div>
  );
};

export default DaylyForecast;
