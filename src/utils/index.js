import moment from "moment-timezone";

export const convertUtcToLocalTime = (utc, timezone_offset, timezone) => {
  return moment.tz(utc * 1000 - timezone_offset, timezone);
};

export const calculateDirection = (degree) => {
  if (degree >= 11.25 && degree < 33.75) {
    return "Север Североизток";
  }
  if (degree >= 33.75 && degree < 56.25) {
    return "Североизток";
  }
  if (degree >= 56.25 && degree < 78.75) {
    return "Изток Североизток";
  }
  if (degree >= 78.75 && degree < 101.25) {
    return "Изток";
  }
  if (degree >= 101.25 && degree < 123.75) {
    return "Изток Югоизток";
  }
  if (degree >= 123.75 && degree < 146.25) {
    return "Югоизток";
  }
  if (degree >= 146.25 && degree < 168.75) {
    return "Юг Югоизток";
  }
  if (degree >= 168.75 && degree < 191.25) {
    return "Юг";
  }
  if (degree >= 191.25 && degree < 213.75) {
    return "Юг Югозапад";
  }
  if (degree >= 213.75 && degree < 236.25) {
    return "Югозапад";
  }
  if (degree >= 236.25 && degree < 258.75) {
    return "Запад Югозапад";
  }
  if (degree >= 258.75 && degree < 281.25) {
    return "Запад";
  }
  if (degree >= 281.25 && degree < 303.75) {
    return "Запад Северозапад";
  }
  if (degree >= 303.75 && degree < 326.25) {
    return "Северозапад";
  }
  if (degree >= 326.25 && degree < 348.75) {
    return "Север Северозапад";
  }
  return "Север";
};
