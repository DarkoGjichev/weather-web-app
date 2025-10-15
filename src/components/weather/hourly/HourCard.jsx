import weatherIcon from "../../../utils/weatherIcon";

function HourCard({ hourly, date }) {
  const hoursForDay = hourly.time
    .map((t, i) => ({
      time: t,
      temperature: hourly.temperature_2m[i],
      weather_code: hourly.weather_code[i],
    }))
    .filter((hour) => hour.time.startsWith(date));

  return hoursForDay.map((hour) => (
    <div
      key={hour.time}
      className="w-[60px] flex-shrink-0 text-center bg-white/20 rounded-[20px] p-2"
    >
      <p className="text-xs">
        {new Date(hour.time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p className="text-xl">{weatherIcon(hour.weather_code)}</p>
      <p className="text-xs">{hour.temperature}°C</p>
    </div>
  ));
}

export default HourCard;
