import WeatherCurrent from "./WeatherCurrent";
import WeatherHourly from "./WeatherHourly";

function WeatherDay() {
  return (
    <>
      <WeatherCurrent />
      <WeatherHourly />
    </>
  );
}

export default WeatherDay;
