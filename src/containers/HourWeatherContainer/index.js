import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import HourWeatherInfo from "../../components/HourWeatherInfo";
import HoursWeatherLegend from "../../components/HourWeatherInfo/HoursWeatherLegend";
import { convertUtcToLocalTime } from "../../utils/index";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./styles.module.scss";
const HourWeatherContainer = () => {
  const currentWeather = useSelector((state) => state.weather, shallowEqual);
  const {
    loading,
    error,
    data: { hourly, timezone_offset, timezone },
  } = currentWeather;

  const infoRef = React.useRef();

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const handleScroll = (direction) => {
    if (direction === "left") {
      infoRef.current.scrollLeft = infoRef
        ? (infoRef.current.scrollLeft += 200)
        : null;
    }
    if (direction === "right") {
      infoRef.current.scrollLeft = infoRef
        ? (infoRef.current.scrollLeft -= 200)
        : null;
    }
  };
  return (
    <div className={styles.container}>
      <HoursWeatherLegend className={styles.legend} />
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
          left: "13%",
          transform: `translate(-50%,-50%)`,
        }}
      >
        <MdArrowForwardIos />
      </button>
      <div className={styles.innerContainer} ref={infoRef}>
        {hourly &&
          hourly.map((current) => (
            <HourWeatherInfo
              key={current.dt * 1000}
              temperature={current?.temp}
              feelsLike={current?.feels_like}
              windSpeed={current?.wind_speed}
              day={convertUtcToLocalTime(
                current?.dt,
                timezone_offset,
                timezone
              )}
              humidity={current?.humidity}
              pressure={current.pressure}
              windDegree={current.wind_deg}
              weather={current.weather}
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
          right: "5%",
          transform: `translate(50%,-50%)`,
        }}
      >
        {" "}
        <MdArrowBackIosNew />
      </button>
    </div>
  );
};

export default HourWeatherContainer;
