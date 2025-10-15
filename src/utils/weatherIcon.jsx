import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSun,
  faCloudSun,
  faCloud,
  faSmog,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const weatherIcon = (code) => {
  switch (code) {
    case 0:
    case 1:
      return <FontAwesomeIcon icon={faSun} />;
    case 2:
      return <FontAwesomeIcon icon={faCloudSun} />;
    case 3:
      return <FontAwesomeIcon icon={faCloud} />;
    case 45:
    case 48:
      return <FontAwesomeIcon icon={faSmog} />;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return <FontAwesomeIcon icon={faCloudRain} />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <FontAwesomeIcon icon={faSnowflake} />;
    case 80:
    case 81:
    case 82:
      return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    case 95:
    case 96:
    case 99:
      return <FontAwesomeIcon icon={faBolt} />;
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
};

export default weatherIcon;
