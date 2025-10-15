import { useEffect, useState } from "react";
import getLocation from "../api/getLocation";
import "../app.css";

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
          <button
            key={singleCity}
            className="bg-white/20 py-2 px-4 rounded-[20px] text-white text-base font-medium shadow-md cursor-pointer"
            onClick={() => handleClick(singleCity)}
          >
            {singleCity}
          </button>
        );
      })}
    </header>
  );
}

export default Header;
