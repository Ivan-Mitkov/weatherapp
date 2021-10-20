import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ForecastInfo from "../../components/ForecastInfo";
import { getWeatherDetail } from "../../store/actions";
import { convertUtcToLocalTime } from "../../utils/index";
import styles from "./styles.module.scss";
const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();

  const currentWeather = useSelector((state) => state.weather);
  const {
    loading,
    error,
    data: { daily },
  } = currentWeather;
  useEffect(() => {
    dispatch(getWeatherDetail());
  }, [dispatch]);

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
