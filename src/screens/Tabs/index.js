import React from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CurrentWeatherScreen from "../CurrentWeatherScreen";
import DailyForecastScreen from "../DailyForecastScreen";
import Dropdown from "../../containers/DropDownContainer";
import bImage from "../../resources/images/landscap.jpg";
import styles from "./styles.module.scss";
const WeatherTabs = () => {
  const { activeCity, activeCountry } = useSelector((state) => state.city);

  return (
    <div
      style={{
        backgroundImage: `url(${bImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: "-100",
      }}
      className={styles.screen}
    >
      {/* <img src={bImage}/> */}
      <div className={styles.dropdown}>
        <Dropdown />
      </div>
      <div>
        <div className={styles.city}>{activeCity}</div>
        <div className={styles.country}>{activeCountry}</div>
      </div>
      <div className={styles.tabs}>
        <Tabs>
          <TabList className={styles.tablist}>
            <Tab style={{ borderRadius: "0", background: "#fff" }}>
              В момента
            </Tab>
            <Tab style={{ borderRadius: "0", background: "#fff" }}>24 часа</Tab>
            <Tab style={{ borderRadius: "0", background: "#fff" }}>10 дни</Tab>
            <Tab style={{ borderRadius: "0", background: "#fff" }}>Уикенд</Tab>
          </TabList>

          <TabPanel className={styles.tabPanels}>
            <CurrentWeatherScreen />
          </TabPanel>
          <TabPanel className={styles.tabPanels}>
            <DailyForecastScreen />
          </TabPanel>
          <TabPanel className={styles.tabPanels}>
            <DailyForecastScreen />
          </TabPanel>
          <TabPanel className={styles.tabPanels}>
            <DailyForecastScreen />
          </TabPanel>
        </Tabs>
      </div>
      <button className={styles.addButton}>Add Metrics Manually</button>
    </div>
  );
};

export default WeatherTabs;
