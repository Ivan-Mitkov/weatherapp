import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrentWeatherInfo from "../../components/CurrentWeatherInfo";
import { getWeatherDetail } from "../../store/actions";

const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();

  const currentWeather = useSelector((state) => state.weather);
  const {
    loading,
    error,
    data: { current },
  } = currentWeather;

  useEffect(() => {
    dispatch(getWeatherDetail());
  }, [dispatch]);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      <CurrentWeatherInfo
        temperature={current?.temp}
        feelsLike={current?.feels_like}
        windSpeed={current?.wind_speed}
        sunrise={current?.sunrise}
        sunset={current?.sunset}
        weather={current?.weather}
      />
    </div>
  );
};

export default CurrentWeatherContainer;
