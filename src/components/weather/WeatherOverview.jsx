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

  if (!weatherData) return <p>Loading...</p>;

  return (
    <main>
      <WeatherDay
        current={weatherData.current}
        currentUnits={weatherData.current_units}
      />
    </main>
  );
}

export default WeatherOverview;
