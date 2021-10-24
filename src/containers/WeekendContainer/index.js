import React from "react";
import moment from "moment";
import { useSelector, shallowEqual } from "react-redux";
import ForecastInfo from "../../components/ForecastInfo";
import styles from "./styles.module.scss";

const WeekendContainer = ({ style }) => {
  const currentWeather = useSelector((state) => state.weather, shallowEqual);
  const weekendRef = React.useRef();
  const {
    loading,
    error,
    data: { daily, timezone_offset, timezone },
  } = currentWeather;

  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error</div>;
  }

  const filteredDays =
    daily &&
    daily.map((forecast) => {
      const currentDay = moment(forecast.dt * 1000).format("dddd");
      if (
        currentDay === "Sunday" ||
        currentDay === "Saturday" ||
        currentDay === "Friday"
      ) {
        return (
          <ForecastInfo
            key={forecast.dt}
            day={forecast.dt * 1000}
            temperatureLow={forecast.temp.min}
            temperatureHigh={forecast.temp.max}
            weather={forecast.weather}
            feelsLike={forecast?.feels_like}
            windSpeed={forecast?.wind_speed}
            humidity={forecast?.humidity}
            sunrise={forecast?.sunrise}
            sunset={forecast?.sunset}
            timezone_offset={timezone_offset}
            timezone={timezone}
          />
        );
      } else {
        return null;
      }
    });
  return (
    <div className={styles.container} style={{ ...style }}>
      {/* <button
        onClick={() => handleScroll("left")}
        className={styles.buttonLeft}
      >
        <MdArrowForwardIos />
      </button> */}
      <div ref={weekendRef} className={styles.innerContainer}>
        {filteredDays}
      </div>
      {/* <button
        onClick={() => handleScroll("right")}
        className={styles.buttonRight}
      >
        {" "}
        <MdArrowBackIosNew />
      </button> */}
    </div>
  );
};

export default WeekendContainer;
