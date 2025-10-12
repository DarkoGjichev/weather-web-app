import WeatherCurrent from "./WeatherCurrent";
import WeatherHourly from "./WeatherHourly";

function WeatherDay({ current, currentUnits }) {
  return (
    <>
      <WeatherCurrent current={current} currentUnits={currentUnits} />
      <WeatherHourly />
    </>
  );
}

export default WeatherDay;
