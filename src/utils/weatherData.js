function weatherData(current, currentUnits, daily, dailyUnits) {
  return {
    temperature_2m: current?.temperature_2m ?? daily?.temperature_2m_mean?.[0],
    temperature_units_2m:
      currentUnits?.temperature_2m ?? dailyUnits?.temperature_2m_mean?.[0],

    weather_code: current?.weather_code ?? daily?.weather_code?.[0],

    apparent_temperature:
      current?.apparent_temperature ?? daily?.apparent_temperature_mean?.[0],
    apparent_temperature_units:
      currentUnits?.apparent_temperature ??
      dailyUnits?.apparent_temperature_mean?.[0],

    wind_speed: current?.wind_speed_10m ?? daily?.wind_speed_10m_mean?.[0],
    wind_speed_units:
      currentUnits?.wind_speed_10m ?? dailyUnits?.wind_speed_10m_mean?.[0],

    humidity:
      current?.relative_humidity_2m ?? daily?.relative_humidity_2m_mean?.[0],
    humidity_units:
      currentUnits?.relative_humidity_2m ??
      dailyUnits?.relative_humidity_2m_mean?.[0],

    cloud_cover: current?.cloud_cover ?? daily?.cloud_cover_mean?.[0],
    cloud_cover_units:
      currentUnits?.cloud_cover ?? dailyUnits?.cloud_cover_mean?.[0],

    precipitation: current?.precipitation ?? daily?.precipitation_sum?.[0],
    precipitation_units:
      currentUnits?.precipitation ?? dailyUnits?.precipitation_sum?.[0],
  };
}

export default weatherData;
