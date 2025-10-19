import "../app.css";
import CityButton from "./header/CityButton";
import Search from "./header/Search";

function Header({ setCity }) {
  return (
    <header className="max-w-[1035px] container flex justify-center items-center gap-4 mx-auto  overflow-x-hidden">
      <Search setCity={setCity} />
    </header>
  );
}

export default Header;
