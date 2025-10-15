import { useEffect, useState } from "react";
import getWeather from "../../api/getWeather";
import getHistoricalWeather from "../../api/getHistoricalWeather";
import WeatherDay from "./WeatherDay";
import WeatherDaily from "./WeatherDaily";
import DatePicker from "../DatePicker";
import "react-calendar/dist/Calendar.css";

function WeatherOverview({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);
  const [date, setDate] = useState(null);
  const today = new Date().toISOString().split("T")[0];

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
    <>
      <DatePicker date={date} setDate={setDate} />
      <main className="max-w-[1035px] lg:flex lg:flex-row gap-4 mx-auto">
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
    </>
  );
}

export default WeatherOverview;
