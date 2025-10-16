import CurrentBody from "./current/CurrentBody";
import CurrentHead from "./current/CurrentHead";
import "../../app.css";
import weatherData from "../../utils/weatherData";

function WeatherCurrent({ current, currentUnits, daily, dailyUnits, date }) {
  const weather = weatherData(current, currentUnits, daily, dailyUnits);
  return (
    <section className="w-full max-w-full container">
      <CurrentHead time={current?.time} date={date} />
      <CurrentBody weather={weather} />
    </section>
  );
}

export default WeatherCurrent;
