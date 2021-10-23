import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMetrics, closeModal } from "../../store/actions";
import styles from "./styles.module.scss";
const Form = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    dt: Math.floor(Date.now() / 1000),
    station_id: `${process.env.REACT_APP_STATION_ID}`,
    username: "",
    email: "",
    temp: "",
    wind_speed: "",
    humidity: "",
    pressure: "",
    rain_1h: "",
  });
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    temp: false,
    wind_speed: false,
    humidity: false,
    pressure: false,
    rain_1h: false,
  });

  const isFormValid = () => {
    const hasError = Object.values(errors).find((a) => a === true);
    const isValid = hasError === undefined;
    return isValid;
  };
  const errorMessages = {
    username: "Username is required",
    email: "Email is required",
    temp: "Temperature must be between -20 and +60",
    wind_speed: "Wind speed must be between 0 and 200",
    humidity: "Humidity must be between 0 and 100",
    pressure: "Pressure must be between 0 and 3000",
    rain_1h: "rain_1h must be between 0 and 1000",
  };

  const validateInput = (e) => {
    switch (e.target.name) {
      case "username":
        if (e.target.value.length < 1) {
          setErrors({
            ...errors,
            username: true,
          });
        } else {
          setErrors({
            ...errors,
            username: false,
          });
        }
        break;
      case "email":
        if (e.target.value.length < 1) {
          setErrors({
            ...errors,
            email: true,
          });
        } else {
          setErrors({
            ...errors,
            email: false,
          });
        }
        break;
      case "temp":
        if (e.target.value < -20 || e.target.value > 60) {
          setErrors({
            ...errors,
            temp: true,
          });
        } else {
          setErrors({
            ...errors,
            temp: false,
          });
        }
        break;
      case "wind_speed":
        if (e.target.value < 0 || e.target.value > 200) {
          setErrors({
            ...errors,
            wind_speed: true,
          });
        } else {
          setErrors({
            ...errors,
            wind_speed: false,
          });
        }
        break;
      case "humidity":
        if (e.target.value < 0 || e.target.value > 100) {
          setErrors({
            ...errors,
            humidity: true,
          });
        } else {
          setErrors({
            ...errors,
            humidity: false,
          });
        }
        break;
      case "pressure":
        if (e.target.value < 0 || e.target.value > 3000) {
          setErrors({
            ...errors,
            pressure: true,
          });
        } else {
          setErrors({
            ...errors,
            pressure: false,
          });
        }
        break;
      case "rain_1h":
        if (e.target.value < 0 || e.target.value > 1000) {
          setErrors({
            ...errors,
            rain_1h: true,
          });
        } else {
          setErrors({
            ...errors,
            rain_1h: false,
          });
        }
        break;
      default:
        break;
    }
  };
  const handleChange = (e) => {
    validateInput(e);
    if (!errors[e.target.name]) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidForm = isFormValid();
    if (isValidForm) {
      console.log(`Form is valid`);
      const formDataToSend = [
        {
          ...form,
          temp: parseInt(form.temp),
          wind_speed: parseInt(form.wind_speed),
          humidity: parseInt(form.humidity),
          pressure: parseInt(form.pressure),
          rain_1h: parseInt(form.rain_1h),
        },
      ];
      dispatch(createMetrics(formDataToSend));
      setTimeout(() => {
        dispatch(closeModal());
      }, 1000);
    } else {
      console.log(`Invalid!`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label htmlFor="username">Username</label>
        <div className={styles.errors}>
          <input
            type="text"
            id="username"
            name="username"
            required
            minLength="1"
            onChange={handleChange}
          />
          {errors.username && <small>{errorMessages.username}</small>}
        </div>

        <label htmlFor="email">Email</label>
        <div className={styles.errors}>
          <input
            type="email"
            id="email"
            name="email"
            minLength="3"
            required
            onChange={handleChange}
          />
          {errors.email && <small>{errorMessages.email}</small>}
        </div>
        <label htmlFor="temp">Temperature</label>
        <div className={styles.errors}>
          <input
            type="number"
            id="temp"
            name="temp"
            required
            onChange={handleChange}
          />
          {errors.temp && <small>{errorMessages.temp}</small>}
        </div>
        <label htmlFor="wind_speed">Wind Speed</label>
        <div className={styles.errors}>
          <input
            type="number"
            id="wind_speed"
            name="wind_speed"
            required
            onChange={handleChange}
          />
          {errors.wind_speed && <small>{errorMessages.wind_speed}</small>}
        </div>
        <label htmlFor="humidity">Humidity</label>
        <div className={styles.errors}>
          <input
            type="number"
            id="humidity"
            name="humidity"
            required
            onChange={handleChange}
          />
          {errors.humidity && <small>{errorMessages.humidity}</small>}
        </div>
        <label htmlFor="pressure">Pressure</label>
        <div className={styles.errors}>
          <input
            type="number"
            id="pressure"
            name="pressure"
            required
            onChange={handleChange}
          />
          {errors.pressure && <small>{errorMessages.pressure}</small>}
        </div>
        <label htmlFor="rain_1h">Rain</label>
        <div className={styles.errors}>
          <input
            type="number"
            id="rain_1h"
            name="rain_1h"
            required
            onChange={handleChange}
          />
          {errors.rain_1h && <small>{errorMessages.rain_1h}</small>}
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
