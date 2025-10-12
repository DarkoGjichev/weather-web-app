import { useState } from "react";
import Header from "./components/Header";
import WeatherOverview from "./components/weather/WeatherOverview";

function App() {
  const [location, setLocation] = useState({});
  return (
    <>
      <Header setLocation={setLocation} />
      <WeatherOverview
        latitude={location.latitude}
        longitude={location.longitude}
      />
    </>
  );
}

export default App;
