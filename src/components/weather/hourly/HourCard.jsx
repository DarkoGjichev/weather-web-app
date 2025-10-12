function HourCard({ hourly, date }) {
  const hoursForDay = hourly.time
    .map((t, i) => ({
      time: t,
      temperature: hourly.temperature_2m[i],
      weather_code: hourly.weather_code[i],
    }))
    .filter((hour) => hour.time.startsWith(date));

  return hoursForDay.map((hour) => (
    <div key={hour.time}>
      <p>
        {new Date(hour.time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p>{hour.weather_code}</p>
      <p>{hour.temperature}°C</p>
    </div>
  ));
}

export default HourCard;
