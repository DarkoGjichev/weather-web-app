import { useEffect, useState } from "react";
import getLocation from "../api/getLocation";
import "../app.css";

function Header({ setLocation }) {
  const [city, setCity] = useState("Middlesbrough");

  useEffect(() => {
    getLocation(city).then((data) => {
      setLocation(data);
    });
  }, [setLocation, city]);

  const handleClick = (city) => {
    setCity(city);
  };

  return (
    <header className="max-w-[1035px] container flex justify-center items-center gap-6 mx-auto">
      <button
        className="bg-white/20 py-2 px-8 rounded-[30px] text-white text-base font-medium shadow-md cursor-pointer"
        onClick={() => handleClick("Middlesbrough")}
      >
        Middlesbrough
      </button>
      <button
        className="bg-white/10 py-2 px-8 rounded-[30px] text-white text-base font-medium shadow-md cursor-pointer"
        onClick={() => handleClick("Bicester")}
      >
        Bicester
      </button>
    </header>
  );
}

export default Header;
