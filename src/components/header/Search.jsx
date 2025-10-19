import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ setCity }) {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setCity(value);
    setValue("");
  }
  return (
    <form
      className="border border-white/20 pl-6 rounded-[50px]"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        type="search"
        name="city"
        id="city"
        placeholder="Search for a city"
        value={value}
        className="focus:outline-none focus:ring-0"
      />
      <button
        className=" w-[44px] h-[44px] rounded-[50px] hover:bg-white/20 cursor-pointer"
        type="submit"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
export default Search;
