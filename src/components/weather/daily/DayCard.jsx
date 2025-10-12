function DayCard({ daily, dailyUnits }) {
  const sevenDayForecast = daily.time.map((t, i) => ({
    time: t,
    temperature_max: daily.temperature_2m_max[i],
    temperature_min: daily.temperature_2m_min[i],
    weather_code: daily.weather_code[i],
    precipitation: daily.precipitation_probability_max[i],
  }));

  return sevenDayForecast.map((day) => (
    <div key={day.time}>
      <p>
        {new Date(day.time).toLocaleDateString([], {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p>
        Min: {day.temperature_min}
        {dailyUnits.temperature_2m_min}
      </p>
      <p>
        Max: {day.temperature_max}
        {dailyUnits.temperature_2m_max}
      </p>
      <p>{day.weather_code}</p>
      <p>
        Precipitation: {day.precipitation}
        {dailyUnits.precipitation_probability_max}
      </p>
    </div>
  ));
}

export default DayCard;
