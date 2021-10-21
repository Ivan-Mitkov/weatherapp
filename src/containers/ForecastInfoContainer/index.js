import React from "react";
import { useSelector } from "react-redux";
import ForecastInfo from "../../components/ForecastInfo";
import styles from "./styles.module.scss";
const CurrentWeatherContainer = () => {

  const currentWeather = useSelector((state) => state.weather);
  const {
    loading,
    error,
    data: { daily },
  } = currentWeather;
 

  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className={styles.container}>
      {daily &&
        daily.map((forecast) => (
          <ForecastInfo
            key={forecast.dt}
            day={forecast.dt * 1000}
            temperatureLow={forecast.temp.min}
            temperatureHigh={forecast.temp.max}
            weather={forecast.weather}
          />
        ))}
    </div>
  );
};

export default CurrentWeatherContainer;
