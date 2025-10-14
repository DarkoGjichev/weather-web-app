import { useState } from "react";
import Header from "./components/Header";
import WeatherOverview from "./components/weather/WeatherOverview";
import "./app.css";

function App() {
  const [location, setLocation] = useState(null);
  return (
    <main className="app--main flex p-4 flex-col gap-4">
      <Header setLocation={setLocation} />
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
