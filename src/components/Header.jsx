import { useEffect, useState } from "react";
import getLocation from "../api/getLocation";

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
    <header>
      <button onClick={() => handleClick("Middlesbrough")}>
        Middlesbrough
      </button>
      <button onClick={() => handleClick("Bicester")}>Bicester</button>
    </header>
  );
}

export default Header;
