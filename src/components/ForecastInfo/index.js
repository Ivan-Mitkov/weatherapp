import React from "react";
import moment from "moment";
import Popover from "@mui/material/Popover";
import WeatherIcon from "../WeatherIcon";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { convertUtcToLocalTime } from "../../utils/index";

import styles from "./styles.module.scss";
const ForecastInfo = ({
  day,
  temperatureLow,
  temperatureHigh,
  weather,
  feelsLike,
  windSpeed,
  humidity,
  sunrise,
  sunset,
  timezone_offset,
  timezone,
}) => {
  let weatherMain = "";
  let weatherDescripion = "";
  let code = "";
  if (weather) {
    weatherMain = weather[0].main;
    weatherDescripion = weather[0].description;
    code = weather[0].id;
  }
  let dayOfTheWeek = moment(day).format("dddd");
  let dayProvided = moment(day).format("dddd");
  if (dayProvided === moment().format("dddd")) {
    dayOfTheWeek = "Today";
  }
  if (dayProvided === moment().add(1, "d").format("dddd")) {
    dayOfTheWeek = "Tomorrow";
  }
  //Sunrise and sunset
  let sunriseLocalTime = convertUtcToLocalTime(
    sunrise,
    timezone_offset,
    timezone
  );
  let sunsetLocalTime = convertUtcToLocalTime(
    sunset,
    timezone_offset,
    timezone
  );

  // console.log(sunrise);
  //Popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={styles.container}>
      <div className={styles.forecast}>
        <div>{dayOfTheWeek}</div>
        <div>{moment(day).format("D.MM.yyyy")}</div>
        <div
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <AiOutlineInfoCircle style={{ width: "40px", height: "40px" }} />
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <div>
              Усеща се като
              <span> {feelsLike.day} &#176;C </span>
            </div>
            <div>
              <span>Влажност: </span>
              <span>{humidity} %</span>
            </div>
            <div>
              <span>Скорост на вятъра: </span>
              {windSpeed}
              <span>м/с</span>
            </div>
            <div>Изгрев {moment(sunriseLocalTime).format("HH:mm")}</div>
            <div>Залез {moment(sunsetLocalTime).format("HH:mm")}</div>
          </Popover>
        </div>
        <WeatherIcon code={code} />
        <div>{weatherMain}</div>
        <div>
          {temperatureLow}
          <span>&#176;</span>/{temperatureHigh}
          <span>&#176;</span>
        </div>
        <div>{weatherDescripion}</div>
      </div>
    </div>
  );
};

export default ForecastInfo;
