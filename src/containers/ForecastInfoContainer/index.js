import React from "react";
import { useSelector } from "react-redux";
import ForecastInfo from "../../components/ForecastInfo";
import styles from "./styles.module.scss";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const CurrentWeatherContainer = () => {
  const currentWeather = useSelector((state) => state.weather);
  const forecastRef = React.useRef();

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

  const handleScroll = (direction) => {
    if (direction === "left") {
      forecastRef.current.scrollLeft = forecastRef
        ? (forecastRef.current.scrollLeft += 200)
        : null;
    }
    if (direction === "right") {
      forecastRef.current.scrollLeft = forecastRef
        ? (forecastRef.current.scrollLeft -= 200)
        : null;
    }
  };
  return (
    <div className={styles.container}>
      <button
        onClick={() => handleScroll("left")}
        style={{
          position: "absolute",
          height: "50px",
          width: "50px",
          fontSize: "10rem",
          border: "none",
          background: "transparent",
          color: "orange",
          top: "50%",
          left: "0%",
          transform: `translate(-50%,-50%)`,
        }}
      >
        <MdArrowForwardIos />
      </button>
      <div ref={forecastRef} className={styles.innerContainer}>
        {daily &&
          daily.map((forecast) => (
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
          ))}
      </div>
      <button
        onClick={() => handleScroll("right")}
        style={{
          position: "absolute",
          height: "50px",
          width: "50px",
          fontSize: "10rem",
          border: "none",
          background: "transparent",
          color: "orange",
          top: "50%",
          right: "10%",
          transform: `translate(50%,-50%)`,
        }}
      >
        {" "}
        <MdArrowBackIosNew />
      </button>
    </div>
  );
};

export default CurrentWeatherContainer;
