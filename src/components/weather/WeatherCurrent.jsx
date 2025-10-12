function WeatherCurrent({ current, currentUnits }) {
  return (
    <section>
      <header>
        <h2>CURRENT WEATHER</h2>
        <p>
          Last updated:{" "}
          <time>
            {new Date(current.time).toLocaleString([], {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </p>
      </header>
      <div>
        <h3>
          {current.temperature_2m}
          {currentUnits.temperature_2m}
        </h3>
        <p>{current.weather_code}</p>
        <p>
          Feels like {current.apparent_temperature}
          {currentUnits.apparent_temperature}
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Wind</td>
            <td>
              {current.wind_speed_10m}
              {currentUnits.wind_speed_10m}
            </td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>
              {current.relative_humidity_2m}
              {currentUnits.relative_humidity_2m}
            </td>
          </tr>
          <tr>
            <td>Cloud cover</td>
            <td>
              {current.cloud_cover}
              {currentUnits.cloud_cover}
            </td>
          </tr>
          <tr>
            <td>Precipitation</td>
            <td>
              {current.precipitation}
              {currentUnits.precipitation}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default WeatherCurrent;
