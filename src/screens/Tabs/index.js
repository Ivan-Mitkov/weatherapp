import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import CurrentWeatherScreen from "../CurrentWeatherScreen";
import DailyForecastScreen from "../DailyForecastScreen";
import ForecastInfoContainer from "../../containers/ForecastInfoContainer";
import WeekendContainer from "../../containers/WeekendContainer";
import Dropdown from "../../containers/DropDownContainer";
import bImage from "../../resources/images/landscap.jpg";
import Modal from "../../components/Modal";
import Form from "../../components/PopupForm";
import { openModal } from "../../store/actions";
import { getWeatherDetail } from "../../store/actions";

import styles from "./styles.module.scss";

const WeatherTabs = () => {
  const { activeCity, activeCountry, lat, lon } = useSelector(
    (state) => state.city
  );
  // Modal
  const dispatch = useDispatch();
  const handleOpen = (e) => {
    dispatch(openModal());
  };

  const loadWeather = useCallback(() => {
    dispatch(getWeatherDetail(lat, lon));
  }, [dispatch, lat, lon]);

  useEffect(() => {
    loadWeather();
  }, [loadWeather]);

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
      <div className={styles.locationBg}>
        <div className={styles.city}>{activeCity}</div>
        <div className={styles.country}>{activeCountry}</div>
      </div>
      <div className={styles.tabs}>
        <Tabs selectedTabClassName={styles.tabStyleActive}>
          <TabList className={styles.tablist}>
            <Tab className={["react-tabs__tab", styles.tabStyle].join(" ")}>
              В момента
            </Tab>
            <Tab className={["react-tabs__tab", styles.tabStyle].join(" ")}>
              24 часа
            </Tab>
            <Tab className={["react-tabs__tab", styles.tabStyle].join(" ")}>
              10 дни
            </Tab>
            <Tab className={["react-tabs__tab", styles.tabStyle].join(" ")}>
              Уикенд
            </Tab>
          </TabList>

          <TabPanel className={styles.tabPanels}>
            <CurrentWeatherScreen />
          </TabPanel>
          <TabPanel className={styles.tabPanels}>
            <DailyForecastScreen />
          </TabPanel>
          <TabPanel className={styles.tabPanels}>
            <ForecastInfoContainer style={{ maxWidth: "90vw" }} />
          </TabPanel>
          <TabPanel className={styles.tabPanels}>
            <WeekendContainer style={{ maxWidth: "90vw" }} />
          </TabPanel>
        </Tabs>
      </div>
      <button className={styles.addButton} onClick={handleOpen}>
        Add Metrics Manually
      </button>
      {
        // Modal container
      }
      <div className="containerPopup">
        <Modal title="Send Metrics">
          <Form />
        </Modal>
      </div>
    </div>
  );
};

export default WeatherTabs;
