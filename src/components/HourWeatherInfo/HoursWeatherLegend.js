import React from "react";
import styles from "./styles.module.scss";
const HourWeatherInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.legend}>
        <div>Час</div>
        <div>Дата</div>
        <div></div>
        <div></div>
        <div></div>
        <div>Скорост на вятъра</div>
        <div></div>
        <div>Усеща се като</div>
        <div>Скорост на вятъра</div>
        <div>Посока на вятъра</div>
        <div>Атм. налягане</div>
        <div>Влажност</div>
      </div>
    </div>
  );
};

export default HourWeatherInfo;
