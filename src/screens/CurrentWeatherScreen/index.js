import React from "react";
import ForecastInfoContainer from "../../containers/ForecastInfoContainer";
import CurrentWeatherContainer from "../../containers/CurrentWeatherContainer";
import styles from "./styles.module.scss";
import Dropdown from "../../containers/DropDownContainer";

const CurrentWeather = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.dropdown}>
        <Dropdown />
      </div>

      <CurrentWeatherContainer />
      <ForecastInfoContainer />
    </div>
  );
};

export default CurrentWeather;
