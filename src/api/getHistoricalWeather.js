import axios from "axios";

function getHistoricalWeather(latitude, longitude, startDate, endDate) {
  return axios
    .get(
      `https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=weather_code,wind_speed_10m_max,precipitation_sum,temperature_2m_max,apparent_temperature_max,cloud_cover_max,rain_sum,relative_humidity_2m_max&hourly=temperature_2m,weather_code&timezone=Europe%2FLondon`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
export default getHistoricalWeather;
