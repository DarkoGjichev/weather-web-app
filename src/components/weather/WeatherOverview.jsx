import { useEffect, useState } from "react";
import getWeather from "../../api/getWeather";

function WeatherOverview({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather(latitude, longitude).then((data) => {
      setWeatherData(data);
    });
  }, []);

  return <main></main>;
}

export default WeatherOverview;
