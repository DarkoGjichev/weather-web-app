import DayCard from "./daily/DayCard";

function WeatherDaily({ daily, dailyUnits }) {
  return (
    <main>
      <header>
        <h2>7 DAY FORECAST</h2>
      </header>
      <section>
        <DayCard daily={daily} dailyUnits={dailyUnits} />
      </section>
    </main>
  );
}

export default WeatherDaily;
