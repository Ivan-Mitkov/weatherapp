import moment from "moment-timezone";

export const convertUtcToLocalTime = (utc, timezone_offset, timezone) => {
  return moment.tz(utc * 1000 - timezone_offset, timezone);
};
