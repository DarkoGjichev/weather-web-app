import axios from "axios";

function getLocation(city) {
  return axios
    .get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json&countryCode=GB`
    )
    .then((response) => {
      return response.data.results[0];
    })
    .catch(() => {
      throw new Error();
    });
}
export default getLocation;
