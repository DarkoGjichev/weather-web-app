import weatherCode from "../../../hooks/weatherCode";

function CurrentBody({ weather }) {
  return (
    <main className="flex flex-col gap-4 py-4">
      <div className="mx-auto text-center">
        <h3 className="text-6xl">
          {weather.temperature_2m}
          {weather.temperature_units_2m}
        </h3>
        <p>{weatherCode(weather.weather_code)}</p>
        <p>
          Feels like {weather.apparent_temperature}
          {weather.apparent_temperature_units}
        </p>
      </div>
      <table>
        <tbody>
          <tr className="border-b border-white">
            <td>Wind</td>
            <td className="pt-2 text-right">
              {weather.wind_speed}
              {weather.wind_speed_units}
            </td>
          </tr>
          <tr className="border-b border-white">
            <td>Humidity</td>
            <td className="pt-2 text-right">
              {weather.humidity}
              {weather.humidity_units}
            </td>
          </tr>
          <tr className="border-b border-white">
            <td>Cloud cover</td>
            <td className="pt-2 text-right">
              {weather.cloud_cover}
              {weather.cloud_cover_units}
            </td>
          </tr>
          <tr className="border-b border-white">
            <td>Precipitation</td>
            <td className="pt-2 text-right">
              {weather.precipitation}
              {weather.precipitation_units}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default CurrentBody;
