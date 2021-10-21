import React from "react";
import { useDispatch } from "react-redux";
import Dropdown from "../../components/DropdownMenu";
import { updateCity } from "../../store/actions/index";
import styles from "./styles.module.scss";
const options = [
  {
    label: "London",
    value: {
      city: "London",
      lat: 51.507351,
      lon: -0.127758,
    },
  },
  {
    label: "Paris",
    value: {
      city: "Paris",
      lat: 48.856613,
      lon: 2.352222,
    },
  },
  {
    label: "Berlin",
    value: {
      city: "Berlin",
      lat: 52.520008,
      lon: 13.404954,
    },
  },
  {
    label: "Sofia",
    value: {
      city: "Sofia",
      lat: 42.697708,
      lon: 23.321867,
    },
  },
  {
    label: "Stockholm",
    value: {
      city: "Stockholm",
      lat: 59.329323,
      lon: 18.068581,
    },
  },
  {
    label: "Rome",
    value: {
      city: "Rome",
      lat: 41.902782,
      lon: 12.496366,
    },
  },
  {
    label: "Brussel",
    value: {
      city: "Brussel",
      lat: 50.8505,
      lon: 4.3488,
    },
  },
];
const DropdownContainer = () => {
  const dispatch = useDispatch();
  const handleCoordinates = (option) => {
    dispatch(updateCity(option));
  };
  return (
    <div className={styles.container}>
      <Dropdown options={options} onOptionSelected={handleCoordinates} />
    </div>
  );
};

export default DropdownContainer;
