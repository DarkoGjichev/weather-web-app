import axios from "axios";

function getHistoricalWeather(latitude, longitude, startDate) {
  const endDate = new Date(
    new Date(startDate).setDate(new Date(startDate).getDate() + 6)
  )
    .toISOString()
    .split("T")[0];

  return axios
    .get(
      `https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,temperature_2m_mean,apparent_temperature_mean,wind_speed_10m_mean,relative_humidity_2m_mean,cloud_cover_mean&hourly=temperature_2m,weather_code&timezone=Europe%2FLondon`
    )
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error();
    });
}
export default getHistoricalWeather;
