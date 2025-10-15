import weatherIcon from "../../../utils/weatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

function DayCard({ daily, dailyUnits }) {
  const sevenDayForecast = daily.time.map((t, i) => ({
    time: t,
    temperature_max: daily.temperature_2m_max[i],
    temperature_min: daily.temperature_2m_min[i],
    weather_code: daily.weather_code[i],
    precipitation: daily.precipitation_sum[i],
  }));

  return sevenDayForecast.map((day) => (
    <div
      key={day.time}
      className="flex flex-row gap-2 text-center bg-white/20 rounded-[20px] p-2"
    >
      <p>
        {new Date(day.time).toLocaleDateString([], {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p>
        {day.temperature_min}
        {dailyUnits.temperature_2m_min}
      </p>
      {" - "}
      <p>
        {day.temperature_max}
        {dailyUnits.temperature_2m_max}
      </p>
      <p>{weatherIcon(day.weather_code)}</p>
      <p className="w-[70px] ml-auto">
        <FontAwesomeIcon icon={faDroplet} className="text-xs" />{" "}
        {day.precipitation}
        {dailyUnits.precipitation_sum}
      </p>
    </div>
  ));
}

export default DayCard;
