import React from "react";
import BigCloudsD from "../../resources/icons/BigCloudsD.png";
import ClearSkyD from "../../resources/icons/ClearSkyD.png";
import CloudsD from "../../resources/icons/CloudsD.png";
import MistD from "../../resources/icons/MistD.png";
import Thunderstorm from "../../resources/icons/Thunderstorm.png";
import PartlyCloudyD from "../../resources/icons/PartlyCloudyD.png";
import RainD from "../../resources/icons/RainD.png";
import ShowerRainD from "../../resources/icons/ShowerRainD.png";
import SnowD from "../../resources/icons/SnowD.png";

const WeatherIcon = ({ code, big }) => {
  let Icon = ClearSkyD;
  switch (code) {
    //Clear
    case 800:
      Icon = ClearSkyD;
      break;

    //Cloud
    case 801:
      Icon = PartlyCloudyD;
      break;
    case 802:
      Icon = CloudsD;
      break;
    case 803:
    case 804:
      Icon = BigCloudsD;
      break;
    //Rain
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      Icon = RainD;
      break;

    case 520:
    case 521:
    case 522:
    case 531:
      Icon = ShowerRainD;
      break;

    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      Icon = ShowerRainD;
      break;

    //Thunderstorm
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      Icon = Thunderstorm;
      break;

    //Snow
    case 511:
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      Icon = SnowD;
      break;

    //Atmosphere
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      Icon = MistD;
      break;

    default:
      Icon = ClearSkyD;
  }
  return (
    <img
      style={{
        width: big ? "250px" : "100px",
        height: big ? "250px" : "100px",
      }}
      src={Icon}
      alt={Icon}
    />
  );
};

export default WeatherIcon;
