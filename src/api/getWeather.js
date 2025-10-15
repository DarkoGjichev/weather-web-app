import axios from "axios";

function getWeather(latitude, longitude) {
  return axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,is_day,cloud_cover,precipitation&timezone=Europe%2FLondon`
    )
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error();
    });
}
export default getWeather;
