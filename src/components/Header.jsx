import { useEffect, useState } from "react";
import getLocation from "../api/getLocation";
import "../app.css";
import CityButton from "./header/CityButton";

function Header({ setLocation }) {
  const [city, setCity] = useState("Middlesbrough");
  const cityList = ["Middlesbrough", "Bicester"];

  useEffect(() => {
    getLocation(city).then((data) => {
      setLocation(data);
    });
  }, [setLocation, city]);

  const handleClick = (city) => {
    setCity(city);
  };

  return (
    <header className="max-w-[1035px] container flex justify-center items-center gap-4 mx-auto  overflow-x-hidden">
      {cityList.map((singleCity) => {
        return (
          <CityButton
            key={singleCity}
            singleCity={singleCity}
            handleClick={handleClick}
            city={city}
          />
        );
      })}
    </header>
  );
}

export default Header;
