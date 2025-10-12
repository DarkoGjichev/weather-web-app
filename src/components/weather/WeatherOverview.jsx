import { useEffect, useState } from "react";
import getWeather from "../../api/getWeather";
import WeatherDay from "./WeatherDay";

function WeatherOverview({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather(latitude, longitude).then((data) => {
      setWeatherData(data);
    });
  }, []);

  return (
    <main>
      <WeatherDay />
    </main>
  );
}

export default WeatherOverview;
