import HourCard from "./hourly/HourCard";

function WeatherHourly({ hourly, date }) {
  return (
    <main>
      <header>
        <h2>HOURLY FORECAST</h2>
      </header>
      <section>
        <HourCard hourly={hourly} date={date} />
      </section>
    </main>
  );
}

export default WeatherHourly;
