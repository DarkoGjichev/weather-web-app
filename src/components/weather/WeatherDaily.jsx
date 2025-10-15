import DayCard from "./daily/DayCard";
import "../../app.css";

function WeatherDaily({ daily, dailyUnits }) {
  return (
    <main className="container">
      <header className="border-b border-white">
        <h2>7 DAY FORECAST</h2>
      </header>
      <section className="py-4 flex flex-col gap-2">
        <DayCard daily={daily} dailyUnits={dailyUnits} />
      </section>
    </main>
  );
}

export default WeatherDaily;
