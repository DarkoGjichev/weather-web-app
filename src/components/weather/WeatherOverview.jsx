import { useState } from "react";
import getWeather from "../../api/getWeather";
import getHistoricalWeather from "../../api/getHistoricalWeather";
import WeatherDay from "./WeatherDay";
import WeatherDaily from "./WeatherDaily";
import DatePicker from "../DatePicker";
import "react-calendar/dist/Calendar.css";
import useApiRequest from "../../hooks/useApiRequest";
import Loading from "../Loading";
import Error from "../Error";

function WeatherOverview({ latitude, longitude }) {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);

  const {
    data: weatherData,
    error,
    isLoading,
  } = useApiRequest(
    date === today ? getWeather : getHistoricalWeather,
    latitude,
    longitude,
    date
  );

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (weatherData) {
    return (
      <>
        <DatePicker date={date} setDate={setDate} />
        <main className="max-w-[1035px] w-full flex flex-col lg:flex-row gap-4 mx-auto">
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
}

export default WeatherOverview;
