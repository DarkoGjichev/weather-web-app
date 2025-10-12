import { useEffect } from "react";
import getLocation from "../api/getLocation";

function Header({ setLocation }) {
  useEffect(() => {
    getLocation("Middlesbrough").then((data) => {
      setLocation(data);
    });
  }, [setLocation]);

  return (
    <header>
      <h1>Middlesbrough</h1>
    </header>
  );
}

export default Header;
