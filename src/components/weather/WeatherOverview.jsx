import { useEffect, useState } from "react";
import getWeather from "../../api/getWeather";
import WeatherDay from "./WeatherDay";

function WeatherOverview({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    getWeather(latitude, longitude).then((data) => {
      setWeatherData(data);
      setDate(data.current.time.split("T")[0]);
    });
  }, [date, latitude, longitude]);

  if (!weatherData) return <p>Loading...</p>;

  return (
    <main>
      <WeatherDay
        current={weatherData.current}
        currentUnits={weatherData.current_units}
        hourly={weatherData.hourly}
        date={date}
      />
    </main>
  );
}

export default WeatherOverview;
