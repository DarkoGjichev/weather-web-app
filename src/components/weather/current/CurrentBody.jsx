function CurrentBody({ weather }) {
  return (
    <>
      <div>
        <h3>
          {weather.temperature_2m}
          {weather.temperature_units_2m}
        </h3>
        <p>{weather.weather_code}</p>
        <p>
          Feels like {weather.apparent_temperature}
          {weather.apparent_temperature_units}
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Wind</td>
            <td>
              {weather.wind_speed}
              {weather.wind_speed_units}
            </td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>
              {weather.humidity}
              {weather.humidity_units}
            </td>
          </tr>
          <tr>
            <td>Cloud cover</td>
            <td>
              {weather.cloud_cover}
              {weather.cloud_cover_units}
            </td>
          </tr>
          <tr>
            <td>Precipitation</td>
            <td>
              {weather.precipitation}
              {weather.precipitation_units}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CurrentBody;
