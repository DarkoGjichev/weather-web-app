import { useState } from "react";
import Header from "./components/Header";
import WeatherOverview from "./components/weather/WeatherOverview";
import useApiRequest from "./hooks/useApiRequest";
import getLocation from "./api/getLocation";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [city, setCity] = useState("Middlesbrough");
  const { data: location, error, isLoading } = useApiRequest(getLocation, city);
  console.log(location);
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <main className="flex p-4 flex-col gap-4">
      <Header city={city} setCity={setCity} />
      {location && (
        <WeatherOverview
          latitude={location.latitude}
          longitude={location.longitude}
        />
      )}
    </main>
  );
}

export default App;
