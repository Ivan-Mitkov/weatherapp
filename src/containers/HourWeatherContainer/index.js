import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HourWeatherInfo from "../../components/HourWeatherInfo";
import HoursWeatherLegend from "../../components/HourWeatherInfo/HoursWeatherLegend";
import { getWeatherDetail } from "../../store/actions";
import { convertUtcToLocalTime } from "../../utils/index";
import styles from "./styles.module.scss";
const HourWeatherContainer = () => {
  const dispatch = useDispatch();

  const currentWeather = useSelector((state) => state.weather);
  const currentCity = useSelector((state) => state.city);
  const {
    loading,
    error,
    data: { hourly, timezone_offset, timezone },
  } = currentWeather;
  useEffect(() => {
    dispatch(getWeatherDetail(currentCity.lat, currentCity.lon));
  }, [dispatch, currentCity.lat, currentCity.lon]);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.container}>
      <HoursWeatherLegend />
      {hourly &&
        hourly.map((current) => (
          <HourWeatherInfo
            key={convertUtcToLocalTime(current?.dt, timezone_offset, timezone)}
            temperature={current?.temp}
            feelsLike={current?.feels_like}
            windSpeed={current?.wind_speed}
            day={current.dt * 1000}
            humidity={current?.humidity}
            pressure={current.pressure}
            windDegree={current.wind_deg}
          />
        ))}
    </div>
  );
};

export default HourWeatherContainer;
