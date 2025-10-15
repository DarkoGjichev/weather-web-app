import WeatherCurrent from "./WeatherCurrent";
import WeatherHourly from "./WeatherHourly";

function WeatherDay({
  current,
  currentUnits,
  hourly,
  date,
  daily,
  dailyUnits,
}) {
  return (
    <main className="flex flex-col gap-4">
      <WeatherCurrent
        current={current}
        currentUnits={currentUnits}
        daily={daily}
        dailyUnits={dailyUnits}
        date={date}
      />
      <WeatherHourly hourly={hourly} date={date} />
    </main>
  );
}

export default WeatherDay;
