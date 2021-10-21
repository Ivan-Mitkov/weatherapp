import React from "react";
import ForecastInfoContainer from "../../containers/ForecastInfoContainer";
import CurrentWeatherContainer from "../../containers/CurrentWeatherContainer";
import styles from "./styles.module.scss";

const CurrentWeather = () => {
  return (
    <div className={styles.screen}>
      <CurrentWeatherContainer />
      <ForecastInfoContainer />
    </div>
  );
};

export default CurrentWeather;
