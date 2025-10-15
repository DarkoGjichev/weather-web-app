import HourCard from "./hourly/HourCard";
import "../../app.css";

function WeatherHourly({ hourly, date }) {
  return (
    <main className="container">
      <header className="border-b border-white">
        <h2>HOURLY FORECAST</h2>
      </header>
      <section className="flex flex-row gap-4 py-4 overflow-hidden overflow-x-auto">
        <HourCard hourly={hourly} date={date} />
      </section>
    </main>
  );
}

export default WeatherHourly;
