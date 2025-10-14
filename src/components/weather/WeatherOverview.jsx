import { useEffect, useState } from "react";
import getWeather from "../../api/getWeather";
import getHistoricalWeather from "../../api/getHistoricalWeather";
import WeatherDay from "./WeatherDay";
import WeatherDaily from "./WeatherDaily";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function WeatherOverview({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null);
  const minDate = new Date(2022, 0, 1);
  const maxDate = new Date();
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (date) => {
    date.setHours(12, 0, 0, 0);
    const formattedDate = date.toISOString().split("T")[0];
    setDate(formattedDate);
  };

  useEffect(() => {
    if (!date || date === today) {
      getWeather(latitude, longitude).then((data) => {
        setWeatherData(data);
        setDate(data.current.time.split("T")[0]);
      });
    } else {
      getHistoricalWeather(latitude, longitude, date).then((data) => {
        setWeatherData(data);
      });
    }
  }, [date, latitude, longitude]);

  if (!weatherData) return <p>Loading...</p>;

  return (
    <main>
      <Calendar
        value={date}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
      />
      <WeatherDay
        current={weatherData.current}
        currentUnits={weatherData.current_units}
        hourly={weatherData.hourly}
        date={date}
        daily={weatherData.daily}
        dailyUnits={weatherData.daily_units}
      />
      <WeatherDaily
        daily={weatherData.daily}
        dailyUnits={weatherData.daily_units}
      />
    </main>
  );
}

export default WeatherOverview;
