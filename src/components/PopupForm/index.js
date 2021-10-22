import React, { useState } from "react";
import styles from "./styles.module.scss";
const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    temp: "",
    wSpeed: "",
    humidity: "",
    pressure: "",
    rain: "",
  });
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    temp: false,
    wSpeed: false,
    humidity: false,
    pressure: false,
    rain: false,
  });

  const [valid, setValid] = useState(false);

  const isFormValid = () => {
    const hasError = Object.values(errors).find((a) => a === true);
    const isValid = hasError === undefined;
    setValid(isValid);
    return isValid;
  };
  const errorMessages = {
    username: "Username is required",
    email: "Email is required",
    temp: "Temperature must be between -20 and +60",
    wSpeed: "Wind speed must be between 0 and 200",
    humidity: "Humidity must be between 0 and 100",
    pressure: "Pressure must be between 0 and 3000",
    rain: "Rain must be between 0 and 1000",
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
      case "wSpeed":
        if (e.target.value < 0 || e.target.value > 200) {
          setErrors({
            ...errors,
            wSpeed: true,
          });
        } else {
          setErrors({
            ...errors,
            wSpeed: false,
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
      case "rain":
        if (e.target.value < 0 || e.target.value > 1000) {
          setErrors({
            ...errors,
            rain: true,
          });
        } else {
          setErrors({
            ...errors,
            rain: false,
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
  const handleSubmite = (e) => {
    e.preventDefault();
    const isValidForm = isFormValid();
    console.log(isValidForm);
  };
  return (
    <div>
      <form onSubmit={handleSubmite} className={styles.formContainer}>
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
            minLength="1"
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
        <label htmlFor="wSpeed">Wind Speed</label>
        <div className={styles.errors}>
          <input
            type="number"
            id="wSpeed"
            name="wSpeed"
            required
            onChange={handleChange}
          />
          {errors.wSpeed && <small>{errorMessages.wSpeed}</small>}
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
        <label htmlFor="rain">Rain</label>
        <div className={styles.errors}>
          <input
            type="number"
            id="rain"
            name="rain"
            required
            onChange={handleChange}
          />
          {errors.rain && <small>{errorMessages.rain}</small>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
