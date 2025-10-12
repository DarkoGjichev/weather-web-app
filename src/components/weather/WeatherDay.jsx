import WeatherCurrent from "./WeatherCurrent";
import WeatherHourly from "./WeatherHourly";

function WeatherDay({ current, currentUnits, hourly, date }) {
  return (
    <>
      <WeatherCurrent current={current} currentUnits={currentUnits} />
      <WeatherHourly hourly={hourly} date={date} />
    </>
  );
}

export default WeatherDay;
