import React from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CurrentWeatherScreen from "../CurrentWeatherScreen";
import DailyForecastScreen from "../DailyForecastScreen";
import Dropdown from "../../containers/DropDownContainer";

import styles from "./styles.module.scss";
const WeatherTabs = () => {
  const { activeCity, activeCountry } = useSelector((state) => state.city);

  return (
    <div className={styles.screen}>
      <div className={styles.dropdown}>
        <Dropdown />
      </div>
      <div className={styles.city}>{activeCity}</div>
      <div className={styles.country}>{activeCountry}</div>

      <div className={styles.tabs}>
        <Tabs>
          <TabList>
            <Tab>В момента</Tab>
            <Tab>24 часа</Tab>
            <Tab>10 дни</Tab>
            <Tab>Уикенд</Tab>
          </TabList>

          <TabPanel>
            <CurrentWeatherScreen />
          </TabPanel>
          <TabPanel>
            <DailyForecastScreen />
          </TabPanel>
          <TabPanel>
            <DailyForecastScreen />
          </TabPanel>
          <TabPanel>
            <DailyForecastScreen />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default WeatherTabs;
