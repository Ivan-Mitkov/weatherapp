import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrentWeatherInfo from "../../components/CurrentWeatherInfo";
import { getWeatherDetail } from "../../store/actions";
import { convertUtcToLocalTime } from "../../utils/index";
const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();

  const currentWeather = useSelector((state) => state.weather);
  const currentCity = useSelector((state) => state.city);
  const {
    loading,
    error,
    data: { current, timezone_offset, timezone },
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
  let sunriseLocalTime = convertUtcToLocalTime(
    current?.sunrise,
    timezone_offset,
    timezone
  );
  let sunsetLocalTime = convertUtcToLocalTime(
    current?.sunset,
    timezone_offset,
    timezone
  );
  return (
    <div>
      <CurrentWeatherInfo
        currentCity={currentCity?.activeCity}
        temperature={current?.temp}
        feelsLike={current?.feels_like}
        windSpeed={current?.wind_speed}
        sunrise={sunriseLocalTime}
        sunset={sunsetLocalTime}
        weather={current?.weather}
        humidity={current?.humidity}
      />
    </div>
  );
};

export default CurrentWeatherContainer;
